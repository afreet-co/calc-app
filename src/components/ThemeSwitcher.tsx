import React from "react";
import { useThemeContext } from "../contexts/ThemeContext";

export const ThemeSwitcher = () => {
  const { theme, themeIndex, toggleTheme } = useThemeContext();
  return (
    <div
      className={`flex flex-col justify-start space-y-1 w-full px-2 ${theme.switchText}`}
    >
      <div className="flex items-center justify-between">
        <button className="text-xs w-4 h-4" onClick={() => toggleTheme(0)}>
          1
        </button>
        <button className="text-xs w-4 h-4" onClick={() => toggleTheme(1)}>
          2
        </button>
        <button className="text-xs w-4 h-4" onClick={() => toggleTheme(2)}>
          3
        </button>
      </div>
      <div
        className={`h-5 w-full ${
          theme.otherBackground
        } rounded-full flex items-center px-1 cursor-pointer ${
          themeIndex === 0
            ? "justify-start"
            : themeIndex === 1
            ? "justify-center"
            : "justify-end"
        }`}
        onClick={() => toggleTheme(themeIndex === 2 ? 0 : themeIndex + 1)}
      >
        <div className={`${theme.switch} h-3 w-3 rounded-full`}></div>
      </div>
    </div>
  );
};
