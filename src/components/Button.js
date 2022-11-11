export default function Button({ button, calculator, setCalculator }) {
  const selectNumButtons = () => {
    const numToString = button.toString();
    let numberValue;
    numToString === "0" && calculator.number === 0
      ? (numberValue = "0")
      : (numberValue = Number(calculator.number + numToString));
    console.log(numberValue, "numValue");
    console.log(numToString, "numToStr");
    setCalculator({
      ...calculator,
      number: numberValue,
    });
  };

  const resetCalc = () => {
    setCalculator({
        sign: '',
        number: 0,
        reset: 0
    });
  };

  const handleAllButtons = () => {
    const buttonValues = {
      C: resetCalc,
    };
    if(buttonValues[button]) {
      return buttonValues[button];
    } else {
      return selectNumButtons;
    }
  };

  return <button onClick={handleAllButtons()}>{button}</button>;
}
