import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
  body {
    padding: 0;
    margin: 0;
  }
  button {
    cursor: pointer;
    outline: none;
  }
`;

export default GlobalStyle;
