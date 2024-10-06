import React, { useState } from "react";
import "./Input.css";

const Input = ({placeholder}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="input-container">
      <input
        type="text"
        id="input-field"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required
      />
      <label
        htmlFor="input-field"
        className={`placeholder ${isFocused || value ? "active" : ""}`}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
