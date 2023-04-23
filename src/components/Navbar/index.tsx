import { Header, Container, IconsContainer, Icon } from "./styles";
import {
  FiHome,
  FiUser,
  FiTerminal,
  FiMail,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

const Navbar = () => {
  return (
    <Header>
      <Container>
        <IconsContainer>
          <Icon>
            <FiHome />
          </Icon>
          <Icon>
            <FiUser />
          </Icon>
          <Icon>
            <FiTerminal />
          </Icon>
          <Icon>
            <FiMail />
          </Icon>
        </IconsContainer>
        <IconsContainer>
          <Icon>
            <FiGithub />
          </Icon>
          <Icon>
            <FiLinkedin />
          </Icon>
        </IconsContainer>
      </Container>
    </Header>
  );
};

export default Navbar;
