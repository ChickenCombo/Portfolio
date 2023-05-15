import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", "light");

  useEffect(() => {
    const className = "dark";
    const bodyClasses = window.document.body.classList;

    darkMode === "dark"
      ? bodyClasses.add(className)
      : bodyClasses.remove(className);
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
