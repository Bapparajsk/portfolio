import { type } from "os";

export const getIcon = ({ name, className }) => {
  className = "text-gray-400" + className;
  const map = {
    home: <Home className={className} />,
    about: <About className={className} />,
    project: <Project className={className} />,
    phone: <Phone className={className} />,
    github: <GitHub className={className} />,
    linkedin: <Linkedin className={className} />,
    resume: <Resume className={className} />,
    x: <X className={className} />,
    star: <Star className={className} />,
    checks: <Checks className={className} />,
    list: <List className={className} />,
    projectList: <ProjectsList className={className} />,
    circleCheck: <CircleCheck className={className} />,
    geometry: <Geometry className={className} />,
    leetcode: <Leetcode className={className} />,
    pencilCheck: <PencilCheck className={className} />,
    share: <Share className={className} />,
    rightArrow: <RightArrow className={className} />,
    bottomArrow: <BottomArrow className={className} />,
    code: <Code className={className} />,
    tool: <Tool className={className} />,
    javaScript: <JavaScript className={className} />,
    typeScript: <TypeScript className={className} />,
    java: <Java className={className} />,
    nextJs: <NextJs className={className} />,
    react: <React className={className} />,
    express: <Express className={className} />,
    mongoDB: <MongoDB className={className} />,
    redis: <Redis className={className} />,
    aws: <AWS className={className} />,
    googleCloud: <GoogleCloud className={className} />,
    fireBase: <FireBase className={className} />,
    tailwind: <Tailwind />,
    sass: <Sass className={className} />,
    mq: <MQ className={className}/>,
    nodeCluster: <NodeCluster className={className}/>
  };

  return map[name] || <Notfound />;
};

const XmlnsScr = "http://www.w3.org/2000/svg";

function NodeCluster({className}) {
  return (
    <svg  xmlns={XmlnsScr}  width={24}  height={24}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className={className}><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M15 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" /><path d="M12 9l0 3" /></svg>
  )
}

function MQ({ className }) {
  return (
    <svg xmlns={XmlnsScr} width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" /><path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" /></svg>
  )
}

function Sass({ className }) {
  return (
    <svg xmlns={XmlnsScr} width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10.523c2.46 -.826 4 -.826 4 -2.155c0 -1.366 -1.347 -1.366 -2.735 -1.366c-1.91 0 -3.352 .49 -4.537 1.748c-.848 .902 -1.027 2.449 -.153 3.307c.973 .956 3.206 1.789 2.884 3.493c-.233 1.235 -1.469 1.823 -2.617 1.202c-.782 -.424 -.454 -1.746 .626 -2.512s2.822 -.992 4.1 -.24c.98 .575 1.046 1.724 .434 2.193" /></svg>
  )
}

function Tailwind({ className }) {
  return (
    <svg xmlns={XmlnsScr} width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" /></svg>
  )
}

function FireBase({ className }) {
  return (
    <svg xmlns={XmlnsScr} width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4.53 17.05l6.15 -11.72h-.02c.38 -.74 1.28 -1.02 2.01 -.63c.26 .14 .48 .36 .62 .62l1.06 2.01" /><path d="M15.47 6.45c.58 -.59 1.53 -.59 2.11 -.01c.22 .22 .36 .5 .41 .81l1.5 9.11c.1 .62 -.2 1.24 -.76 1.54l-6.07 2.9c-.46 .25 -1.01 .26 -1.46 0l-6.02 -2.92c-.55 -.31 -.85 -.92 -.75 -1.54l1.96 -12.04c.12 -.82 .89 -1.38 1.7 -1.25c.46 .07 .87 .36 1.09 .77l1.24 1.76" /><path d="M4.57 17.18l10.93 -10.68" /></svg>
  )
}

