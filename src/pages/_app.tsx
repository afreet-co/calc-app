import React from "react";
import type { AppProps } from "next/app";
import "../styles/global.css";
import { AppContextProvider } from "../contexts/AppContext";
import { ThemeContextProvider } from "../contexts/ThemeContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppContextProvider>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </AppContextProvider>
  );
};

export default App;
