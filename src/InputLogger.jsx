import React, { useState } from 'react';

const InputLogger = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value); // Update state
    console.log(value);   // Log input value to console
  };

  return (
    <div>
      <label htmlFor="inputField">Type Here: </label>
      <input
        id="inputField"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputLogger;
