import React from "react";
import { CalcButton } from "./CalcButton";
import { useAppContext } from "../contexts/AppContext";
import { buttonData } from "../data/buttonData";
import { useThemeContext } from "../contexts/ThemeContext";

export const KeypadPanel = () => {
  const { updateInput } = useAppContext();
  const { theme } = useThemeContext();

  return (
    <div
      className={`${theme.otherBackground} rounded-lg p-4 grid grid-cols-4 gap-4`}
    >
      {buttonData.map((item) => (
        <CalcButton
          key={item.text}
          onClick={() => updateInput(item.text)}
          {...item}
        />
      ))}
    </div>
  );
};
