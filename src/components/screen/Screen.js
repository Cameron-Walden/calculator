import { useContext } from "react";
import { CalculatorContext } from "../../context/CalculatorContext";
import "./Screen.css";

export default function Screen() {
  const { calculator } = useContext(CalculatorContext)
  return (
    <div className="screen">
      {!calculator.number && !calculator.result
        ? 0
        : calculator.number
        ? calculator.number
        : calculator.result}
    </div>
  );
}
