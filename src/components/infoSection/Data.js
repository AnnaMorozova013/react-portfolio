export const projects = [
  {
    id: "projects",
    github: true,
    githubLink: "https://github.com/AnnaMorozova013/react-portfolio",
    deploy: false,
    deployLink: "",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Projects",
    headline: "This Website",
    description:
      `A website as a showcase of my skills, potential and motivation.

React | Styled-Components | Javascript `,
    imgStart: false,
    img: require("../../images/portfolio.png"),
    alt: "Ironhack logo",
    dark: false,
    primary: false,
    darkText: true,
  },
  {
    id: "projects",
    github: true,
    githubLink: "https://github.com/AnnaMorozova013/react-search-app",
    deploy: false,
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Projects",
    headline: "Search component",
    description: 
`A React search component with a text field where the user can type text and the search results appear in a drop-down list below as an auto-suggest functionality.

React | Tailwind CSS | Javascript`,
    imgStart: false,
    img: require("../../images/search.png"),
    alt: "Challenge to show react skills",
    dark: false,
    primary: false,
    darkText: true,
  },
  {
    id: "projects",
    github: true,
    githubLink: "https://github.com/AnnaMorozova013/calma",
    deploy: false,
    deployLink: "",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Projects",
    headline: "Calma - Mood tracking app",
    description:
`MERN app designed to track the mood on a weekly basis. It contains the functionality of adding moods and journal entries as well as reviewing them.  

React | Express.js | MongoDB | Node.js | Javascript`,
    imgStart: false,
    img: require("../../images/calma.png"),
    alt: "Ironhack logo",
    dark: false,
    primary: false,
    darkText: true,
  },
  {
    id: "projects",
    github: true,
    githubLink: "https://github.com/AnnaMorozova013/katas",
    deploy: false,
    deployLink: "",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Projects",
    headline: "Katas: solutions to pure Javascript",
    description:
`Katas are Javascript problems from the website Codewars that help programmers sharp their skills and creativity.

My repository in Github can give an overview of my current Javascript knowledge.`,
    imgStart: false,
    img: require("../../images/katas.png"),
    alt: "Ironhack logo",
    dark: false,
    primary: false,
    darkText: true,
  },
  {
    id: "projects",
    github: true,
    githubLink: "https://github.com/Durumsky/Minimalfin",
    deploy: true,
    deployLink: "https://minimalfin.herokuapp.com/",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Projects",
    headline: "Minimalfin",
    description:
`Group project. A CRUD app which tracks expenses and gives an insight of how money is being spent.

Users can also publish posts with ideas on financial minimalism.

Express.js | MongoDB | Node.js | Javascript`,
    imgStart: false,
    img: require("../../images/minimalfin.png"),
    alt: "Ironhack logo",
    dark: false,
    primary: false,
    darkText: true,
  },
  {
    id: "projects",
    github: true,
    githubLink: "https://github.com/AnnaMorozova013/hedgehog",
    deploy: true,
    deployLink: "https://annamorozova013.github.io/hedgehog/",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Projects",
    headline: "p5.js",
    description:
`This game was my first project during the Bootcamp at Ironhack.

Basics of Javascript were used to create this fun game.


p5.js | Javascript | HTML`,
    imgStart: false,
    img: require("../../images/hedgehog.png"),
    alt: "Ironhack logo",
    dark: false,
    primary: false,
    darkText: true,
  },
];

export const education = [
  {
    id: "education",
    certificate: true,
    certificateLink: "https://www.credential.net/b9876a4f-ec00-4d05-8cc4-0a3524c46fb7#gs.wkqrq2",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Education",
    headline: "Web Development Bootcamp at Ironhack Berlin 🏆",
    description:
      "Over 450 hours of intense training on MERN (MongoDB, Express.js, React and Node.js), Javascript, HTML and CSS, GIT",
    buttonLabel: "Learn more",
    imgStart: true,
    img: require("../../images/ironhack.png"),
    alt: "Coding projects",
    dark: true,
    primary: true,
    darkText: false,
  },
  {
    id: "education",
    certificate: false,
    certificateLink: "",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Education",
    headline: "Udemy and SuperHi courses on basics of coding and project management 🚀",
    description:
      `Completed courses: Plan, Design + Code Your First Website (SuperHi), JavaScript Basics for Beginners (Udemy), Project Management - best practices (Udemy)`,
    buttonLabel: "Learn more",
    imgStart: true,
    img: require("../../images/udemy.png"),
    alt: "Coding projects",
    dark: true,
    primary: true,
    darkText: false, 
  },
  
  {
    id: "education",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Education",
    headline: "Higher Education",
    description: 
`Bachelor in Tourism Economics 🌎

Major in Health Tourism, Destination Management and Hospitality
`,
    buttonLabel: "Learn more",
    imgStart: true,
    img: require("../../images/svg-2.svg").default,
    alt: "Coding projects",
    dark: true,
    primary: true,
    darkText: false, 
  },
];

export const aboutMe = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "About me",
  headline: "Enthusiastic to learn, improve and create an impact",
  description: `I consider myself a dependable and empathic person, a fast learner, open-minded and devoted. I enjoy traveling the world, learning about new cultures from different people. I am into tennis, bouldering, psychology and yoga.
`,
  buttonLabel: "Learn more",
  imgStart: false,
  img: require("../../images/about.png"),
  alt: "Coding projects",
  dark: false,
  primary: false,
  darkText: true, 
};

export const contact = {
  id: "contact",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "E-mail",
  headline: "a.morozova.nrw@gmail.com",
  description: `Open to job opportunities and coding challenges. 
`,
  buttonLabel: "Learn more",
  imgStart: false,
  img: require("../../images/about.png"),
  alt: "Coding projects",
  dark: false,
  primary: false,
  darkText: true, 
};
