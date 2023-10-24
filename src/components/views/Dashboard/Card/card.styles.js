import styled from "styled-components";


export const StyleCardDash = styled.div`
    border: 2px solid black;
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction:column;
    /* justify-content: space-between; */
    align-items: center;
    box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    .img-card {
        width: 40%;
        height: 40%;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        align-items: center;
    }
    
    p {
        border-radius: 8px;
        background: #FFFFFF;
        box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
        padding: 12px;
        
        font-size: 24px;
        border: 2px solid transparent;
        color: ${(props)=>props.theme.grey};
       
    }

    p:last-child {
        width: 50%;
        word-wrap: break-word;
    }

    h2 {
        border-radius: 8px;
        background: #FFFFFF;
        box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
        border: 2px solid transparent;
        color: ${(props)=>props.theme.grey};
        padding: 12px;
        text-align:center
    }
`