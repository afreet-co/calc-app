import React, { FC } from "react";

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
  const classes =
    schema === 1
      ? "text-gray-600 bg-gray-100 border-gray-400"
      : schema === 2
      ? "text-gray-200 bg-gray-600 border-gray-700"
      : "text-red-100 bg-red-500 border-red-700";
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
