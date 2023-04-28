import { Icon } from "./styles";
import { Link } from "react-scroll";

interface NavlinkProps {
  to: string;
  offset: number;
  icon: React.ReactNode;
}

const Navlink = (props: NavlinkProps) => {
  const { to, offset, icon } = props;

  return (
    <Icon>
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={offset}
        duration={500}
      >
        {icon}
      </Link>
    </Icon>
  );
};

export default Navlink;
