import { createGlobalStyle } from 'styled-components';
import { colors, media } from 'styles';

const GlobalStyle = createGlobalStyle`
  
  //fonts
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

  html {
    font-size: 10px;
  }
  
  body {
    margin: 0;
    padding: 128px 0 0 0;
    background-color: ${colors.background};
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;

    ${media.sm} {
      padding: 64px 0 0 0;
    }
  }
  
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;