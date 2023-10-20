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
`