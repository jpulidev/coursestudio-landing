import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  max-width: 1150px;
  margin: 0 auto;
  padding-top: 26px;
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 4fr 92px 92px 1fr;
    list-style: none;
    text-align: left;
    align-items: center;
    height: 100px;
    grid-gap: 18px;
  }
  li {
    order: 1;
  }
  a {
    font-size: 1rem;
    color: var(--white);
    text-decoration: none;
    padding: 0px 10px;
    position: relative;
    top: -16px;

    &:hover {
      color: var(--green);
    }
  }
  @media screen and (max-width: 1000px) {
    ul {
      grid-template-columns: auto auto auto auto;
      grid-gap: 15px;
      padding: 2px;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/athletes">ATHLETES</Link>
        </li>
        <li>
          <Link className="nav-link" to="#">
            LOG IN
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="#">
            SIGN UP NOW
          </Link>
        </li>
      </ul>
    </NavStyles>
  );
}
