import tw from "tailwind-styled-components";

export const Footnote = tw.footer`
  my-4 max-w-4xl w-full px-5 mx-auto
`;

export const Container = tw.div`
  flex items-center justify-between backdrop-blur-sm bg-opacity-50 bg-white border p-3 rounded-lg shadow-md dark:bg-black dark:bg-opacity-50 dark:border-dark-border
`;

export const IconsContainer = tw.div`
  flex gap-3 p-2
`;

export const Icon = tw.div`
  text-gray-500 hover:text-black pointer text-lg px-1 transition duration-200 ease-in-out dark:text-dark-icon dark:hover:text-white
`;
