import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

injectGlobal`
  ${styledNormalize}
  box-sizing: border-box;
  /* TODO: Remove all uneeded font weights after styling complete */
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i');
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

const theme = {
  background: '#FEFEFA',
  sidebarBackground: 'tomato',
  red: 'red',
};

export default theme;
