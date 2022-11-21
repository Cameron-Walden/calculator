import { createContext, useState } from "react";

export const CalculatorContext = createContext();

export default function Calculator(props) {
  const [calculator, setCalculator] = useState({
    sign: "",
    number: 0,
    reset: 0,
  });

  return (
    <CalculatorContext.Provider value={{ calculator, setCalculator }}>
      {props.children}
    </CalculatorContext.Provider>
  );
}
