import styled from "styled-components";

export const NavMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center; 
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    margin-left: 8px; 
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }

  img {
    padding: 8px;
    height: 15px; 
    width: 15px; 
  }

  button {
    margin-top: 10px;
    background-color: rgb(29, 155, 240);
    color: rgb(255, 255, 255);
    max-width: 162px;
    width: 100%;
    padding: 8px;
    border: none;
    border-radius: 16px;
  }
`;
