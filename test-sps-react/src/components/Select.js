import React from "react";
import "../styles/Select.css";

//Componente de seleção para valores, assim facilitando a criação de páginas e reutilização de componentes
//Nele recebemos as opções e o componente listando cada opção
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
