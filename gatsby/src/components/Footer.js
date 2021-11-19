import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const CopyStyles = styled.div`
  text-align: center;
`;

const FooterStyles = styled.div`
  background: var(--black);
  color: var(--white);
  height: 57px;
  margin-top: -18px;
  p {
    text-align: center;
  }
  a {
    color: #fff;
    text-align: center;
    font-size: 16px;
  }
`;
const FooterGridStyle = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding-top: 2%;
  div,
  ul,
  li,
  a {
    color: #fff;
    list-style: none;
    padding: 3px;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;
const FlexSociales = styled.div`
  display: flex;
  gap: 30px;
  a {
    font-size: 1.6em;
  }
  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
`;

export default function Footer() {
  return (
    <>
      <FooterStyles>
        <FooterGridStyle>
          <div>
            <FlexSociales>
              <li>
                <Logo />
              </li>
            </FlexSociales>
          </div>
          <div>
            <ul>
              <li>
                <Link to="https://course.studio/">Course Studio</Link>
              </li>
              <li>
                <Link to="/athletes">Athletes</Link>
              </li>
            </ul>
          </div>
        </FooterGridStyle>
        <CopyStyles>
          &copy; Course Studio {new Date().getFullYear()}
          <br />
          <FooterStyles to="https://github.com/jpulidev" />
        </CopyStyles>
      </FooterStyles>
    </>
  );
}
