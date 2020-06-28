import React from "react";
import styled from "styled-components";

const PaisStyled = styled.div`
    width : 264px;
    text-align : left;
    border-radius : 5px;
    overflow: hidden;
    box-shadow : 0 0 7px 2px rgba(0,0,0,.08);
    img{
        width : 100%;
        height : 160px;
        object-fit : cover;
    }
    .details{
        padding : 1.5em;
    }
    h2{
        margin : 0;
        margin-bottom : 1rem;
        font-size : 18px;
        font-weight : 700;
    }
    p{
        font-size : .9em;
        margin-bottom : .5rem;
    }
`
function Pais({bandera,nombre,poblacion,region,capital}){
    return(
        <PaisStyled>
            <img 
                loading = "lazy" 
                src = {bandera} 
                alt = "Aqui la Img"
            />
            <div className = "details">
                <h2>{nombre}</h2>
                <p><strong>Población :</strong> {poblacion}</p>
                <p><strong>Región : </strong> {region}</p>
                <p><strong>Capital : </strong> {capital}</p>
            </div>
        </PaisStyled>
    );
}

export default Pais;