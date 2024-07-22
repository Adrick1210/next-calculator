import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearInput();
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  const clearInput = () => {
    setDisplay("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      // Use Function constructor for simple calculations
      const evalResult = Function(`return (${display})`)();
      setResult(evalResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{display}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "=",
          "+",
        ].map((char) => (
          <button
            key={char}
            onClick={() => handleButtonClick(char)}
            className="button"
          >
            {char}
          </button>
        ))}
        <button onClick={() => handleButtonClick("C")} className="button clear">
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
