import { createGlobalStyle } from 'styled-components';

// const primaryColor = '#34cb79';
// const titleColor = '#322153';
const textColor = '#6c6c80';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    width: 100%;
  }
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background: ${({ theme }) => theme.body};
    -webkit-font-smoothing: antialiased;
    color: ${textColor};
  }

  body,
  input,
  button {
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 62.5%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--title-color);
    font-family: Ubuntu;
  }
`;
export default GlobalStyle;
