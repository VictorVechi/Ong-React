import styled from "styled-components";

export const StyleLogin = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;

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

    h2 {
        color: ${(props)=>props.theme.darkBlue};
    }

    form > h2 {
        color: ${(props)=>props.theme.black};
    }
    
    section {
        background-color: ${(props)=>props.theme.blue};
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

    .login-img {
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
        align-self: flex-start;
        color: ${(props)=>props.theme.darkBlue};
        padding: 0 20px
        
    }

    .home:hover {
        color: ${(props)=>props.theme.orangeDark};
    }

    .link-cadastro {
        font-weight: bold;
    }
`