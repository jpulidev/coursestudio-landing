import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/Graphik-Bold.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Cutive Mono';
    src: url(${font});
  }
   html {
     color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6,span, a{
    font-family: 'Cutive Mono';
    font-weight: normal;
    margin: 0;
  }
  h6 {
    font-size:12px;
  }
  a {
    color: var(--black);
    text-decoration-color: transparent;
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
    letter-spacing: 2px;
  }
  mark, .mark {
    background: var(--white);
    padding: 5px;
    margin: 0;
    display: inline;
    line-height: 1;
    color:var(--black);
    font-size:1.3em;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;
