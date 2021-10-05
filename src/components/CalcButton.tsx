import React, { FC } from "react";
import { useThemeContext } from "../contexts/ThemeContext";
type CalcButtonProps = {
  text: string;
  schema: 1 | 2 | 3;
  colSpan: "col-span-1" | "col-span-2";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const CalcButton: FC<CalcButtonProps> = ({
  colSpan,
  text,
  schema,
  onClick,
}) => {
  const { theme } = useThemeContext();
  const classes =
    schema === 1
      ? theme.buttonSchema1
      : schema === 2
      ? theme.buttonSchema2
      : theme.buttonSchema3;
  return (
    <button
      onClick={onClick}
      className={` ${colSpan} px-2 pt-2 pb-1 rounded-md border-b-2 border-solid ${classes}`}
      key={text}
    >
      {text}
    </button>
  );
};
