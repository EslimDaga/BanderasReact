import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Pais from "./Pais";

const ListaPaisStyled = styled.div`
  display : grid;
  grid-row-gap : 2.3em;
  background : var(--background);
  justify-content : center;
  border : 1px solid red;
  padding : 4em 2em;
`

function ListaPais(){
  const dispatch = useDispatch();
  
  const listaPaisPorNombre = useSelector((state) => state.listaPaisPorNombre);
  const listaPais = useSelector((state) => {
    if(state.filtrarPorRegion !== "" && listaPaisPorNombre.length === 0){
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
  
  return(
    <ListaPaisStyled>
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