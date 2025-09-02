import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background:${theme.colors.milk};
    color: ${theme.colors.coral};
  }

  ul {
    list-style: none;
  }


  button, input {
    border: none;
    background: none;
    outline: none;
    font-family: inherit;
    cursor: pointer;
  }

  button:focus, input:focus {
    outline: none;

  }

  body {
    overflow-y: auto;
  }

    /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: ${theme.colors.sandstone};
    border-radius: 4px;
    transition-duration: background-color 0.6s;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.beige};
    border-radius: 4px;
    transition-duration: background-color 0.6s;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.colors.lipstick};
    transition-duration: background-color 0.6s;
  }
`;
