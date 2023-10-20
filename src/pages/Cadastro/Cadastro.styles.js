import styled from "styled-components";

export const StyleCadastro = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    background-color: #CCEEFF;

    form {
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 40%;
        background-color: #FF960B8F;
        border-radius: 2%;
        box-shadow: -4px -4px 8px 0px rgba(0, 0, 0, 0.25), 4px 4px 8px 0px rgba(0, 0, 0, 0.25);
        gap: 10px;
    }

    form > div {
        gap: 10px;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    input {
        border-radius: 8px;
        background: #FFFFFF;
        box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
        width: 90%;
        padding: 12px;
        font-family: "Roboto";
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border: 2px solid transparent;
        color: #263238;
    }

    label {
        color: #263238;
        font-family: "Roboto";
        font-size: 24px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }

    h2 {
        color: #0B98F9;
        font-size: 38px;
    }

    section{
        
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    
    }

    picture {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cadastro-img {
        height: 80%;
        width: 80%;
    }

    .link-login {
        font-weight: bold;
    }
    .btn-cadastrar {
        display: flex;
        padding: 10px 20px;
        align-items: center;
        border-radius: 8px;
        background: #CCEEFF;
        border: solid ;
        box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
        /* color: #fff; */
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .btn-cadastrar:hover {
        scale: 1.1;
    }
`