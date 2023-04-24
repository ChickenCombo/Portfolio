import tw from "tailwind-styled-components";

export const Container = tw.div`
    flex flex-row flex-wrap w-full justify-center
`;

export const Card = tw.button`
    h-16 w-16 grid place-items-center rounded-md border pointer bg-white m-1
    hover:border-gray-300
    transition-colors
    text-4xl
`;
