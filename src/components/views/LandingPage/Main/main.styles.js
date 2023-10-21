import styled from "styled-components";

export const StyleMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 88%;
    background-color: #FF960B8F;

    section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
    }  

    .img-adote {
        width: 80%;
        height: 80%;
    }

    section:last-child{
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
    }
    
`