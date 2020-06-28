import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import PaisInformacion from "./PaisInformacion";
import Wrapper from "./Wrapper";


const PaisPageStyled = styled.div`
.back {
    background: var(--white);
    box-shadow: 0 0 5px rgba(0,0,0,.3);
    padding: .7em 2.2em;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 1em;
    color: var(--black);
    i {
      margin-right: 5px;
    }
  }
  @media screen and (min-width: 1024px) {
    .back {
      margin-top: 3em;
    }
  }
`

function PaisPage({match,history}){
    /* let DBpais = useSelector(state => state.listaPais.find(item => item.name === match.params.id.replace("-"," "))); */
    let DBpais = useSelector(state => state.listaPais.find(item => item.alpha2Code === match.params.id))
    const [pais, setPais] = useState(DBpais);
    useEffect(() => {
        if(!pais) {
            fetch(`https://restcountries.eu/rest/v2/alpha/${match.params.id.toLowerCase()}`)
              .then((response) => response.json())
              .then((data) => {
                setPais(data);
              })
          }
    }, [pais, match.params.id])
    function handleClick(){
        history.goBack();
    }
    return(
        <PaisPageStyled>
            <Wrapper>
                <button className = "back" onClick = {handleClick}>
                    <i className = "fas fa-long-arrow-alt-left"></i>
                    Volver
                </button>
                <PaisInformacion {...pais} />
                {match.params.id}
            </Wrapper>
        </PaisPageStyled>
    );
}

export default PaisPage;