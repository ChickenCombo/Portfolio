import { H2, P } from "../global";
import { Card, OL, LI, Time, Bullet } from "./styles";
import { experiences } from "../../data";

const Experience = () => {
  return (
    <Card>
      <OL>
        {experiences
          .slice()
          .reverse()
          .map((experience) => (
            <LI key={experience.id}>
              <Bullet />
              <Time>{experience.timeline}</Time>
              <H2>{experience.company}</H2>
              <P>{experience.position}</P>
            </LI>
          ))}
      </OL>
    </Card>
  );
};

export default Experience;
