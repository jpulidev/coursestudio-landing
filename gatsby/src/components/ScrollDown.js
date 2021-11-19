import React from 'react';
import styled from 'styled-components';
import Group69 from '../assets/images/Group69.png';

const InfoContainer = styled.div`
  position: absolute;
  top: 880px;
  left: 0;
  right: 0;
  text-align: center;
  max-width: 110px;
  height: 110px;
  margin: 0 auto;
  background: #000;
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius: 100px;

  button {
    background: transparent;
    border: 0px;
    box-shadow: none;
  }
  a {
    color: var(--white);
    h4 {
      color: var(--white);
      font-size: 15px;
      text-transform: uppercase;
    }
  }
`;
const ScrollGroup = styled.div`
  position: absolute;
  top: 137px;
  left: 15px;
`;

function ScrollTo({ info }) {
  function scrolling() {
    const element = document.getElementById('home');
    element.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }

  return (
    <div>
      <button key="btn-scroll-one" onClick={scrolling}>
        <h4 key="info-button">{info.infoscroll}</h4>
      </button>
    </div>
  );
}
export default function ScrollDown({ info }) {
  return (
    <InfoContainer id="scroll-section" key="infoContainer">
      {info.map((info) => (
        <ScrollTo key={info.indoscroll} info={info} />
      ))}
      <ScrollGroup>
        <img key="img-scroll" src={Group69} />
      </ScrollGroup>
    </InfoContainer>
  );
}
