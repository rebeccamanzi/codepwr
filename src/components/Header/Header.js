import React from 'react';
import styled from 'styled-components';
import Contato from './Contato';
import LogoColorida from './LogoColorida';
import { MenuItens } from './MenuItens';

const Menu = styled.div`
  background: #2a2c37;
  color: E7E7E7;
  font-weight: 600;
  font-size: 18px;
  margin: 0px;
  height: 60px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <Menu>
      <LogoColorida />
      <MenuItens />
      <Contato />
    </Menu>
  );
};

export default Header;
