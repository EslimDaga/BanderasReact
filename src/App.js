import React from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";
import ListaPais from "./Components/ListaPais";
import reducer from "./Components/Reducer";
import AccionLista from './Components/AccionLista';
import Header from "./Components/Header";

const initialState = {
  listaPais : [],
  listaPaisPorNombre : [],
  filtrarPaisPorRegion : [],
  filtrarPorRegion : ""
}

const store = createStore(reducer,initialState)

function App() {
  return (
    <Provider store = {store}>
      <Header />
      
      <AccionLista />
      <ListaPais />
    </Provider>
  );
}

export default App;
