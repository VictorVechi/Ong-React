import styled from "styled-components";


export const StylesModal = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  background: rgba(38, 50, 56, 0.6);
`;

export const StylesContentModal = styled.div`
  display: flex;
  width: 500px;
  height: 75%;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  flex-shrink: 0;
  border-radius: 16px;
  background: ${(p) => p.theme.darkBlue};
  box-shadow: 4px 7px 21px 0px #263238, -4px -7px 21px 0px #263238;

    h2 {
        color: ${(p) => p.theme.white};
        }
    
    label {
        color: white;

    }

    button {
        background-color: ${(props)=>props.theme.orangeDark};
    }
  
    .header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  

  textarea {
    border-radius: 8px;
    background: #FFFFFF;
    box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
    width: 90%;
    padding: 8px;
    font-size: 20px;
    border: 2px solid transparent;
    color: ${(props)=>props.theme.grey};
  }

  input {
    font-size: 20px;
    padding: 8px;
  }
`;