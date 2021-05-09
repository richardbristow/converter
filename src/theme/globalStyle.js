import { createGlobalStyle } from 'styled-components/macro';
import styledNormalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  body {
    font-family: 'Open Sans', sans-serif;
    /* font-weight: 400;
    font-style: normal; */
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    /* font-weight: 400;
    font-style: normal; */
  }
`;

const globalTheme = {
  background: '#FEFEFA',
  sidebarBackground: '#FC644E',
  sidebarHeaderBackground: '#ce503d',
  selectedBackground: 'lightblue',
  scrollbarTrack: '#f1f1f1',
  scrollbarThumb: '#888',
  scrollbarThumbHover: '#555',
};

export { GlobalStyle, globalTheme };
