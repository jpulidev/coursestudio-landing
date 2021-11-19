import React from 'react';
import styled from 'styled-components';
import SemiBold from '../assets/fonts/Graphik-Semibold.ttf';

const DescriptionTwoContainer = styled.div`
  @font-face {
    font-family: 'Cutive Semi';
    src: url(${SemiBold});
  }

  padding-top: 111px;
  padding-bottom: 83px;
  text-align: center;
  background: var(--coursegrey);

  h4 {
    font-family: 'Cutive Semi';
    font-size: 58px;
    font-weight: 600;
    line-height: 68px;
  }
`;

const DescriptionTwoTextContainer = styled.div`
  max-width: 901px;
  margin: auto;
`;

function DescriptionTwoText({ info }) {
  return <h4 key="info-button-down">{info.description}</h4>;
}

export default function DescriptionDown({ info }) {
  return (
    <DescriptionTwoContainer key="one-section">
      <DescriptionTwoTextContainer key="second-section">
        {info.map((info) => (
          <DescriptionTwoText key="DescriptionDown" info={info} />
        ))}
      </DescriptionTwoTextContainer>
    </DescriptionTwoContainer>
  );
}
