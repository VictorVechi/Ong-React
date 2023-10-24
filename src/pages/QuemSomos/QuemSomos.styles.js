import styled from "styled-components";

export const StyleQuemSomos = styled.div`
    background-color: #FF960B8F;

    h2 {
        padding-top: 4vw;
        text-align: center;
        color: #0B90FF;
    }

    .paragrafo {
        font-size: 20px;
        text-align: center;
        padding-top: 3vw;
        padding-left: 10vw;
        padding-right: 10vw;
    }

`
export const CardContainer = styled.div`
    border-radius: 50%;
    width: 200px;
    height: 200px;
    overflow: hidden;
    margin: 10px;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;