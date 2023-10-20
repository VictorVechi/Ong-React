import styled from "styled-components";

export const StyleInput = styled.input`
    border-radius: 8px;
    background: #FFFFFF;
    box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
    width: 90%;
    padding: 12px;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: 2px solid transparent;
    color: ${(props)=>props.theme.grey};
`