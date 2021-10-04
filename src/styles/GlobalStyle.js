import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    @font-face {
      font-family: 'SpoqaHanSansNeo-Regular';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }
    box-sizing: border-box;

  }
  body {
    font-family: 'SpoqaHanSansNeo-Regular';
    padding: 0;
    margin: 0;
  }
  button {
    cursor: pointer;
    border: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
