import { P } from "../GlobalStyles";
import { Container, Footnote, Icon, IconsContainer } from "./styles";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  const handleGithubClick = () => {
    window.open("https://github.com/ChickenCombo", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/johnlestercuadra", "_blank");
  };

  return (
    <Footnote>
      <Container>
        <P className="pl-2">Made with 💖 by Lester</P>
        <IconsContainer>
          <Icon>
            <FiGithub onClick={handleGithubClick} />
          </Icon>
          <Icon>
            <FiLinkedin onClick={handleLinkedInClick} />
          </Icon>
        </IconsContainer>
      </Container>
    </Footnote>
  );
};

export default Footer;
