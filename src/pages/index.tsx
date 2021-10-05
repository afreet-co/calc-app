import React from "react";
import Head from "next/head";
import { KeypadPanel } from "../components/KeypadPanel";
import { useAppContext } from "../contexts/AppContext";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { useThemeContext } from "../contexts/ThemeContext";

const Index = () => {
  const { displayText } = useAppContext();
  const { theme } = useThemeContext();

  return (
    <>
      <Head>
        <title>Frontend Mentor | Calculator app hub</title>
        <link
          rel="icon"
          type="image/png"
          href={`${process.env.NEXT_PUBLIC_PREFIX}/favicon-32x32.png`}
        ></link>
      </Head>
      <div
        className={`h-screen w-screen flex items-center justify-center ${theme.mainBackground}`}
      >
        <div
          className={`flex flex-col justify-start rounded-lg space-y-4 p-4 text-lg ${theme.mainBackground} ${theme.header}`}
        >
          <div className={`w-full flex justify-between items-end `}>
            <h3 className="w-2/3 text-xl">calc</h3>
            <div className="w-1/3  flex justify-between text-sm items-end space-x-2">
              <span className="text-xs">THEME</span>
              <ThemeSwitcher />
            </div>
          </div>
          <div>
            <input
              type="text"
              readOnly
              value={displayText}
              className={`p-4 text-2xl ${theme.screen} rounded-lg text-right focus:outline-none `}
            />
          </div>
          <KeypadPanel />
        </div>
      </div>
    </>
  );
};

export default Index;
