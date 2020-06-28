import React, { useState,useEffect } from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import ListaPais from "./Components/ListaPais";
import reducer from "./Components/Reducer";
import AccionLista from "./Components/AccionLista";
import Header from "./Components/Header";
import PaisPage from "./Components/PaisPage";

const initialState = {
  listaPais : [],
  listaPaisPorNombre : [],
  filtrarPaisPorRegion : [],
  filtrarPorRegion : ""
}

const store = createStore(reducer,initialState)

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";
  function changeMedia(mq) {
    setDarkMode(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(changeMedia);
    setDarkMode(mq.matches);
    
    return () => {
      mq.removeListener(changeMedia);
    }
  }, [])
  return (
    <main className = {mainClass} >
      <Provider store = {store}>
        <Router>
          <Header setDarkMode = {setDarkMode} darkMode = {darkMode} />
          <Switch>
            <Route path = "/pais/:id" component = {PaisPage} />
            <Route path = "/">
              <AccionLista />
              <ListaPais />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </main>
  );
}

export default App;
