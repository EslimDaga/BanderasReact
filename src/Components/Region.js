import React from "react";
import {useDispatch,useSelector} from "react-redux";
import styled from "styled-components";

const FiltrarRegionStyled = styled.select`
  padding : 1.3em;
  border : none;
  box-shadow : 0 2px 9px 0 rgba(0,0,0,.05);
  border-radius : 5px;
  outline : 0;
  background : var(--white);
  color : var(--black);
`

const filtrarPorRegionAction = (regionSeleccionada) => {
  return {
    type : "FILTRAR_POR_REGION",
    payload : {regionSeleccionada}
  };
}

const Region = () => {
  const dispatch = useDispatch();
  const filtrarPorRegion = useSelector((state) => state.filtrarPorRegion);

  const onRegionChange = (selectEvent) => {
    const value = selectEvent.target.value;
    dispatch(filtrarPorRegionAction(value));
  }

  return(
    
      <FiltrarRegionStyled onChange = {onRegionChange} value = {filtrarPorRegion}>
        <option value="">Filtrar por Región</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </FiltrarRegionStyled>
  );
}

export default Region;