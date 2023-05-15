import tw from "tailwind-styled-components";

export const Container = tw.div`
  mx-auto max-w-4xl w-full px-5 mt-8
`;

export const ProjectContainer = tw.div`
  mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5
`;

export const Card = tw.div`
  rounded overflow-hidden border shadow-md bg-white rounded-lg cursor-pointer transition
  hover:border-gray-300 hover:bg-gray-100
  dark:bg-black dark:border-dark-border dark:hover:bg-dark-hover-bg dark:text-white
`;

export const Badges = tw.span`
  inline-block bg-badge rounded-md px-2.5 py-0.5 text-xs font-medium text-black mr-2 mb-2
`;
