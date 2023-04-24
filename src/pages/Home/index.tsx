import {
  Button,
  H1,
  H2,
  P,
  FlexRow,
  FlexCol,
  Highlight,
} from "../../components/global";
import { FiArrowDown, FiFileText } from "react-icons/fi";
import resume from "../../assets/resume.pdf";
import portrait from "../../assets/portrait.png";
import { Container, Portrait, ScrollArrow, WavingHand } from "./styles";

const Home = () => {
  const handleResumeClick = () => {
    window.open(resume, "_blank");
  };

  return (
    <Container id="homepage">
      <FlexRow>
        <Portrait>
          <img src={portrait} alt="portrait" />
        </Portrait>
        <FlexCol className="md:justify-center">
          <H1>
            <Highlight color="145, 215, 227">
              Lester Cuadra <WavingHand>👋</WavingHand>
            </Highlight>
          </H1>
          <H2>
            <Highlight color="145, 215, 227">
              &mdash;&nbsp;Software Developer
            </Highlight>
          </H2>
          <P>
            A graduating student at the University of Santo Tomas with a passion
            for programming, I am eager to apply my knowledge in software
            development to create innovative applications, while also seeking to
            further enhance my skills and foundational knowledge in full-stack
            development.
          </P>
          <Button className="mt-2" onClick={handleResumeClick}>
            <FiFileText />
            Resume
          </Button>
        </FlexCol>
      </FlexRow>
      <ScrollArrow>
        <P className="animate-bounce">
          <FiArrowDown size={24} />
        </P>
        <P>Scroll down</P>
      </ScrollArrow>
    </Container>
  );
};

export default Home;
