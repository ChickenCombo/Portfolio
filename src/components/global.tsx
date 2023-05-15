import { RoughNotation } from "react-rough-notation";
import tw from "tailwind-styled-components";

interface RoughNotionProps {
  children: React.ReactNode;
  color: string;
}

export const H1 = tw.h1`
  font-bold text-lg dark:text-white transition
`;

export const H2 = tw.h2`
  font-semibold text-md dark:text-white transition
  `;

export const P = tw.p`
  text-gray-600 text-justify dark:text-dark-text transition
`;

export const FlexRow = tw.main`
  md:flex md:flex-row
`;

export const FlexCol = tw.main`
  md:flex md:flex-col
`;

export const Button = tw.button`
  flex items-center gap-2 w-fit py-2 px-5 border rounded-lg shadow-md text-gray-800 font-semibold group bg-white transition
	hover:text-black hover:bg-gray-100 hover:border-gray-300
  dark:bg-black dark:border-dark-border dark:hover:dark-hover-bg dark:text-white
	${(prop) =>
    prop.disabled ? "cursor-not-allowed bg-gray-200 hover:bg-gray-200" : ""}
`;

export const Highlight = (props: RoughNotionProps) => {
  const { children, color } = props;

  return (
    <RoughNotation type="highlight" color={color} animationDuration={500} show>
      {children}
    </RoughNotation>
  );
};

export const Underline = (props: RoughNotionProps) => {
  const { children, color } = props;

  return (
    <RoughNotation
      type="underline"
      color={color}
      strokeWidth={2.5}
      animationDuration={500}
      multiline
      show
    >
      {children}
    </RoughNotation>
  );
};

export const Brackets = (props: RoughNotionProps) => {
  const { children, color } = props;

  return (
    <RoughNotation
      type="bracket"
      color={color}
      brackets={["left", "right"]}
      strokeWidth={2.5}
      animationDuration={500}
      show
    >
      {children}
    </RoughNotation>
  );
};

export const Circle = (props: RoughNotionProps) => {
  const { children, color } = props;

  return (
    <RoughNotation
      type="circle"
      color={color}
      strokeWidth={2.5}
      animationDuration={500}
      show
    >
      {children}
    </RoughNotation>
  );
};
