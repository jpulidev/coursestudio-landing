import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const ButtonSection = styled.div`
  background: var(--white);
  height: 210px;
  display: grid;
  text-align: center;
`;
const AthletesButton = styled.div`
  background: var(--green);
  padding: 17px;
  width: 246px;
  margin: 0 auto;
  height: 42px;
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius: 47px;
  a {
    color: var(--white);
  }
`;
function ButtonDown({ info }) {
  return <h4>{info.infobutton}</h4>;
}

export default function DescriptionDown({ info }) {
  return (
    <ButtonSection>
      <AthletesButton>
        {info.map((info) => (
          <Link to="/athletes">
            <ButtonDown key="lastbutton" info={info} />
          </Link>
        ))}
      </AthletesButton>
    </ButtonSection>
  );
}
