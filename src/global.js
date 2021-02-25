import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body, ul, p, li, h1, h2, h3,h4, h5, div {
    margin: 0;
    padding: 0;
  }
  body {
    font-family:"Roboto-Regular", sans-serif
  }

  h1, h2, h3,h4, h5 {
    font-family:"Epilogue-SemiBold", sans-serif
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
`