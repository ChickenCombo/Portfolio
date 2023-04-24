import tw from "tailwind-styled-components";

export const Card = tw.div`
  rounded-md border pointer bg-white m-1 transition-colors p-8 shadow-md
  hover:border-gray-300
`;

export const OL = tw.ol`
  relative border-l border-black
`;

export const LI = tw.li`
  ml-4
`;

export const Bullet = tw.div`
  absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5
`;

export const Time = tw.time`
  mb-1 text-sm font-normal leading-none text-gray-700
`;