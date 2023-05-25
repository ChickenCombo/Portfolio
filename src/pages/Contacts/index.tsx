import { FormEvent, useRef, useState } from "react";
import { H1, P, Button, Highlight, Brackets } from "../../components/global";
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
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { RoughNotationGroup } from "react-rough-notation";

const Contacts = () => {
  const [result, setResult] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);
  const isInViewport = useIsInViewport(ref);

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
    <Container id="contacts" ref={ref}>
      <RoughNotationGroup show={isInViewport}>
        <H1 className="mb-4">
          <Highlight color="rgb(198, 160, 246)">Contacts</Highlight>
        </H1>
        <Card>
          <H1>Let's build something!</H1>
          <P className="mb-4">
            Feel free to contact me via my socials or fill-up the form bellow
            for any inquiries, I'm always open for new opportunities and
            projects!
          </P>
          <div className="w-fit py-2">
            <Brackets color="rgb(255, 198, 69)">
              <P className="flex items-center text-sm truncate">
                <FiMail className="mr-2" />
                johnlestercuadra.dev@gmail.com
              </P>
              <P className="flex items-center text-sm truncate">
                <FiLinkedin className="mr-2" />
                in/johnlestercuadra
              </P>
              <P className="flex items-center text-sm truncate">
                <FiGithub className="mr-2" />
                ChickenCombo
              </P>
            </Brackets>
          </div>
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
                <CgSpinner className="animate-spin text-lg mr-1 text-black dark:text-white" />
              ) : (
                result && (
                  <CgCheck className="text-2xl text-black dark:text-white" />
                )
              )}
              <p className="text-sm text-gray-600 dark:text-white">{result}</p>
            </FlexRow>
          </Form>
        </Card>
      </RoughNotationGroup>
    </Container>
  );
};

export default Contacts;
