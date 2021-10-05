import React from "react";
import type { AppProps } from "next/app";
import "../styles/global.css";
import { AppContextProvider } from "../contexts/AppContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
};

export default App;
