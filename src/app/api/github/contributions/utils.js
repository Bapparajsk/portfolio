import axios from "axios";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const USERNAME = process.env.GITHUB_USERNAME;

if (!GITHUB_TOKEN || !USERNAME) {
  console.error('GITHUB_TOKEN and GITHUB_USERNAME must be set in environment variables');
  process.exit(1);
}

export const fetchContributions = async (year) => {
  try {
    const query = createQuery(year);

    const response = await axios.post(
      'https://api.github.com/graphql',
      { query },
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      }
    );

    const weeks = response.data.data.user.contributionsCollection.contributionCalendar.weeks;
    
    // Flatten the contribution days into a single array
    const contributions = weeks.flatMap(week => week.contributionDays);

    // const labels = contributions.map(c => c.date);
    // const data = contributions.map(c => c.contributionCount);

    const d = contributions.map(c => ({
      date: c.date,
      contributionCount: c.contributionCount
    }))

    return d;
  } catch (error) {
    console.error('Error fetching contributions');
    return null;
  }
}

function getYearStartAndEnd(year) {
    const start = new Date(Date.UTC(year, 0, 1, 0, 0, 0)).toISOString();
    const end = new Date(Date.UTC(year, 11, 31, 23, 59, 59)).toISOString();
    return { from: start, to: end };
}



const createQuery = (year) => {

    const { from, to } = getYearStartAndEnd(year);
    
  return `
    query {
      user(login: "${USERNAME}") {
        contributionsCollection(from: "${from}", to: "${to}") {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;
};

export const isValidYear = (year) => {
  const num = Number(year);
  const currentYear = new Date().getFullYear();

  return (
    !isNaN(num) &&
    Number.isInteger(num) &&
    num >= 2021 &&
    num <= currentYear
  );
}
