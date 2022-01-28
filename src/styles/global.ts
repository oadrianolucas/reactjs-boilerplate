import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  :root{
    //Ligth Theme
    --color-primary: #FFF;
    --color-secundary: #65676B;
    --color-success: #BBF7D0;
    --color-background: #F0F2F5;
  }

  [data-theme='dark']{
    //Ligth Dark
    --color-primary: #242526;
    --color-secundary: #e4e6eb;
    --color-success: #4ADE80;
    --color-background: #1c1e21;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 80%;
  }

  html, body, #__next {
    height: 100%;
  }
  
  body {
    background: var(--color-background);
    color: var(--color-secundary);
    font-family: sans-serif;
  }
`;

export default GlobalStyles;
