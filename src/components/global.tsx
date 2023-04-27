import tw from "tailwind-styled-components";
import styled from "styled-components";

interface HighlightProps {
  color: string;
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

export const Highlight = styled.span<HighlightProps>`
  background: linear-gradient(
      104deg,
      rgba(${(props) => props.color}, 0) 0.9%,
      rgba(${(props) => props.color}, 1.25) 2.4%,
      rgba(${(props) => props.color}, 0.5) 5.8%,
      rgba(${(props) => props.color}, 0.1) 93%,
      rgba(${(props) => props.color}, 0.7) 96%,
      rgba(${(props) => props.color}, 0) 98%
    ),
    linear-gradient(
      183deg,
      rgba(${(props) => props.color}, 0) 0%,
      rgba(${(props) => props.color}, 0.3) 7.9%,
      rgba(${(props) => props.color}, 0) 15%
    );
  padding: 0.2em 13.7px;
  border-radius: 7.5px;
  text-shadow: -12px 12px 9.8px rgba(${(props) => props.color}, 0.7),
    21px -18.1px 7.3px rgba(255, 255, 255, 1),
    -18.1px -27.3px 30px rgba(255, 255, 255, 1);
`;
