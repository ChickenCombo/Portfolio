import {
  Button,
  H1,
  H2,
  P,
  FlexRow,
  FlexCol,
  Underline,
} from "../../components/global";
import { FiFileText } from "react-icons/fi";
import portrait from "../../assets/portrait.png";
import { Container, Portrait, WavingHand } from "./styles";

const Home = () => {
  return (
    <Container>
      <FlexRow>
        <Portrait>
          <img src={portrait} alt="portrait" />
        </Portrait>
        <FlexCol className="md:justify-center">
          <H1>
            Lester Cuadra <WavingHand>👋</WavingHand>
          </H1>
          <H2>&mdash;&nbsp;Software Developer</H2>
          <P>
            A graduating student at the{" "}
            <Underline $color="decoration-yellow-400">
              University of Santo Tomas
            </Underline>{" "}
            with a passion for programming, I am eager to apply my knowledge in{" "}
            <Underline $color="decoration-blue-400">
              software development
            </Underline>{" "}
            to create innovative applications, while also seeking to further
            enhance my skills and foundational knowledge in full-stack
            development.
          </P>
          <Button className="mt-2">
            <FiFileText />
            Resume
          </Button>
        </FlexCol>
      </FlexRow>
    </Container>
  );
};

export default Home;
