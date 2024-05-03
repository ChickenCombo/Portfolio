import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiAngular,
  SiNextdotjs,
  SiNestjs,
  SiMicrosoftsqlserver,
} from "react-icons/si";
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

export const programmingLanguages = [
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
];

export const frontendStacks = [
  { name: "Angular", icon: <SiAngular /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <SiReact /> },
];

export const backendStacks = [
  { name: "NestJS", icon: <SiNestjs /> },
  { name: "Express.js", icon: <SiExpress /> },
];

export const databaseStacks = [
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MS SQL Server", icon: <SiMicrosoftsqlserver /> },
  { name: "MongoDB", icon: <SiMongodb /> },
];

export const experiences = [
  {
    id: 1,
    timeline: "Jun 2017 - Jun 2019",
    company: "University of The East",
    position: "Senior High School, General Academic Strand",
  },
  {
    id: 2,
    timeline: "Aug 2019 - Jun 2023",
    company: "University of Santo Tomas",
    position:
      "BS Information Technology, Major in Web and Mobile App Development",
  },
  {
    id: 3,
    timeline: "Jan 2023 - Apr 2023",
    company: "Symph",
    position: "Software Developer Intern",
  },
  {
    id: 4,
    timeline: "Jun 2023 - Present",
    company: "PwC Acceleration Center Manila",
    position: "Full Stack Developer Associate",
  },
];
