import { H2, P } from "../global";
import { Card, OL, LI, Time, Bullet } from "./styles";

const Experience = () => {
  return (
    <Card>
      <OL>
        <LI className="mb-8">
          <Bullet />
          <Time>Jun 2023 - Present</Time>
          <H2>PwC Acceleration Center Manila</H2>
          <P>Full Stack Developer Associate</P>
        </LI>
        <LI className="mb-8">
          <Bullet />
          <Time>Jan 2023 - Apr 2023</Time>
          <H2>Symph, Inc</H2>
          <P>Software Developer Intern</P>
        </LI>
        <LI className="mb-8">
          <Bullet />
          <Time>Aug 2019 - Jun 2023</Time>
          <H2>University of Santo Tomas</H2>
          <P>
            BS Information Technology, Major in Web and Mobile App Development
          </P>
        </LI>
        <LI>
          <Bullet />
          <Time>Jun 2017 - Jun 2019</Time>
          <H2>University of The East</H2>
          <P>Senior High School, General Academic Strand</P>
        </LI>
      </OL>
    </Card>
  );
};

export default Experience;
