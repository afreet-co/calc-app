import { createContext, FC, useContext, useState } from "react";

export type Operator = "+" | "-" | "x" | "/";

export type AppContextType = {
  firstNumber: number;
  secondNumber: number;
  operator?: Operator;
  displayText: string;
  updateInput: (input: string) => void;
};

const initialValue: AppContextType = {
  firstNumber: 0,
  secondNumber: 0,
  displayText: "",
  updateInput: (input: string) => {},
};

export const AppContext = createContext(initialValue);
const isOperator = (input: string) => ["+", "-", "x", "/"].includes(input);
export const AppContextProvider: FC = ({ children }) => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [operator, setOperator] = useState<Operator>();
  const updateInput = (input: string) => {
    switch (input) {
      case "RESET":
        setFirstNumber(0);
        setSecondNumber(0);
        setDisplayText("");
        setOperator(null);
        break;
      case "DEL":
        if (!operator && displayText.length > 0) {
          const lastChar = displayText[displayText.length - 1];
          if (isOperator(lastChar)) setOperator(null);
          else if (operator) setSecondNumber((prev) => Math.floor(prev / 10));
          else setFirstNumber((prev) => Math.floor(prev / 10));
          setDisplayText((prev) => prev.slice(0, prev.length - 1));
        }
        break;
      case "=":
        let result = 0;
        switch (operator) {
          case "+":
            result = firstNumber + secondNumber;
            break;
          case "-":
            result = firstNumber - secondNumber;
            break;
          case "/":
            result = !secondNumber ? firstNumber / secondNumber : 0;
            break;
          case "x":
            result = firstNumber * secondNumber;
            break;
        }
        setDisplayText(result.toString());
        break;
      case "+":
      case "-":
      case "/":
      case "x":
        if (displayText.length > 0) {
          setOperator(input as Operator);
          const str = isOperator(displayText[displayText.length - 1])
            ? displayText.slice(0, displayText.length - 1) + input
            : displayText + input;
          setDisplayText(str);
        }
        break;
      default:
        operator
          ? setSecondNumber((prev) => prev * 10 + +input)
          : setFirstNumber((prev) => prev * 10 + +input);
        setDisplayText((prev) => prev + input);
        break;
    }

    // if (isOperator(input) && !operator && displayText.length > 1) {
    //   setOperator(input as Operator);
    //   const str = isOperator(displayText[displayText.length - 1])
    //     ? displayText.slice(0, displayText.length - 2) + input
    //     : displayText + input;
    //   setDisplayText(str.replace(/,/g, "").replace(/.(?=(?:.{3})+$)/g, "$&,"));
    // } else {
    //   operator
    //     ? setSecondNumber((prev) => prev * 10 + +input)
    //     : setFirstNumber((prev) => prev * 10 + +input);
    //   setDisplayText((prev) => prev + input);
    // }
  };
  return (
    <AppContext.Provider
      value={{
        firstNumber,
        secondNumber,
        operator,
        displayText,
        updateInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
