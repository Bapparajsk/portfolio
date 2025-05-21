const axios = require("axios");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

const query = `
  query {
    user(login: "${GITHUB_USERNAME}") {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        nodes {
          ... on Repository {
            name
            description
            url
            languages(first: 5, orderBy: {field: SIZE, direction: DESC}) {
              nodes {
                name
              }
            }
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getPinnedRepos = async() =>{
    const data = await axios.post(
        "https://api.github.com/graphql",
        { query },
        {
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                "Content-Type": "application/json",
            },
        }
    );

    const repos = data.data.data.user.pinnedItems.nodes.map((repo) => {
        return {
            name: repo.name,
            description: repo.description,
            url: repo.url,
            languages: repo.languages.nodes.map((lang) => lang.name),
            topics: repo.repositoryTopics.nodes.map((topic) => topic.topic.name),
        };
    });
    return repos;
}