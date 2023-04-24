import tw from "tailwind-styled-components";

export const Container = tw.div`
  flex flex-row flex-wrap w-full justify-center mb-3
`;

export const Card = tw.button`
  h-16 w-16 grid place-items-center rounded-md border pointer bg-white m-1 transition-colors text-4xl
  hover:border-gray-300
`;

export const Popover = tw.div`
  absolute h-10 min-w-20 bg-white shadow-sm rounded-lg p-4 text-sm border transform translate-y-9
  flex justify-center items-center
`;
