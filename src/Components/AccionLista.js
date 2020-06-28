import React from "react";
import styled from "styled-components";
import Buscar from "./Buscar";
import Region from './Region';
import Wrapper from "./Wrapper";

const AccionListaStyled = styled.div`
  .grid{
    display : grid;
    grid-template-columns : 1fr;
    grid-row-gap : 10px;
  }
  @media screen and (min-width : 768px){
    .grid{
      grid-template-columns : 480px 1fr 200px;
    }
  }
`

function AccionLista(){
  return(
    <AccionListaStyled>
      <Wrapper>
        <div className = "grid">
          <Buscar />
          <span></span>
          <Region />
        </div>
      </Wrapper>
    </AccionListaStyled>      
  );
}

export default AccionLista;