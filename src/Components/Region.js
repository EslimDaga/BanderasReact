import React from "react";
import {useDispatch,useSelector} from "react-redux";

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
    <select onChange = {onRegionChange} value = {filtrarPorRegion}>
      <option value="">Filtrar por Región</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}

export default Region;