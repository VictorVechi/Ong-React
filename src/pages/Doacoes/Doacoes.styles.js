import styled from 'styled-components';

export const StyleDoacao = styled.div`
  height: 100vh;
  background: #FF960B8F;
  border-radius: 2%;
  box-shadow: -4px -4px 8px 0px rgba(0, 0, 0, 0.25), 4px 4px 8px 0px rgba(0, 0, 0, 0.25);

  .center {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 88%;
  }

  .texto {
    margin: 10px;
    text-align: center;
    font-size: 18px; 

  }

  .container {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 800px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
    background-color: #CCEEFF;
    border: 2px solid #FF960B8F;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h2 {
      font-weight: bold;
      font-size: 30px;
      color: #333;
    }

    button {
    background-color: #FF960B8F;
    }

    .input-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 5px;

      label {
        font-weight: bold;
        color: #333;
      }

      input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
    }

    .input-container:nth-child(3) input {
      width: 40%;
    }
    .input-container:nth-child(2) input {
      width: 60%;
    }
  }
`;
