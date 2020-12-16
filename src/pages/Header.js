import React from 'react';
import styled from 'styled-components';
import { Logo } from '../components/Header/Logo';

const Menu = styled.div`
  background: #2a2c37;
  width: 100vw;
  color: E7E7E7;
  font-weight: 600;
  font-size: 18px;
`;

const Header = () => {
  return (
    <Menu>
      <Logo />
    </Menu>
  );
};

export default Header;
