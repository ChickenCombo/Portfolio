import tw from "tailwind-styled-components";

export const Container = tw.div`
  flex flex-row flex-wrap w-full mb-3
`;

export const Card = tw.button`
  h-16 w-16 grid place-items-center rounded-lg border pointer bg-white m-1 transition-colors text-4xl shadow-md
  hover:border-gray-300 hover:bg-gray-100ss
  dark:bg-black dark:border-dark-border dark:hover:bg-dark-hover-bg dark:text-white
`;

export const Popover = tw.div`
  absolute h-10 min-w-20 bg-white shadow-md rounded-lg p-4 text-sm border transform translate-y-9
  flex justify-center items-center text-black
  dark:bg-black dark:border-dark-border dark:text-white
`;
