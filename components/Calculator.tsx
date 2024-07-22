import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearInput();
    } else {
      setInput((prev) => prev + value);
    }
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      // Use Function constructor for simple calculations
      const evalResult = Function(`return (${input})`)();
      setInput(evalResult.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
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
