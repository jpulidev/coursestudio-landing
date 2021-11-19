import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';

const LogoStyles = styled.div`
  background: url(${logo});
  width: 99px;
  height: 52.46px;
  background-size: cover;
  position: relative;
  background-repeat: no-repeat;
  top: 10px;
`;

export default function Logo() {
  return <LogoStyles className="logo" />;
}
