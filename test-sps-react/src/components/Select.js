import React from "react";
import "../styles/Input.css";

function Select({ value, onChange, options }) {
  return (
    <select value={value} onChange={onChange} className="signin-input">
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}> {opt.label} </option>
      ))}
    </select>
  );
}

export default Select;
