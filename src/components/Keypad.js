import React, { useState } from "react";


const Keypad = ({ onButtonClick }) => {
  const [inputValue, setInputValue] = useState('');

  const buttons = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
  ];

  const handleClick = (btn) => {
    setInputValue((prev) => prev + btn);
    onButtonClick(btn); // Optional callback
  };

  const handleInputChange = (e) => {
    console.log('Entering password...');
    setInputValue(e.target.value);
  };

  return (
    <div className="p-4">
      <input
        type="password"
        value={inputValue}
        onChange={handleInputChange}
        className="w-full mb-4 p-2 text-xl border rounded"
      />

      <div className="grid grid-cols-3 gap-2">
        {buttons.map((btn) => (
          <button
            key={btn}
            className="bg-gray-200 hover:bg-gray-300 text-xl font-semibold py-4 rounded"
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keypad;
