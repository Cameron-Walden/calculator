import { buttonValues } from "../buttonValues";
import Button from "./Button";

export default function ButtonContainer({ calculator, setCalculator }) {
  return (
    <div>
      {buttonValues.flat().map((button, idx) => (
        <Button
          button={button}
          key={idx}
          calculator={calculator}
          setCalculator={setCalculator}
        />
      ))}
    </div>
  );
}
