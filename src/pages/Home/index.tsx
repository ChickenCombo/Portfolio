import {
  Button,
  H1,
  H2,
  P,
  FlexRow,
  FlexCol,
  Highlight,
  Underline,
} from "../../components/global";
import { FiArrowDown, FiFileText } from "react-icons/fi";
import resume from "../../assets/resume.pdf";
import portrait from "../../assets/portrait.png";
import { Container, Portrait, ScrollArrow, WavingHand } from "./styles";
import { RoughNotationGroup } from "react-rough-notation";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { useRef } from "react";

const Home = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInViewport = useIsInViewport(ref);

  const handleResumeClick = () => {
    window.open(resume, "_blank");
  };

  return (
    <Container id="homepage" ref={ref}>
      <RoughNotationGroup show={isInViewport}>
        <FlexRow>
          <Portrait>
            <img src={portrait} alt="portrait" />
          </Portrait>
          <FlexCol className="md:justify-center">
            <H1>
              <Highlight color="rgb(125, 216, 236)">
                Lester Cuadra <WavingHand>👋</WavingHand>
              </Highlight>
            </H1>
            <H2>
              <Highlight color="rgb(125, 216, 236)">
                &mdash;&nbsp;Software Developer
              </Highlight>
            </H2>
            <P>
              A graduating student at the{" "}
              <Underline color="rgb(255, 198, 69)">
                University of Santo Tomas
              </Underline>{" "}
              with a passion for programming, whose eager to apply my knowledge
              in software development to create innovative applications, while
              also seeking to further enhance my skills and foundational
              knowledge in{" "}
              <Underline color="rgb(255, 198, 69)">
                full-stack development.
              </Underline>
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
      </RoughNotationGroup>
    </Container>
  );
};

export default Home;
