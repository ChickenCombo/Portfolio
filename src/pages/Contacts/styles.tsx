import tw from "tailwind-styled-components";

export const Container = tw.div`
  mx-auto max-w-4xl w-full px-5 mt-8
`;

export const Card = tw.div`
  rounded-lg border pointer bg-white transition-colors p-8 shadow-md
  hover:border-gray-300
  dark:bg-black dark:border-dark-border dark:hover:bg-dark-hover-bg
`;

export const Form = tw.form`
  mt-4 space-y-4
`;

export const Label = tw.label`
  block mb-2 text-sm font-medium text-black dark:text-white
`;

export const Input = tw.input`
  shadow-md bg-gray-50 border border-gray-300 text-black text-sm rounded-lg
  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5
  dark:bg-black dark:border-dark-border dark:text-white
`;

export const Textarea = tw.textarea`
  block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-md border border-gray-300
  focus:ring-primary-500 focus:border-primary-500
  dark:bg-black dark:border-dark-border dark:text-white
`;

export const FlexRow = tw.div`
  flex flex-row items-center
`;
