import styled from "styled-components";



export const StyleCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid ${(props)=>props.theme.black};
    width: 30%;
    height: 40%;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: ${(props)=>props.theme.blue};
    img {
        width: 45%;
        height: 45%;
    }
    
    > div {
        display: flex;
        flex-direction:column;
        justify-content: space-between;
        height: 100%;
        width: 100%;
    }

    button {
        font-size: 12px;
        padding: 5px 10px;
        background-color: ${(props)=>props.theme.orangeDark};
    }

    button:hover {
        background-color: ${(props)=>props.theme.blue};
        border-color: ${(props)=>props.theme.orangeDark};
    }

`
