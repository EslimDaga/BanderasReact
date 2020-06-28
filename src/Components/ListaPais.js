import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Pais from "./Pais";


const ListaPaisStyled = styled.div`
  display : grid;
  grid-row-gap : 2.3em;
  background : var(--background);
  justify-content : center;
  border : 1px solid red;
  padding : 4em 2em
`

function ListaPais(){
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const listaPaisPorNombre = useSelector((state) => state.listaPaisPorNombre);
  const listaPais = useSelector((state) => {
    if("" !== state.filtrarPorRegion){
      return state.filtrarPaisPorRegion;
    }
    if(listaPaisPorNombre.length > 0){
      return listaPaisPorNombre;
    }
    return state.listaPais;
  });
  
  console.log("El estado total de mi app es", listaPais);
  /* const [listaPais, setListaPais] = useState([]); */
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then((response) => {
        return response.json();
    })
    .then((lista) => {
        dispatch({
          type : "CONFI_LISTA_PAIS",
          payload : lista
        });
        console.log(lista.length);
    })
    .catch(() => {
        console.log("Hubo un error");
    });
  }, [dispatch]);
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
    <ListaPaisStyled>
      <input 
        type = "text" 
        value = {inputValue} 
        onChange = {filtrarPorNombre}
      />
      {
        inputValue &&
        <button onClick = {limpiarInput}>x</button>
      }
      {
        listaPaisPorNombre.length === 0 && inputValue &&
        <p>
          <strong>{inputValue}</strong> No se encuentra el País
        </p>
      }
    {
      listaPais.map(({name,flag,population,region,capital}) => {
        return (
          <Pais
            key = {name}
            bandera = {flag}
            nombre = {name}
            poblacion = {population}
            region = {region}
            capital = {capital}
          />
        );
      })
    }
    </ListaPaisStyled>
  );
}

export default ListaPais;