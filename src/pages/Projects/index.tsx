import { H1, Highlight, P } from "../../components/global";
import { Badges, Card, Container, ProjectContainer } from "./styles";
import { projects } from "../../data";
import { useRef } from "react";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { RoughNotationGroup } from "react-rough-notation";

const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInViewport = useIsInViewport(ref);

  const handleCardClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Container id="projects" ref={ref}>
      <RoughNotationGroup show={isInViewport}>
        <H1 className="mb-4">
          <Highlight color="rgb(166, 218, 149)">Projects</Highlight>
        </H1>
        <ProjectContainer>
          {projects.map((project) => (
            <Card key={project.id} onClick={() => handleCardClick(project.url)}>
              <img className="w-full" src={project.image} />
              <div className="px-4 pt-4">
                <H1>{project.name}</H1>
                <P>{project.description}</P>
              </div>
              <div className="px-4 py-2">
                {project.badges.map((badge, index) => (
                  <Badges key={index}>{badge}</Badges>
                ))}
              </div>
            </Card>
          ))}
        </ProjectContainer>
      </RoughNotationGroup>
    </Container>
  );
};

export default Projects;
