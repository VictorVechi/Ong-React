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
      background-color: #FA9B27;
    }

    .input-container {
      display: flex;
      flex-direction: column;
      gap: 5px;

      label {
        font-weight: bold;
        color: #333;
      }
    }
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;

    p {
      font-weight: bold;
      font-size: 24px;
      color: #333;
    }

    button {
      background-color: #FA9B27;
      border: solid black 2px;
      padding: 10px 20px;
      border-radius: 5px;
      margin-top: 20px;
      cursor: pointer;
    }
  }

  .input-container.invalid {
    input {
      border: 2px solid red;
    }
  }
`