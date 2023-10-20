import styled from "styled-components";

export const StyleHeader = styled.header`

    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;

    .logo {
        /* color: #457b9d; */
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    .lista-Nav {
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 24px;
  
    }

    .item-lista {
        /* color: #457b9d; */
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .item-lista:hover {
        opacity: 0.7;
    }

    .btn-cadastrar {
        display: flex;
        padding: 10px 20px;
        align-items: center;
        border-radius: 8px;
        /* background: #1d3557; */
        box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
        /* color: #fff; */
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    .btn-login {
        display: flex;
        padding: 10px 20px;
        align-items: center;
        border-radius: 8px;
        /* background: #1d3557; */
        box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
        /* color: #fff; */
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`