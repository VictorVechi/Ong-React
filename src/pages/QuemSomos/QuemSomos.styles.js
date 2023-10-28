import styled from 'styled-components';

export const StyleQuemSomos = styled.div`
    background-color: ${(props)=>props.theme.orange};
    height: 100vh;
    h2 {
        padding-top: 4vw;
        text-align: center;
        color: ${(props)=>props.theme.black};
    }
    
    .paragrafo {
        font-size: 20px;
        text-align: center;
        padding-top: 3vw;
        padding-left: 10vw;
        padding-right: 10vw;
    }

    .fileira {
        display: flex;
        text-align: center;
        justify-content: space-between;
        padding-left: 10vw;
        padding-right: 10vw;
        padding-bottom: 3vw;
    }
`;

export const CardContainerRow = styled.div`
    display: flex; 
    justify-content: space-between;
    padding-top: 3vw;
    padding-left: 10vw;
    padding-right: 10vw;
`;

export const CardContainer = styled.div`
    border-radius: 50%;
    border: 2px solid black;
    box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.25);
    background-color: ${(props)=>props.theme.blue};
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