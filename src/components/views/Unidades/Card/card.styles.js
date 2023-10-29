import styled from "styled-components";

export const StyleCardUnidade = styled.div`
  border: 2px solid black;
  width: 30%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  background-color: ${(props) => props.theme.darkBlue};
  color: white;

  p {
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
    width: fit-content;
    font-size: 24px;
    border: 2px solid transparent;
    color: ${(props) => props.theme.grey};
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;