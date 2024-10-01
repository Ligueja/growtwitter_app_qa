import styled from "styled-components";

export const InputGroupLoginStyled = styled.div`
  width: 100%;
  position: relative;

  label {
    color: rgb(136, 136, 136);
    font-size: 14px;
    margin-bottom: 4px;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 8px 4px;
    margin-bottom: 8px;
    outline: none;
    border-radius: 8px;
    border: 1px solid rgb(221, 221, 221);
  }

  button {
    margin-top: 8px;
    width: 100%;
    border: none;
    border-radius: 8px;
    background-color: rgb(29, 155, 240);
    color: rgb(250, 250, 250);
    padding: 8px 4px;
  }
`;
