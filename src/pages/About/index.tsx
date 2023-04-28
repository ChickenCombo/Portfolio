import { H1, H2, Highlight, P, Underline } from "../../components/global";
import { Container } from "./styles";
import CardIcon from "../../components/CardIcon";
import Experience from "../../components/Experience";
import { techStacks } from "../../data";

const About = () => {
  return (
    <Container id="about">
      <H1 className="mb-4">
        <Highlight color="rgb(237, 135, 150)" show>
          About
        </Highlight>
      </H1>
      <H2 className="mb-1">Introduction</H2>
      <P className="mb-3">
        Hello there! I'm Lester, a graduating{" "}
        <Underline color="rgb(255, 198, 69)">
          BSIT student at the University of Santo Tomas
        </Underline>
        , and I major in Web and Mobile App Development. I have a passion for
        taking on challenges and developing applications that make a difference
        and enhance the quality of life for others.
      </P>
      <P className="mb-3">
        I have experience with developing and releasing native Android apps
        using Java/Kotlin, and a little bit of cross-plaform development with
        React Native. Recently, my focus has shifted towards full-stack web
        development, and I am currently focused in improving my proficiency in
        using MERN stack (MongoDB, Express, React, Node.js), as well as building
        REST APIs.
      </P>
      <H2 className="mb-4">Tech Stacks</H2>
      <CardIcon icons={techStacks} />
      <H2 className="mb-4">Experience</H2>
      <Experience />
    </Container>
  );
};

export default About;