function GoogleCloud({ className }) {
  return (
    <svg xmlns={XmlnsScr} x="0px" y="0px" width="48" height="48" viewBox="0,0,256,256" className={className}>
      <defs><linearGradient x1="46.95" y1="23.75" x2="24.45" y2="25.25" gradientUnits="userSpaceOnUse" id="color-1_fpGM2cINbbu4_gr1"><stop offset="0" stop-color="#000000"></stop><stop offset="1" stop-color="#000000"></stop></linearGradient><linearGradient x1="24.835" y1="9.608" x2="18.428" y2="19.289" gradientUnits="userSpaceOnUse" id="color-2_fpGM2cINbbu4_gr2"><stop offset="0" stop-color="#000000"></stop><stop offset="0.523" stop-color="#000000"></stop><stop offset="0.712" stop-color="#000000"></stop><stop offset="0.846" stop-color="#000000"></stop><stop offset="0.954" stop-color="#000000"></stop><stop offset="1" stop-color="#000000"></stop></linearGradient><linearGradient x1="31.305" y1="40.347" x2="8.555" y2="30.222" gradientUnits="userSpaceOnUse" id="color-3_fpGM2cINbbu4_gr3"><stop offset="0" stop-color="#000000"></stop><stop offset="0.486" stop-color="#000000"></stop><stop offset="0.661" stop-color="#000000"></stop><stop offset="0.786" stop-color="#000000"></stop><stop offset="0.887" stop-color="#000000"></stop><stop offset="0.972" stop-color="#000000"></stop><stop offset="1" stop-color="#000000"></stop></linearGradient><linearGradient x1="17.16" y1="28.692" x2="7.285" y2="19.067" gradientUnits="userSpaceOnUse" id="color-4_fpGM2cINbbu4_gr4"><stop offset="0" stop-color="#000000"></stop><stop offset="0.482" stop-color="#000000"></stop><stop offset="0.655" stop-color="#000000"></stop><stop offset="0.779" stop-color="#000000"></stop><stop offset="0.879" stop-color="#000000"></stop><stop offset="0.964" stop-color="#000000"></stop><stop offset="1" stop-color="#000000"></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M38.193,18.359c-0.771,-2.753 -2.319,-5.177 -4.397,-7.03l-4.598,4.598c1.677,1.365 2.808,3.374 3.014,5.648v1.508c0.026,0 0.05,-0.008 0.076,-0.008c2.322,0 4.212,1.89 4.212,4.212c0,2.322 -1.89,4.213 -4.212,4.213c-0.026,0 -0.05,-0.007 -0.076,-0.008v0.008h-6.666h-1.546v6.5h8.212v-0.004c0.026,0 0.05,0.004 0.076,0.004c5.907,0 10.712,-4.806 10.712,-10.712c0,-3.725 -1.914,-7.009 -4.807,-8.929z" fill="url(#color-1_fpGM2cINbbu4_gr1)"></path><path d="M19.56,25.59l4.72,-4.72c-0.004,-0.005 -0.008,-0.009 -0.011,-0.013l-4.717,4.717c0.002,0.005 0.005,0.01 0.008,0.016z" fill="#000000" opacity="0.5"></path><path d="M19.56,25.59l4.72,-4.72c-0.004,-0.005 -0.008,-0.009 -0.011,-0.013l-4.717,4.717c0.002,0.005 0.005,0.01 0.008,0.016z" fill="#000000" opacity="0.5"></path><path d="M24,7.576c-8.133,0 -14.75,6.617 -14.75,14.75c0,0.233 0.024,0.46 0.035,0.69h6.5c-0.019,-0.228 -0.035,-0.457 -0.035,-0.69c0,-4.549 3.701,-8.25 8.25,-8.25c1.969,0 3.778,0.696 5.198,1.851l4.598,-4.598c-2.608,-2.326 -6.035,-3.753 -9.796,-3.753z" fill="url(#color-2_fpGM2cINbbu4_gr2)"></path><path d="M15.712,31.5v0c-0.001,0 -0.001,0 -0.002,0c-0.611,0 -1.188,-0.137 -1.712,-0.373l-4.71,4.71c1.793,1.351 4.013,2.163 6.422,2.163c0.001,0 0.001,0 0.002,0v0h8.288v-6.5z" fill="#000000" opacity="0.5"></path><path d="M15.712,31.5v0c-0.001,0 -0.001,0 -0.002,0c-0.611,0 -1.188,-0.137 -1.712,-0.373l-4.71,4.71c1.793,1.351 4.013,2.163 6.422,2.163c0.001,0 0.001,0 0.002,0v0h8.288v-6.5z" fill="url(#color-3_fpGM2cINbbu4_gr3)"></path><path d="M11.5,27.29c0,-2.32 1.89,-4.21 4.21,-4.21c1.703,0 3.178,1.023 3.841,2.494l4.717,-4.717c-1.961,-2.602 -5.065,-4.277 -8.559,-4.277c-5.899,0 -10.709,4.8 -10.709,10.71c0,3.491 1.691,6.59 4.288,8.547l4.71,-4.71c-1.468,-0.658 -2.498,-2.128 -2.498,-3.837z" fill="url(#color-4_fpGM2cINbbu4_gr4)"></path></g></g>
    </svg>
  )
}

function AWS({ className }) {
  return (
    <svg xmlns={XmlnsScr} width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 18.5a15.198 15.198 0 0 1 -7.37 1.44a14.62 14.62 0 0 1 -6.63 -2.94" /><path d="M19.5 21c.907 -1.411 1.451 -3.323 1.5 -5c-1.197 -.773 -2.577 -.935 -4 -1" /><path d="M3 11v-4.5a1.5 1.5 0 0 1 3 0v4.5" /><path d="M3 9h3" /><path d="M9 5l1.2 6l1.8 -4l1.8 4l1.2 -6" /><path d="M18 10.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" /></svg>
  )
}

function Redis({ className }) {
  return (
    <svg xmlns={XmlnsScr} x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" className={className}>
      <path fill="#fff" d="M46.008,31.885c0-0.653-1.727-1.183-3.861-1.183c-1.856,0-3.401,0.401-3.773,0.934 c-3.674-1.737-7.349-3.475-11.023-5.213c-1.279-0.605-2.739-0.599-4.014,0.014c-3.912,1.884-7.823,3.768-11.735,5.652 c-0.885-0.129-1.954-0.206-3.106-0.206c-3.05,0.001-5.492,0.526-5.492,1.18c0,0-0.012,3.301,0,3.7 c-0.009,0.809,0.092,1.187,0.685,1.467c5.779,2.733,11.558,5.466,17.337,8.199c1.467,0.747,3.143,0.743,4.606-0.016 c6.6-3.179,13.2-6.358,19.801-9.537c0.496-0.239,0.598-0.657,0.563-1.336C45.996,34.285,46.008,31.885,46.008,31.885z"></path><path d="M25.359,27.974c0.392,0,0.774,0.087,1.136,0.258l8.159,3.859l2.865,1.355l1.529,0.723l0.807-1.158 c0.326-0.125,1.126-0.307,2.293-0.307c0.805,0,1.436,0.087,1.857,0.181c-0.003,0.741-0.007,1.741-0.007,2.464l-6.256,3.013 l-12.976,6.25l-0.027,0.013l-0.026,0.014c-0.445,0.231-0.915,0.348-1.396,0.348c-0.475,0-0.94-0.114-1.382-0.339l-0.026-0.013 l-0.026-0.012l-8.893-4.206l-7.987-3.777C4.997,36.333,4.997,35.31,5,34.19c0.697-0.15,1.885-0.306,3.495-0.306 c1.013,0,1.988,0.064,2.818,0.185l0.605,0.088l0.551-0.266l9.552-4.601l2.182-1.051C24.57,28.063,24.96,27.974,25.359,27.974 M25.359,25.974c-0.69,0-1.38,0.155-2.023,0.464c-3.912,1.884-7.823,3.768-11.735,5.652c-0.885-0.129-1.954-0.206-3.106-0.206 c-3.05,0.001-5.492,0.526-5.492,1.18c0,0-0.012,3.301,0,3.7c-0.009,0.809,0.092,1.187,0.685,1.467 c5.779,2.733,11.558,5.466,17.337,8.199c0.729,0.371,1.509,0.557,2.289,0.557c0.791,0,1.581-0.191,2.317-0.573 c6.6-3.179,13.2-6.358,19.801-9.537c0.496-0.239,0.598-0.657,0.563-1.336c0-1.254,0.012-3.654,0.012-3.654 c0-0.653-1.727-1.183-3.861-1.183c-1.856,0-3.401,0.401-3.773,0.934c-3.674-1.737-7.349-3.475-11.023-5.213 C26.716,26.123,26.038,25.974,25.359,25.974L25.359,25.974z"></path><path fill="#fff" d="M21.038,41.976c-5.771-2.58-11.541-5.16-17.313-7.741c-0.963-0.431-0.968-1.796-0.008-2.233 c6.545-2.98,13.088-5.96,19.633-8.941c1.281-0.583,2.75-0.588,4.035-0.014c6.017,2.691,12.035,5.381,18.052,8.072 c0.79,0.353,0.794,1.474,0.006,1.832c-6.594,3.003-13.187,6.006-19.782,9.008C24.194,42.628,22.51,42.634,21.038,41.976z"></path><path d="M25.383,24.621L25.383,24.621c0.411,0,0.81,0.085,1.185,0.253l8.949,4.001l7.091,3.17L24.833,40.14 c-0.474,0.216-0.979,0.325-1.501,0.325c-0.513,0-1.01-0.106-1.479-0.315l-7.885-3.525l-7.86-3.514l8.025-3.654l10.045-4.574 C24.56,24.708,24.965,24.621,25.383,24.621 M25.383,22.621c-0.693,0-1.387,0.147-2.032,0.441c-6.545,2.98-13.089,5.96-19.633,8.941 c-0.96,0.437-0.955,1.802,0.008,2.233c5.771,2.58,11.541,5.16,17.313,7.741c0.73,0.326,1.513,0.49,2.295,0.49 c0.795,0,1.59-0.168,2.329-0.505c6.595-3.002,13.188-6.005,19.782-9.008c0.788-0.359,0.784-1.479-0.006-1.832 c-6.017-2.691-12.035-5.381-18.052-8.072C26.748,22.763,26.065,22.62,25.383,22.621L25.383,22.621z"></path><path fill="#fff" d="M45.996,23.023c0-0.653-1.692-1.252-3.825-1.252c-1.855,0-3.4,0.401-3.771,0.934 c-3.672-1.737-7.345-3.475-11.017-5.213c-1.278-0.605-2.737-0.599-4.012,0.014c-3.909,1.884-7.819,3.768-11.728,5.652 c-0.885-0.129-1.953-0.206-3.105-0.206c-3.048,0.001-5.527,0.598-5.527,1.251c0,0,0,3.234-0.009,3.551 c0.009,0.712,0.139,1.266,0.732,1.546c5.776,2.733,11.551,5.466,17.327,8.199c1.466,0.694,3.142,0.688,4.604-0.016 c6.596-3.179,13.193-6.358,19.79-9.537c0.496-0.239,0.559-0.714,0.54-1.278C45.963,25.685,45.996,23.023,45.996,23.023z"></path><path d="M25.393,19.043c0.392,0,0.773,0.087,1.134,0.257l8.251,3.905l2.767,1.309l1.529,0.723l0.807-1.159 c0.326-0.125,1.125-0.307,2.29-0.307c0.781,0,1.404,0.098,1.816,0.201c-0.006,0.756-0.01,1.783,0.003,2.46l-6.281,3.027 l-12.911,6.222c-0.461,0.222-0.949,0.335-1.451,0.335c-0.494,0-0.974-0.109-1.429-0.324l-8.614-4.076l-8.299-3.927 c0.005-0.402,0.006-1.513,0.007-2.391c0.698-0.167,1.904-0.344,3.527-0.344c1.013,0,1.986,0.064,2.815,0.185l0.606,0.089 l0.552-0.266l4.726-2.277l7.002-3.374C24.606,19.133,24.994,19.043,25.393,19.043 M25.393,17.043c-0.69,0-1.379,0.155-2.022,0.464 c-3.909,1.884-7.819,3.768-11.728,5.652c-0.885-0.129-1.953-0.206-3.105-0.206c-3.048,0.001-5.527,0.598-5.527,1.251 c0,0,0,3.234-0.009,3.551c0.009,0.712,0.139,1.266,0.732,1.546c5.776,2.733,11.551,5.466,17.327,8.199 c0.727,0.344,1.506,0.516,2.284,0.516c0.791,0,1.582-0.178,2.319-0.533c6.596-3.179,13.193-6.358,19.79-9.537 c0.496-0.239,0.559-0.714,0.54-1.278c-0.033-0.983,0-3.645,0-3.645c0-0.653-1.692-1.252-3.825-1.252 c-1.855,0-3.4,0.401-3.771,0.934c-3.672-1.737-7.345-3.475-11.017-5.213C26.75,17.193,26.071,17.043,25.393,17.043L25.393,17.043z"></path><path fill="#fff" d="M21.069,33.051c-5.789-2.592-11.577-5.185-17.366-7.777c-0.936-0.419-0.941-1.746-0.007-2.172 c6.561-2.993,13.121-5.985,19.683-8.978c1.27-0.579,2.727-0.584,4.001-0.014c6.035,2.703,12.07,5.405,18.105,8.108 c0.763,0.342,0.767,1.424,0.006,1.771c-6.61,3.015-13.22,6.031-19.831,9.045C24.201,33.7,22.529,33.705,21.069,33.051z"></path><path d="M25.393,15.687L25.393,15.687c0.405,0,0.798,0.084,1.168,0.25l9.158,4.101l6.871,3.077l-17.762,8.101 c-0.468,0.214-0.967,0.322-1.482,0.322c-0.507,0-0.998-0.105-1.46-0.312l-8.389-3.757L6.152,24.18l7.806-3.56l10.25-4.675 C24.582,15.773,24.981,15.687,25.393,15.687 M25.393,13.687c-0.688,0-1.375,0.146-2.015,0.438 c-6.561,2.993-13.121,5.985-19.683,8.978c-0.933,0.426-0.928,1.753,0.008,2.172c5.789,2.592,11.577,5.185,17.366,7.777 c0.725,0.324,1.501,0.487,2.277,0.487c0.789,0,1.578-0.167,2.312-0.502c6.611-3.014,13.221-6.03,19.831-9.045 c0.761-0.347,0.757-1.429-0.006-1.771c-6.035-2.703-12.07-5.405-18.105-8.108C26.747,13.828,26.07,13.687,25.393,13.687 L25.393,13.687z"></path><path fill="#fff" d="M46.008,14.07c0-0.653-1.719-1.297-3.852-1.297c-1.855,0-3.4,0.401-3.771,0.934 c-3.672-1.737-7.345-3.475-11.017-5.213c-1.278-0.605-2.737-0.599-4.012,0.014c-3.909,1.884-7.819,3.768-11.728,5.652 c-0.885-0.129-1.953-0.206-3.105-0.206c-3.048,0.001-5.514,0.53-5.514,1.184c0,0-0.027,3.627-0.015,3.66 c-0.026,0.606,0.132,1.223,0.725,1.503c5.776,2.733,11.551,5.466,17.327,8.199c1.466,0.694,3.142,0.688,4.604-0.016 c6.596-3.179,13.193-6.358,19.79-9.537c0.496-0.239,0.576-0.728,0.558-1.264C45.99,17.006,46.008,14.07,46.008,14.07z"></path><path d="M25.378,10.045c0.392,0,0.773,0.087,1.134,0.257l8.207,3.884l2.81,1.33l1.529,0.723l0.807-1.159 c0.326-0.125,1.125-0.307,2.29-0.307c0.797,0,1.434,0.109,1.847,0.223c-0.004,0.766-0.008,1.816-0.005,2.426l-6.85,3.301 l-12.365,5.959c-0.461,0.222-0.949,0.335-1.451,0.335c-0.494,0-0.974-0.109-1.429-0.324l-8.664-4.099l-8.238-3.898L5.01,18.48 l-0.019-0.051c0-0.433,0.004-1.263,0.01-2.162c0.7-0.152,1.898-0.311,3.522-0.311c1.013,0,1.986,0.064,2.816,0.185l0.606,0.089 l0.552-0.266l8.565-4.128l3.162-1.524C24.59,10.135,24.979,10.045,25.378,10.045 M25.378,8.045c-0.69,0-1.379,0.155-2.022,0.464 c-3.909,1.884-7.819,3.768-11.728,5.652c-0.885-0.129-1.953-0.206-3.105-0.206c-3.048,0.001-5.514,0.53-5.514,1.184 c0,0-0.027,3.627-0.015,3.66c-0.026,0.606,0.132,1.223,0.725,1.503c5.776,2.733,11.551,5.466,17.327,8.199 c0.727,0.344,1.506,0.516,2.284,0.516c0.791,0,1.582-0.178,2.319-0.533c6.596-3.179,13.193-6.358,19.79-9.537 c0.496-0.239,0.576-0.728,0.558-1.264c-0.009-0.677,0.009-3.612,0.009-3.612c0-0.653-1.719-1.297-3.852-1.297 c-1.855,0-3.4,0.401-3.771,0.934c-3.672-1.737-7.345-3.475-11.017-5.213C26.734,8.195,26.056,8.045,25.378,8.045L25.378,8.045z"></path><g><path fill="#fff" d="M21.073,24.049c-5.779-2.584-11.556-5.167-17.335-7.751c-0.956-0.427-0.96-1.782-0.008-2.216 c6.552-2.984,13.103-5.967,19.656-8.951c1.278-0.582,2.745-0.587,4.027-0.014c6.025,2.694,12.05,5.387,18.075,8.082 c0.783,0.35,0.787,1.46,0.006,1.816c-6.601,3.007-13.202,6.013-19.805,9.018C24.224,24.7,22.542,24.706,21.073,24.049z"></path><path d="M25.415,6.691c0.41,0,0.807,0.085,1.182,0.252l8.913,3.985l7.131,3.188L24.86,22.213c-0.473,0.215-0.977,0.325-1.497,0.325 c-0.512,0-1.008-0.106-1.475-0.315l-8.668-3.875l-7.081-3.166l8.995-4.096l9.079-4.134C24.594,6.779,24.997,6.691,25.415,6.691 M25.414,4.691c-0.692,0-1.384,0.147-2.029,0.44c-6.552,2.984-13.103,5.967-19.656,8.951c-0.953,0.434-0.948,1.789,0.008,2.216 c5.779,2.584,11.556,5.167,17.335,7.751c0.729,0.326,1.51,0.489,2.291,0.489c0.794,0,1.587-0.168,2.326-0.504 c6.602-3.005,13.203-6.012,19.805-9.018c0.78-0.355,0.777-1.466-0.006-1.816c-6.025-2.694-12.05-5.387-18.075-8.082 C26.777,4.833,26.096,4.691,25.414,4.691L25.414,4.691z"></path></g><path d="M18.973,14.477c-0.002,0.745-2.128,1.471-3.923,1.492c-1.863,0.021-4.062-0.71-4.069-1.467	c-0.007-0.759,2.189-1.545,4.091-1.527C16.869,12.992,18.975,13.734,18.973,14.477z"></path><path d="M17.796,17.846c1.947,0.831,3.893,1.664,5.84,2.495c0.857-1.269,1.715-2.538,2.572-3.807	C23.404,16.972,20.6,17.41,17.796,17.846z"></path><path d="M22.761,10.538c-0.896,0.326-1.792,0.652-2.688,0.978c1.226,0.107,2.453,0.215,3.679,0.321	c0.391,0.648,0.78,1.295,1.171,1.942c0.24-0.587,0.48-1.175,0.72-1.762c1.046-0.081,2.092-0.163,3.139-0.244	c-0.811-0.341-1.622-0.683-2.433-1.024c0.207-0.495,0.413-0.989,0.62-1.485c-0.789,0.236-1.577,0.472-2.367,0.708	c-0.87-0.343-1.741-0.686-2.611-1.029C22.247,9.475,22.504,10.007,22.761,10.538z"></path><path d="M28.882,14.289c1.918-0.765,3.24-1.496,5.158-2.261c1.657,0.704,3.314,1.409,4.972,2.113	c-1.86,0.74-3.121,1.445-4.981,2.185C32.315,15.646,30.598,14.968,28.882,14.289z"></path>
    </svg>
  )
}

function MongoDB({ className }) {
  return (
    <svg xmlns={XmlnsScr} width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3v19" /><path d="M18 11.227c0 3.273 -1.812 4.77 -6 9.273c-4.188 -4.503 -6 -6 -6 -9.273c0 -4.454 3.071 -6.927 6 -9.227c2.929 2.3 6 4.773 6 9.227z" /></svg>
  )
}

function Express({ className }) {
  return (
    <svg xmlns={XmlnsScr} x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48" className={className}>
      <path fill="#212121" d="M23.697,37.56h1.18c0.84,0,1.631-0.392,2.139-1.061l7.485-9.847l7.485,9.847	c0.508,0.668,1.299,1.061,2.139,1.061h1.18L35.756,25l9.121-12h-1.18c-0.84,0-1.631,0.392-2.139,1.061L34.5,23.347l-7.059-9.287	C26.933,13.392,26.142,13,25.302,13h-1.18l9.121,12L23.697,37.56z"></path><path fill="#212121" d="M24,26v-3c0-6.675-5.945-11.961-12.829-10.852C5.812,13.011,2,17.857,2,23.284L2,24v2v0.142	c0,6.553,4.777,11.786,10.868,11.858c5.092,0.06,9.389-3.344,10.707-7.999h-1.028c-0.62,0-1.182,0.355-1.451,0.913	c-1.739,3.595-5.789,5.862-10.228,4.842C6.776,34.815,4,30.981,4,26.783V26H24z M4,23.71c0-4.708,2.804-8.557,6.924-9.478	C16.798,12.92,22,17.352,22,23v1H4V23.71z"></path>
    </svg>
  )
}

function React({ className }) {
  return (
    <svg xmlns={XmlnsScr} width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg>
  )
}

function NextJs({ className }) {
  return (
    <svg xmlns={XmlnsScr} width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" /><path d="M15 12v-3" /></svg>
  )
}

function Java({ className }) {
  return (
    <svg xmlns={XmlnsScr} x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" className={className}>
      <path d="M 28.1875 -0.00390625 C 30.9375 6.359375 18.320313 10.289063 17.152344 15.59375 C 16.074219 20.460938 24.640625 26.121094 24.644531 26.121094 C 23.34375 24.105469 22.402344 22.441406 21.097656 19.304688 C 18.890625 14 34.53125 9.203125 28.1875 -0.00390625 Z M 36.550781 8.8125 C 36.550781 8.8125 25.503906 9.511719 24.941406 16.582031 C 24.691406 19.730469 27.84375 21.410156 27.9375 23.703125 C 28.007813 25.570313 26.050781 27.128906 26.050781 27.128906 C 26.050781 27.128906 29.601563 26.460938 30.714844 23.605469 C 31.945313 20.4375 28.328125 18.273438 28.691406 15.738281 C 29.042969 13.3125 36.550781 8.8125 36.550781 8.8125 Z M 39.230469 25.144531 C 38.074219 25.09375 36.789063 25.476563 35.625 26.3125 C 37.90625 25.824219 39.835938 27.21875 39.835938 28.828125 C 39.835938 32.453125 34.597656 35.878906 34.597656 35.878906 C 34.597656 35.878906 42.707031 34.953125 42.707031 29 C 42.707031 26.539063 41.152344 25.234375 39.230469 25.144531 Z M 19.183594 25.152344 C 19.183594 25.152344 9.0625 25.015625 9.0625 27.878906 C 9.0625 30.871094 22.316406 31.082031 31.78125 29.238281 C 31.78125 29.238281 34.308594 27.507813 34.980469 26.863281 C 28.777344 28.128906 14.621094 28.296875 14.621094 27.203125 C 14.621094 26.191406 19.183594 25.152344 19.183594 25.152344 Z M 16.738281 30.722656 C 15.1875 30.722656 12.871094 31.921875 12.871094 33.078125 C 12.871094 35.402344 24.5625 37.195313 33.21875 33.796875 L 30.222656 31.960938 C 24.355469 33.839844 13.539063 33.238281 16.738281 30.722656 Z M 18.179688 35.921875 C 16.050781 35.921875 14.671875 37.234375 14.671875 38.203125 C 14.671875 41.1875 27.378906 41.488281 32.414063 38.453125 L 29.214844 36.417969 C 25.453125 38.007813 16.007813 38.222656 18.179688 35.921875 Z M 11.089844 38.625 C 7.621094 38.554688 5.367188 40.113281 5.367188 41.40625 C 5.363281 48.28125 40.890625 47.949219 40.890625 40.921875 C 40.890625 39.757813 39.515625 39.203125 39.019531 38.9375 C 41.921875 45.65625 9.96875 45.136719 9.96875 41.171875 C 9.96875 40.269531 12.3125 39.382813 14.492188 39.808594 L 12.644531 38.757813 C 12.101563 38.675781 11.582031 38.632813 11.089844 38.625 Z M 44.636719 43.25 C 39.234375 48.367188 25.546875 50.234375 11.78125 47.074219 C 25.542969 52.703125 44.566406 49.535156 44.636719 43.25 Z"></path>
    </svg>
  )
}

function TypeScript({ className }) {
  return (
    <svg xmlns={XmlnsScr} width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" /><path d="M9 12h4" /><path d="M11 12v6" /><path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z" /></svg>
  )
}

function JavaScript({ className }) {
  return (
    <svg xmlns={XmlnsScr} width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M7.5 8h3v8l-2 -1" /><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" /></svg>
  )
}

function Tool({ className }) {
  return (
    <svg xmlns={XmlnsScr} width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" /></svg>
  );
}

function Code({ className }) {
  return (
    <svg xmlns={XmlnsScr} width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>
  )
}

function Notfound() {
  return (
    <svg
      xmlns={XmlnsScr}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-danger-400"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  );
}

function BottomArrow({ className }) {
  return (
    <svg
      xmlns={XmlnsScr}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 5l0 14" />
      <path d="M16 15l-4 4" />
      <path d="M8 15l4 4" />
    </svg>
  );
}

function RightArrow({ className }) {
  return (
    <svg
      xmlns={XmlnsScr}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 12h13" />
      <path d="M18 9l3 3l-3 3" />
      <path d="M5.5 9.5l-2.5 2.5l2.5 2.5l2.5 -2.5z" />
    </svg>
  );
}

function Share({ className }) {
  return (
    <svg
      xmlns={XmlnsScr}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8" />
      <path d="M3 10h18" />
      <path d="M10 3v18" />
      <path d="M16 22l5 -5" />
      <path d="M21 21.5v-4.5h-4.5" />
    </svg>
  );
}

function PencilCheck({ className }) {
  return (
    <svg
      xmlns={XmlnsScr}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
      <path d="M13.5 6.5l4 4" />
      <path d="M15 19l2 2l4 -4" />
    </svg>
  );
}

function Leetcode({ className }) {
  return (
    <svg
      xmlns={XmlnsScr}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 13h7.5" />
      <path d="M9.424 7.268l4.999 -4.999" />
      <path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313" />
    </svg>
  );
}

function Geometry({ className }) {
  return (
    <svg
      xmlns={XmlnsScr}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 21l4 -12m2 0l1.48 4.439m.949 2.847l1.571 4.714" />
      <path d="M12 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M4 12c1.526 2.955 4.588 5 8 5c3.41 0 6.473 -2.048 8 -5" />
      <path d="M12 5v-2" />
    </svg>
  );
}

function CircleCheck({ className }) {
  return (
    <svg
      xmlns={XmlnsScr}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M9 12l2 2l4 -4" />
    </svg>
  );
}

function ProjectsList({ className }) {
  return (
    <svg
      xmlns={XmlnsScr}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M6 8h.01" />
      <path d="M9 8h.01" />
    </svg>
  );
}

function List({ className }) {
  return (
    <svg
      xmlns={XmlnsScr}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
      <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
      <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
      <path d="M11 6l9 0" />
      <path d="M11 12l9 0" />
      <path d="M11 18l9 0" />
    </svg>
  );
}

function Checks({ className }) {
  return (
    <svg
      xmlns={XmlnsScr}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 12l5 5l10 -10" />
      <path d="M2 12l5 5m5 -5l5 -5" />
    </svg>
  );
}

function Star({ className }) {
  return (
    <svg
      xmlns={XmlnsScr}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
    </svg>
  );
}

function X({ className }) {
  return (
    <svg
      xmlns={XmlnsScr}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function Resume({ className }) {
  return (
    <svg
      xmlns={XmlnsScr}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
      <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </svg>
  );
}

function Linkedin({ className }) {
  return (
    <svg
      xmlns={XmlnsScr}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 11v5" />
      <path d="M8 8v.01" />
      <path d="M12 16v-5" />
      <path d="M16 16v-3a2 2 0 1 0 -4 0" />
      <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
    </svg>
  );
}

function GitHub({ className }) {
  return (
    <svg
      xmlns={XmlnsScr}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </svg>
  );
}

function Phone({ className }) {
  return (
    <svg
      xmlns={XmlnsScr}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    </svg>
  );
}

function Project({ className }) {
  return (
    <svg
      xmlns={XmlnsScr}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
      <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  );
}

function About({ className }) {
  return (
    <svg
      xmlns={XmlnsScr}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    </svg>
  );
}

function Home({ className }) {
  return (
    <svg
      xmlns={XmlnsScr}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
    </svg>
  );
}
