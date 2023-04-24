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
    <SiHtml5 />,
    <SiCss3 />,
    <SiJavascript />,
    <SiTypescript />,
    <SiNodedotjs />,
    <SiReact />,
    <SiVite />,
    <SiTailwindcss />,
    <SiStyledcomponents />,
    <SiExpress />,
    <SiMongodb />,
    <SiMysql />,
    <SiFirebase />,
    <SiJest />,
    <SiTestinglibrary />,
    <SiCypress />,
    <SiGit />,
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
