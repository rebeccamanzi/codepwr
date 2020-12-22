import React from 'react';
import styled from 'styled-components';
import LogoColorida from './LogoColorida';
import HamburgerMenu from './HamuburgerMenu';

const Nav = styled.nav`
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: #2a2c37;
  color: white;
  font-weight: 600;

  li {
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    li {
      padding: 18px 10px;
    }
  }
`;

const Header = () => {
  return (
    <Nav>
      <LogoColorida />
      <HamburgerMenu />
    </Nav>
  );
};

export default Header;
