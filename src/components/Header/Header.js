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

  .logo {
    padding: 15px;
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
