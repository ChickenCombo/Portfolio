import { ReactElement } from "react";
import { Container, Card } from "./styles";

interface CardIconProps {
  icons: ReactElement[];
}

const CardIcon = (props: CardIconProps) => {
  const { icons } = props;

  return (
    <Container>
      {icons.map((icon) => (
        <Card>{icon}</Card>
      ))}
    </Container>
  );
};

export default CardIcon;
