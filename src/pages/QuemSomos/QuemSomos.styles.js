import styled from 'styled-components';

export const StyleQuemSomos = styled.div`
    background-color: ${(props)=>props.theme.orange};

    h2 {
        padding-top: 4vw;
        text-align: center;
        color: ${(props)=>props.theme.darkBlue};
    }

    .paragrafo {
        font-size: 20px;
        text-align: center;
        padding-top: 3vw;
        padding-left: 10vw;
        padding-right: 10vw;
    }
`;

export const CardContainerRow = styled.div`
    display: flex; 
    justify-content: space-between;
    padding-left: 10vw;
    padding-right: 10vw;
`;

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