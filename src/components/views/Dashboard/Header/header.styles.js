import styled from "styled-components";


export const StyleHeaderDash = styled.header`

width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props)=>props.theme.blue};
    height: 12%;
    border: 2px solid black;

    .lista-Nav {
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 24px;
    }

    .item-lista {
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding: 5px 10px;
    }

    .item-lista:hover {
        opacity: 0.7;
    }

    .item-lista:nth-child(3){
        border: 2px solid ${(props)=>props.theme.orangeDark} ;
        border-radius: 5px;
    }

    .item-lista:nth-child(3):hover{
        border-color: ${(props)=>props.theme.black};
        color: ${(props)=>props.theme.darkBlue};
    }

    button {
        background-color: ${(props)=>props.theme.orangeDark};
    }

    button:hover {
        background-color: ${(props)=>props.theme.blue};
        border-color: ${(props)=>props.theme.orangeDark};
    }
`