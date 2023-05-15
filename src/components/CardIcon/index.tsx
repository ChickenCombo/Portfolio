import { ReactElement, useState } from "react";
import { Container, Card, Popover } from "./styles";
import { Circle } from "../global";

interface CardIcon {
  name: string;
  icon: ReactElement;
}

interface CardIconProps {
  icons: CardIcon[];
}

const CardIcon = (props: CardIconProps) => {
  const { icons } = props;

  const [isPopoverVisible, setIsPopOverVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const onMouseEnter = (index: number) => {
    setIsPopOverVisible(true);
    setHoveredIndex(index);
  };

  const onMouseLeave = () => {
    setIsPopOverVisible(false);
    setHoveredIndex(-1);
  };

  return (
    <Container>
      {icons.map((icon, index) => (
        <Card
          key={index}
          onMouseEnter={() => onMouseEnter(index)}
          onMouseLeave={onMouseLeave}
        >
          {isPopoverVisible && hoveredIndex === index ? (
            <Circle color="rgb(125, 216, 236)">{icon.icon}</Circle>
          ) : (
            <>{icon.icon}</>
          )}
          <Popover
            className={`${
              isPopoverVisible && hoveredIndex === index ? "" : "hidden"
            }`}
          >
            {icon.name}
          </Popover>
        </Card>
      ))}
    </Container>
  );
};

export default CardIcon;
