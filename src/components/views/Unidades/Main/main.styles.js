import styled from "styled-components";




export const StyleMainUnidade = styled.main`
    background-color: ${(props)=>props.theme.orange};
    height: 88%;
    display: flex;
    flex-direction: column;
    align-items: center;
   


    .carrossel {
        display: flex;
        height: 88%;
        width: 100%;
        align-items: center;
        justify-content: space-evenly;
    }


    button:hover {
        scale: 1.1;
    }

  
`