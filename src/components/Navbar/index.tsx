import { Header, Container, IconsContainer, Icon } from "./styles";
import { FiHome, FiUser, FiTerminal, FiMail } from "react-icons/fi";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <Header>
      <Container>
        <IconsContainer>
          <Icon>
            <Link
              to="homepage"
              spy={true}
              smooth={true}
              offset={-window.innerHeight}
              duration={500}
            >
              <FiHome />
            </Link>
          </Icon>
          <Icon>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              <FiUser />
            </Link>
          </Icon>
          <Icon>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              <FiTerminal />
            </Link>
          </Icon>
          <Icon>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              <FiMail />
            </Link>
          </Icon>
        </IconsContainer>
      </Container>
    </Header>
  );
};

export default Navbar;
