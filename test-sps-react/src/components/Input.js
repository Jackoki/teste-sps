import React from "react";
import "../styles/Input.css";

//Componente de input para inserção de textos/valores, assim facilitando a criação de páginas e reutilização de componentes
function Input({type, value, onChange, placeholder}) {
    return (
        <input type={type} value={value} onChange={onChange} placeholder={placeholder} className="input-field"/>
    )
}

export default Input;