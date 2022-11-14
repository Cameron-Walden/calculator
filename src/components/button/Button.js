import './Button.css'

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

  const selectDecimal = () => {
    console.log(calculator.number.toString() + '', '<==toString')
    setCalculator({
      ...calculator,
      //adds decimal, but can add multiple, so need to write condtional to not allow multiple decimals
      number: calculator.number + button
    })
  }

  const invertNum = () => {
    console.log(calculator.number ? calculator.number * -1 : calculator.number)
    setCalculator({
      ...calculator,
      sign: '',
      number: calculator.number ? calculator.number * -1 : calculator.number * 1
    })
  }

  const handleAllButtons = () => {
    const buttonValues = {
      C: resetCalculator,
      "+": selectAddition,
      "-": selectSubtraction,
      'x': selectMultiplication,
      "/": selectDivision,
      "=": selectEquals,
      '.': selectDecimal,
      '+-': invertNum,
    };
    if(buttonValues[button]) {
      return buttonValues[button];
    } else {
      return selectNumButtons;
    }
  };

  return <button className="button" onClick={handleAllButtons()}>{button}</button>;
}
