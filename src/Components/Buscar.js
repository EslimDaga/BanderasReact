import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Input from "./Input";

const BuscarStyled = styled.div`
    display : flex;
    position : relative;
    .close{
        position : absolute;
        right: 1em;
        top : 1.3em;
        border-radius : 50%;
        box-shadow : 0 2px 9px 0 rgba(0,0,0,.05);
        border : none;
    }
`
function Buscar(){
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    
    const filtrarPorNombre = (e) => {
        setInputValue(e.target.value);
        dispatch({
          type : "CONFI_PAIS_POR_NOMBRE",
          payload : e.target.value
        });
      }
      const limpiarInput = () => {
        dispatch({
          type : "CONFI_PAIS_POR_NOMBRE",
          payload : ""
        });
        setInputValue("");
      }
    return(
        <BuscarStyled>
        {
            inputValue &&
            <i className = "fas fa-times close" onClick = {limpiarInput}></i>
        }
            <Input
                placeholder = "Busca un País..."
                value = {inputValue} 
                onChange = {filtrarPorNombre}
            />
        </BuscarStyled>
    );
}

export default Buscar;