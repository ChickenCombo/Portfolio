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
} from "react-icons/si";
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
  ];

  return (
    <Container id="about">
      <H1 className="mb-3">
        <Highlight color="130, 255, 173">About</Highlight>
      </H1>
      <H2 className="mb-1">Info</H2>
      <P>• Graduating student at the University of Santo Tomas</P>
      <P>• Specializes in Web and Mobile App Development</P>
      <P>• From Quezon City, PH</P>
      <H2 className="mb-1">Tech Stacks</H2>
      <CardIcon icons={techStacks} />
      <H2 className="mb-1">Experience</H2>
    </Container>
  );
};

export default About;
