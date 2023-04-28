import { Header, Container, IconsContainer } from "./styles";
import { FiHome, FiUser, FiTerminal, FiMail } from "react-icons/fi";
import Navlink from "../Navlink";

const Navbar = () => {
  return (
    <Header>
      <Container>
        <IconsContainer>
          <Navlink to="homepage" offset={0} icon={<FiHome />} />
          <Navlink to="about" offset={-120} icon={<FiUser />} />
          <Navlink to="projects" offset={-120} icon={<FiTerminal />} />
          <Navlink to="contacts" offset={-120} icon={<FiMail />} />
        </IconsContainer>
      </Container>
    </Header>
  );
};

export default Navbar;
