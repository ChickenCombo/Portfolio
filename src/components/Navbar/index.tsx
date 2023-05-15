import { Header, Container, IconsContainer, Icon } from "./styles";
import {
  FiHome,
  FiUser,
  FiTerminal,
  FiMail,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import Navlink from "../Navlink";
import { useDarkMode } from "../../hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <Header>
      <Container>
        <IconsContainer>
          <Navlink to="homepage" offset={0} icon={<FiHome />} />
          <Navlink to="about" offset={-120} icon={<FiUser />} />
          <Navlink to="projects" offset={-120} icon={<FiTerminal />} />
          <Navlink to="contacts" offset={-120} icon={<FiMail />} />
        </IconsContainer>
        <IconsContainer>
          <Icon
            onClick={() => setDarkMode(darkMode === "light" ? "dark" : "light")}
          >
            {darkMode === "light" ? <FiMoon /> : <FiSun />}
          </Icon>
        </IconsContainer>
      </Container>
    </Header>
  );
};

export default Navbar;
