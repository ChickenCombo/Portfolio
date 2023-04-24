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
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { H1, H2, P, Highlight } from "../../components/global";
import { Container } from "./styles";
import CardIcon from "../../components/CardIcon";

const About = () => {
  const techStacks = [
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
    { name: "Git", icon: <SiGit /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Kotlin", icon: <SiKotlin /> },
    { name: "Python", icon: <SiPython /> },
  ];

  return (
    <Container id="about">
      <H1 className="mb-4">
        <Highlight color="130, 255, 173">About</Highlight>
      </H1>
      <H2 className="mb-1">Introduction</H2>
      <P className="mb-3">
        Hello there! I'm Lester, a graduating BSIT student at the University of
        Santo Tomas, and I major in Web and Mobile App Development. I have a
        passion for taking on challenges and developing applications that make a
        difference and enhance the quality of life for others.
      </P>
      <P className="mb-3">
        I have experience with developing and releasing native Android apps
        using Java/Kotlin, and a little it of cross-plaform development with
        React Native. Recently, my focus has shifted towards full-stack web
        development, and I am currently engaged in honing my proficiency in the
        MERN stack (MongoDB, Express, React, Node.js), as well as building REST
        APIs.
      </P>
      <H2 className="mb-4">Tech Stacks</H2>
      <CardIcon icons={techStacks} />
      <H2 className="mb-4">Experience</H2>
    </Container>
  );
};

export default About;
