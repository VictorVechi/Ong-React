
import styled from "styled-components";

export const StyleCardPets = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid ${(props)=>props.theme.black};
    width: 60%;
    height: 60%;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: transparent;
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

`
