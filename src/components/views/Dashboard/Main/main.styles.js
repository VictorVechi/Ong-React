import styled from "styled-components";


export const StylesMainDash = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 88%;
    background-color: #FF960B8F;
    padding: 1%;
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 100%;
    }  

    section:last-child{
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        width: 30%;
    }


`