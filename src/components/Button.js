export default function Button({ button, calculator, setCalculator }) {
  const selectNumButtons = () => {
    const numToString = button.toString();
    let numberValue;
    numToString === "0" && calculator.number === 0
      ? (numberValue = "0")
      : (numberValue = Number(calculator.number + numToString));
    setCalculator({
      ...calculator,
      number: numberValue,
    });
  };

  const resetCalculator = () => {
    setCalculator({
      sign: "C",
      number: 0,
      result: 0,
    });
  };

  const selectAddition = () => {
    setCalculator({
      sign: "+",
      number: 0,
      result:
        !calculator.result && calculator.number
          ? calculator.number
          : calculator.result,
    });
  };

  const selectSubtraction = () => {
    setCalculator({
      sign: "-",
      number: 0,
      result:
        !calculator.result && calculator.number
          ? calculator.number
          : calculator.result,
    });
  };

  const selectMultiplication = () => {
    setCalculator({
      sign: "x",
      number: 0,
      result:
        !calculator.result && calculator.number
          ? calculator.number
          : calculator.result,
    });
  };

  const selectDivision = () => {
    setCalculator({
      sign: "/",
      number: 0,
      result:
        !calculator.result && calculator.number
          ? calculator.number
          : calculator.result,
    });
  };

  const selectEquals = () => {
    const getTotal = (a, b, sign) => {
      const total = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        'x': (a, b) => a * b,
        '/': (a, b) => a / b,
      };
      console.log(total, "total");
      console.log(total[sign], "total sign");
      console.log(total[sign](a, b), "total sign ab");
      return total[sign](a, b);
    };
    console.log(calculator.result, "calc res");
    setCalculator({
      sign: "",
      number: 0,
      result: getTotal(calculator.result, calculator.number, calculator.sign),
    });
  };

  const handleAllButtons = () => {
    const buttonValues = {
      C: resetCalculator,
      "+": selectAddition,
      "-": selectSubtraction,
      'x': selectMultiplication,
      "/": selectDivision,
      "=": selectEquals,
    };
    if(buttonValues[button]) {
      return buttonValues[button];
    } else {
      return selectNumButtons;
    }
  };

  return <button onClick={handleAllButtons()}>{button}</button>;
}
