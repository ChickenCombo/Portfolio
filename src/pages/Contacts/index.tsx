import { FormEvent, useState } from "react";
import { H1, P, Highlight, Button } from "../../components/global";
import {
  Card,
  Container,
  Form,
  Input,
  Label,
  Textarea,
  FlexRow,
} from "./styles";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import { CgSpinner, CgCheck } from "react-icons/cg";

const Contacts = () => {
  const [result, setResult] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setResult("Sending...");
    setIsSending(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setResult(res.message);
      setIsSending(false);
    } else {
      setResult(res.message);
      setIsSending(false);
    }
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
        <P className="flex items-center text-sm truncate">
          <FiMail className="mr-2" />
          johnlester.cuadra.cics@ust.edu.ph
        </P>
        <P className="flex items-center text-sm truncate">
          <FiLinkedin className="mr-2" />
          in/johnlestercuadra
        </P>
        <P className="flex items-center text-sm truncate">
          <FiGithub className="mr-2" />
          ChickenCombo
        </P>
        <Form onSubmit={handleFormSubmit}>
          <div>
            <Label>Your email</Label>
            <Input
              type="email"
              name="email"
              placeholder="name@domain.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <Label>Your message</Label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              maxLength={500}
              placeholder="Leave a message..."
            />
          </div>
          <FlexRow>
            <Button className="mr-2" type="submit" disabled={isSending}>
              <FiSend />
              Send
            </Button>
            {isSending ? (
              <CgSpinner className="animate-spin text-lg mr-1" />
            ) : (
              result && <CgCheck className="text-2xl" />
            )}
            <p className="text-sm text-gray-600">{result}</p>
          </FlexRow>
        </Form>
      </Card>
    </Container>
  );
};

export default Contacts;
