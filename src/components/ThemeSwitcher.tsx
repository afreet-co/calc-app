import React, { useState } from "react";

type ThemeType = 1 | 2 | 3;
export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<ThemeType>(1);
  return (
    <div className="flex flex-col justify-start space-y-1 w-full px-2">
      <div className="flex items-center justify-between">
        <button className="text-xs w-4 h-4" onClick={() => setTheme(1)}>
          1
        </button>
        <button className="text-xs w-4 h-4" onClick={() => setTheme(2)}>
          2
        </button>
        <button className="text-xs w-4 h-4" onClick={() => setTheme(3)}>
          3
        </button>
      </div>
      <div
        className={`h-5 w-full bg-gray-800 rounded-full flex items-center px-1 ${
          theme === 1
            ? "justify-start"
            : theme === 2
            ? "justify-center"
            : "justify-end"
        }`}
        onClick={() =>
          setTheme((prev) => (prev === 3 ? 1 : ((prev + 1) as ThemeType)))
        }
      >
        <div className="bg-red-500 h-3 w-3 rounded-full"></div>
      </div>
    </div>
  );
};
