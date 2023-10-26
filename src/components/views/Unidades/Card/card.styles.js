import styled from "styled-components";


export const StyleCardUnidade = styled.div `
    border: 2px solid black;
    width: 30%;
    height: 75%;
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    background-color: ${(props)=>props.theme.darkBlue};
    color: white;

    p {

        border-radius: 8px;
        background: #FFFFFF;
        box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
        width: fit-content;
        font-size: 24px;
        border: 2px solid transparent;
        color: ${(props)=>props.theme.grey};
  
    }
`