import tw from "tailwind-styled-components";

export const H1 = tw.h1`
    font-bold text-lg
`;

export const H2 = tw.h2`
    font-semibold text-md
`;

export const P = tw.p`
    text-gray-600 text-justify
`;

export const Underline = tw.span<{ $color: string }>`
    font-semibold underline decoration-wavy underline-offset-4
    ${(props) => props.$color}
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
    border rounded-md shadow-md
    hover:border-gray-300
    text-gray-800
    font-semibold
    group
    transition-colors
    hover:text-black
    bg-white
`;
