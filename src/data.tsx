import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiStyledcomponents,
  SiVite,
  SiJest,
  SiTestinglibrary,
  SiCypress,
  SiGit,
  SiKotlin,
  SiPython,
  SiSolidity,
  SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import dora from "./assets/dora.png";
import trinketsofluna from "./assets/trinketsofluna.png";
import weatherapp from "./assets/weatherapp.png";
import spotify from "./assets/spotify.png";
import anime from "./assets/anime.png";
import voting from "./assets/voting.png";

export const projects = [
  {
    id: 1,
    image: dora,
    name: "Disaster Online Reporting Application V4",
    description:
      "Android-based mobile application that allows users to easily and quickly report disasters in real-time.",
    badges: ["Java", "Firebase", "Android", "Google Maps"],
    url: "https://github.com/ChickenCombo/disaster-online-reporting-application",
  },
  {
    id: 2,
    image: trinketsofluna,
    name: "Ecommerce Web App for Trinkets of Luna",
    description:
      "An Ecommerce web app with ordering system, inventory system, and payment system.",
    badges: ["React.js", "Firebase", "PayMongo"],
    url: "https://github.com/cedricquitor/trinketsofluna-ecommerce-web-app",
  },
  {
    id: 3,
    image: voting,
    name: "Blockchain Voting dApp",
    description:
      "A blockchain-based electoral college voting dApp project on the Ethereum blockchain.",
    badges: [
      "React.js",
      "TypeScript",
      "Hardhat",
      "Solidity",
      "TailwindCSS",
      "Web3",
    ],
    url: "https://github.com/cedricquitor/blockchain-web-app",
  },
  {
    id: 4,
    image: spotify,
    name: "Higher or Lower: Spotify",
    description:
      "A simple game which players try to guess whether the next artist has higher or lower monthly listeners than the current artist.",
    badges: ["React.js", "TypeScript", "TailwindCSS", "Puppeteer"],
    url: "https://github.com/ChickenCombo/higher-or-lower-spotify",
  },
  {
    id: 5,
    image: anime,
    name: "Higher or Lower: Anime",
    description:
      "A simple game which players try to guess whether the next anime has higher or lower rating than the current anime.",
    badges: ["Vanilla JavaScript", "HTML", "CSS"],
    url: "https://github.com/ChickenCombo/higher-or-lower-anime",
  },
  {
    id: 6,
    image: weatherapp,
    name: "Weather App",
    description:
      "Android-based Weather application to quickly and accurately check the weather anywhere.",
    badges: ["Java", "Android", "OpenWeather", "Geocoding API"],
    url: "https://github.com/ChickenCombo/weather-app",
  },
];

export const techStacks = [
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "styled-components", icon: <SiStyledcomponents /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Jest", icon: <SiJest /> },
  { name: "React Testing Library", icon: <SiTestinglibrary /> },
  { name: "Cypress", icon: <SiCypress /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Kotlin", icon: <SiKotlin /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Solidity", icon: <SiSolidity /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
];
