import styled from "styled-components";

export const StyleCadastro = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    background-color: ${(props)=>props.theme.blue};

    form {
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 40%;
        background-color: ${(props)=>props.theme.orange};
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

    label {
        font-size: 24px;
    }

    h2 {
        color: ${(props)=>props.theme.darkBlue};
    }

    section{
        
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    
    }

    picture {
        width: 60%;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nomeOng {
        height: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 50px;
    }

    .cadastro-img {
        height: 100%;
        width: 100%;
    }

    .link-login {
        font-weight: bold;
    }

    button:hover {
        scale: 1.1;
    }

    .home {
        align-self: flex-end;
        color: ${(props)=>props.theme.darkBlue};
        padding: 0 20px
        
    }

    .home:hover {
        color: ${(props)=>props.theme.orangeDark};
    }
`