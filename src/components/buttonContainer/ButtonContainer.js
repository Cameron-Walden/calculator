import { buttonValues } from "../../buttonValues";
import Button from "../button/Button";
import './ButtonContainer.css';

export default function ButtonContainer({ calculator, setCalculator }) {
  return (
    <div className="buttonContainer">
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
