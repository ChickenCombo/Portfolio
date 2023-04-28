import { RoughNotation } from "react-rough-notation";
import tw from "tailwind-styled-components";

interface RoughNotionProps {
  children: React.ReactNode;
  color: string;
  show?: boolean;
}

export const H1 = tw.h1`
  font-bold text-lg
`;

export const H2 = tw.h2`
  font-semibold text-md
`;

export const P = tw.p`
	text-gray-600 text-justify
`;

export const FlexRow = tw.main`
  md:flex md:flex-row
`;

export const FlexCol = tw.main`
  md:flex md:flex-col
`;

export const Button = tw.button`
	flex items-center gap-2
	py-2 px-5 w-fit
	border rounded-lg shadow-md
	hover:border-gray-300
	text-gray-800
	font-semibold
	group
	transition-colors
	hover:text-black hover:bg-gray-100
	bg-white
	${(prop) =>
    prop.disabled ? "cursor-not-allowed bg-gray-200 hover:bg-gray-200" : ""}
`;

export const Highlight = (props: RoughNotionProps) => {
  const { children, color, show } = props;

  return (
    <RoughNotation
      type="highlight"
      color={color}
      animationDuration={500}
      show={show}
    >
      {children}
    </RoughNotation>
  );
};

export const Underline = (props: RoughNotionProps) => {
  const { children, color, show } = props;

  return (
    <RoughNotation
      type="underline"
      color={color}
      strokeWidth={2.5}
      animationDuration={500}
      multiline
      show={show}
    >
      {children}
    </RoughNotation>
  );
};
