import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Pais from "./Pais";
import Wrapper from "./Wrapper";

const ListaPaisStyled = styled.div`
  display : grid;
  grid-row-gap : 2.3em;
  grid-auto-flow : columns;
  grid-column-gap : 66px;
  grid-template-columns : repeat(auto-fill, 270px);
  background : var(--background);
  justify-content : center;
  padding : 4em 0;
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
    })
    .catch(() => {
        console.log("Hubo un error");
    });
  }, [dispatch]);
  
  return(
    <Wrapper>
      <ListaPaisStyled>

      {
        listaPais.map(({name,flag,population,region,capital,nativeName,cioc,alpha2Code}) => {
          return (
            <Pais
              key = {name}
              bandera = {flag}
              nombre = {name}
              poblacion = {population}
              region = {region}
              capital = {capital}
              nativeName = {nativeName}
              cioc = {cioc}
              alpha2Code = {alpha2Code}
            />
          );
        })
      }
      </ListaPaisStyled>
    </Wrapper>
  );
}

export default ListaPais;