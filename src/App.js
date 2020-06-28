import React from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";
import ListaPais from "./Components/ListaPais";
import Region from './Components/Region';

const initialState = {
  listaPais : [],
  listaPaisPorNombre : [],
  filtrarPaisPorRegion : [],
  filtrarPorRegion : ""
}

function reducer(state,action) {
  console.log(action);
  switch(action.type){
    case "CONFI_LISTA_PAIS" : {
      return {...state, listaPais : action.payload};
    }
    case "CONFI_PAIS_POR_NOMBRE" : {
      const listaPaisPorNombre = (state.listaPais || [])
      .filter(pais => pais.name.toLowerCase().includes(action.payload.toLowerCase()));
      return {...state, listaPaisPorNombre};
    }
    case "FILTRAR_POR_REGION" : {
      const {regionSeleccionada} = action.payload;
      if("" === regionSeleccionada){
        return {...state,filtrarPaisPorRegion : [], filtrarPorRegion : ""}
      }
      const filtrarPaisPorRegion = state.listaPais.filter((pais) => pais.region === regionSeleccionada);
      return {...state,filtrarPaisPorRegion,filtrarPorRegion : regionSeleccionada}
    }
    default: {
      return state;
    }
  }
} 

const store = createStore(reducer,initialState)

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Region />
        <ListaPais />
      </div>
    </Provider>
  );
}

export default App;
