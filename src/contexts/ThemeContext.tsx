import { createContext, FC, useContext, useEffect, useState } from "react";
import { themes, ThemeSchema } from "../theme";

export type ThemeType = 0 | 1 | 2;

export type ThemeContextType = {
  theme: ThemeSchema;
  themeIndex: ThemeType;
  toggleTheme: (index: number) => void;
};

const initialValue: ThemeContextType = {
  theme: themes[0],
  themeIndex: 0,
  toggleTheme: (index: number) => {},
};

export const ThemeContext = createContext(initialValue);
export const ThemeContextProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(themes[0]);
  const [themeIndex, setThemeIndex] = useState<ThemeType>(0);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.localStorage.getItem("calc-theme")) {
        const index = Number(window.localStorage.getItem("calc-theme"));
        setTheme(themes[index]);
        setThemeIndex(index as ThemeType);
      } else {
        const index = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? 0
          : 1;
        setTheme(themes[index]);
        setThemeIndex(index);
      }
    }
  }, []);

  const toggleTheme = (index: ThemeType) => {
    setTheme(themes[index]);
    window.localStorage.setItem("calc-theme", index.toString());
    setThemeIndex(index);
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        themeIndex,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
