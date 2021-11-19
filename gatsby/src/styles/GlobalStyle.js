import { createGlobalStyle } from 'styled-components';
import stripes from '../assets/images/stripes.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #000;
    --yellow: #F1D311;
    --white: #fff;
    --grey: #E1EAA0;
    --blue:#28456B;
    --cerulean:#0498E2;
    --mint:#F0EABB;
    --chathams:#125988;
    --green:#449764;
    --coursegrey:#1d201f;

  }
  html {
   
    background-size: 450px;
    background-attachment: fixed;
    font-size: 10px;
    
  }
  body {
    font-size: 2rem;
    background-color:var(--black);
    color:var(--white);
   
  }
  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }
  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }
  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--black) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }
  hr {
    border: 0;
    height: 8px;
    background-image: url(${stripes});
    background-size: 1500px;
  }
  img {
    max-width: 100%;
  }
  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

  @media (min-width:750px) and (max-width: 1000px) {
    h1 {
      font-size: 70px!important;
    line-height: 70px!important;
    }
    #Hero-Container{
      grid-template-columns: 1fr!important;
      text-align: center!important;
    }
    #hero-desc{
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 749px) {
    .esUrID a{
      font-size: 8px!important;
    }
    
    #scroll-section {
      display:none!important;
    }
    #player {
      margin-left: 7px!important;
      text-align: center!important;
    }
    .slick-next {
      margin-right: -63px!important;
  }
  .slick-prev{
    margin-left: -81px;
    top: 332px;
  }
  .gTmmWD {
    padding-top: 50px!important;
    padding-bottom: 50px!important;
  }

    h1 {
      font-size: 30px!important;
      line-height: 30px!important;
    }
    h4{
      font-size: 19px!important;
    line-height: 28px!important;
    }
    #Hero-Container{
      grid-template-columns: 1fr!important;
      text-align: center!important;
    }
    #hero-desc{
      margin: 0 auto;
      span{
        font-size: 14px!important;
        line-height: 14px!important;
      }
    }
  }

`;

export default GlobalStyles;
