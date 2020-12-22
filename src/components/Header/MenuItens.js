import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #2a2c37;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    margin: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      font-weight: 600;
    }
  }
`;

const MenuItens = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Sobre</li>
      <li>Posts</li>
      <li>Blog</li>
      <li>Contato</li>
    </Ul>
  );
};

export default MenuItens;
