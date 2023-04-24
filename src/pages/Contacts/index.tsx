import { FormEvent } from "react";
import { H1, P, Highlight, Button, H2 } from "../../components/global";
import { Card, Container, Form, Input, Label, Textarea } from "./styles";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";

const Contacts = () => {
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: Implement form submission email
  };

  return (
    <Container id="contacts">
      <H1 className="mb-4">
        <Highlight color="198, 160, 246">Contacts</Highlight>
      </H1>
      <Card>
        <H1>Let's build something.</H1>
        <P className="mb-4">
          Feel free to contact me via my socials or fill-up the form bellow for
          any inquiries, I'm always open for new opportunities and projects!
        </P>
        <H2 className="flex items-center">
          <FiMail className="mr-2" />
          johnlester.cuadra.cics@ust.edu.ph
        </H2>
        <H2 className="flex items-center">
          <FiLinkedin className="mr-2" />
          in/johnlestercuadra
        </H2>
        <H2 className="flex items-center">
          <FiGithub className="mr-2" />
          ChickenCombo
        </H2>
        <Form onSubmit={handleFormSubmit}>
          <div>
            <Label>Your email</Label>
            <Input type="email" placeholder="juandelacruz@gmail.com" required />
          </div>
          <div>
            <Label>Subject</Label>
            <Input
              type="text"
              placeholder="Let me know how I can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <Label>Your message</Label>
            <Textarea id="message" rows={6} placeholder="Leave a message..." />
          </div>
          <Button type="submit">
            <FiSend />
            Send
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Contacts;
