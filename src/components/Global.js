import { createGlobalStyle, styled } from "styled-components";

const GlobalStyled = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    font-family: "EB Garamond", serif;
  }
  body {
  }
  button {
    text-transform: capitalize;
    color: white;
    border-radius: 7px;
    border: 1px solid white;
    background: fixed;
    padding: 10px 20px;
  }
  button:hover {
    cursor: pointer;
    color: black;
    background-color: white;
    border: 1px black solid;
  }
  a:hover {
    border-bottom: 2px solid white;
  }
`;
export default GlobalStyled;
