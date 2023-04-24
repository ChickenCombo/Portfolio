import { H1, P, Highlight } from "../../components/global";
import { Badges, Card, Container, ProjectContainer } from "./styles";
import dora from "../../assets/dora.png";
import trinketsofluna from "../../assets/trinketsofluna.png";
import weatherapp from "../../assets/weatherapp.png";
import spotify from "../../assets/spotify.png";
import anime from "../../assets/anime.png";
import stickynotes from "../../assets/stickynotes.png";

const Projects = () => {
  return (
    <Container id="projects">
      <H1>
        <Highlight color="238, 212, 159">Projects</Highlight>
      </H1>
      <ProjectContainer>
        <Card>
          <img className="w-full" src={dora} />
          <div className="px-4 pt-4">
            <H1>Disaster Online Reporting Application V4</H1>
            <P>
              Android-based mobile application that allows users to easily and
              quickly report disasters in real-time.
            </P>
          </div>
          <div className="px-4 py-2">
            <Badges>Java</Badges>
            <Badges>Firebase</Badges>
            <Badges>Android</Badges>
            <Badges>Google Maps</Badges>
          </div>
        </Card>
        <Card>
          <img className="w-full" src={trinketsofluna} />
          <div className="px-4 pt-4">
            <H1>Ecommerce Web App for Trinkets of Luna</H1>
            <P>
              An Ecommerce web app with ordering system, inventory system, and
              payment system.
            </P>
          </div>
          <div className="px-4 py-2">
            <Badges>React.js</Badges>
            <Badges>Firebase</Badges>
            <Badges>PayMongo</Badges>
          </div>
        </Card>
        <Card>
          <img className="w-full" src={weatherapp} />
          <div className="px-4 pt-4">
            <H1>Weather App</H1>
            <P>
              Android-based Weather application to quickly and accurately check
              the weather anywhere.
            </P>
          </div>
          <div className="px-4 py-2">
            <Badges>Java</Badges>
            <Badges>Android</Badges>
            <Badges>OpenWeather</Badges>
          </div>
        </Card>
        <Card>
          <img className="w-full" src={spotify} />
          <div className="px-4 pt-4">
            <H1>Higher or Lower: Spotify</H1>
            <P>
              A simple game which players try to guess whether the next artist
              has higher or lower monthly listeners than the current artist.
            </P>
          </div>
          <div className="px-4 py-2">
            <Badges>React.js</Badges>
            <Badges>TypeScript</Badges>
            <Badges>TailwindCSS</Badges>
            <Badges>Puppeteer</Badges>
          </div>
        </Card>
        <Card>
          <img className="w-full" src={anime} />
          <div className="px-4 pt-4">
            <H1>Higher or Lower: Anime</H1>
            <P>
              A simple game which players try to guess whether the next anime
              has higher or lower rating than the current anime.
            </P>
          </div>
          <div className="px-4 py-2">
            <Badges>Vanilla JavaScript</Badges>
            <Badges>HTML</Badges>
            <Badges>CSS</Badges>
          </div>
        </Card>
        <Card>
          <img className="w-full" src={stickynotes} />
          <div className="px-4 pt-4">
            <H1>Sticky Notes</H1>
            <P>
              A simple sticky notes application applying full-stack development
              using MERN stack.
            </P>
          </div>
          <div className="px-4 py-2">
            <Badges>React.js</Badges>
            <Badges>MongoDB</Badges>
            <Badges>Node.js</Badges>
            <Badges>TypeScript</Badges>
            <Badges>Express</Badges>
          </div>
        </Card>
      </ProjectContainer>
    </Container>
  );
};

export default Projects;
