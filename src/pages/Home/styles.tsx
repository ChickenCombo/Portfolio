import tw from "tailwind-styled-components";

export const Container = tw.div`
  flex flex-col items-center justify-center mx-auto max-w-4xl w-full px-5 h-screen max-h-screen
`;

export const Portrait = tw.div`
  flex gap-3 w-32 h-32 relative rounded-full select-none flex-shrink-0 mb-3
  md:w-52 md:h-52 md:mr-8
`;

export const WavingHand = tw.span`
  inline-block animate-wave origin-[70%_70%]
`;

export const ScrollArrow = tw.div`
  flex flex-col items-center absolute bottom-[50px] left-[50%] translate-x-[-50%]
`;
