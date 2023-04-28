import { H1, Highlight, P } from "../../components/global";
import { Badges, Card, Container, ProjectContainer } from "./styles";
import { projects } from "../../data";

const Projects = () => {
  return (
    <Container id="projects">
      <H1 className="mb-4">
        <Highlight color="rgb(166, 218, 149)" show>
          Projects
        </Highlight>
      </H1>
      <ProjectContainer>
        {projects.map((project) => (
          <Card key={project.id}>
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
    </Container>
  );
};

export default Projects;
