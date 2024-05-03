import { H1, H2, Highlight, P, Underline } from "../../components/global";
import { Container } from "./styles";
import CardIcon from "../../components/CardIcon";
import Experience from "../../components/Experience";
import {
  backendStacks,
  databaseStacks,
  frontendStacks,
  programmingLanguages,
} from "../../data";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { useRef } from "react";
import { RoughNotationGroup } from "react-rough-notation";

const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInViewport = useIsInViewport(ref);

  return (
    <Container id="about" ref={ref}>
      <RoughNotationGroup show={isInViewport}>
        <H1 className="mb-4">
          <Highlight color="rgb(237, 135, 150)">About</Highlight>
        </H1>
        <H2 className="mb-1">Introduction</H2>
        <P className="mb-3">
          Hello there! I'm Lester, a{" "}
          <Underline color="rgb(255, 198, 69)">BSIT </Underline>graduate at the
          University of Santo Tomas, and I major in Web and Mobile App
          Development. I have a passion for taking on challenges and developing
          applications that make a difference and enhance the quality of life
          for others.
        </P>
        <P className="mb-3">
          I have experience with building full stack web applications using
          <Underline color="rgb(255, 198, 69)">
            {" "}
            Angular or React/Next.js{" "}
          </Underline>
          for my frontend and{" "}
          <Underline color="rgb(255, 198, 69)">NestJS or Express.js </Underline>
          for my backend.
        </P>
        <H2 className="mb-4">Main Programming Languages</H2>
        <CardIcon icons={programmingLanguages} />
        <H2 className="mb-4">Frontend Frameworks</H2>
        <CardIcon icons={frontendStacks} />
        <H2 className="mb-4">Backend Frameworks</H2>
        <CardIcon icons={backendStacks} />
        <H2 className="mb-4">Database</H2>
        <CardIcon icons={databaseStacks} />
        <H2 className="mb-4">Experience</H2>
        <Experience />
      </RoughNotationGroup>
    </Container>
  );
};

export default About;
