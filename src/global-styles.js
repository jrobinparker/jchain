import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Inconsolata', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: offwhite;
    margin: 0 auto;
    color: white;
    }
  }

  h1, h2 {
    font-family: 'Work Sans', sans-serif;
  }
`;
