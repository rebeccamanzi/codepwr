import React from 'react';
import styled from 'styled-components';

const Itens = styled.ul`
  display: flex;
  margin: 0px;
  padding: 0;
  height: 60px;
  display: table;
`;

const Item = styled.li`
  list-style: none;
  color: #e7e7e7;
  padding: 0 42px;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
`;

const Link = styled.a`
  text-decoration: none;
  color: #e7e7e7;
`;

export const MenuItens = () => {
  return (
    <Itens>
      <Item>
        <Link href="#sobre">Sobre</Link>
      </Item>
      <Item>
        <Link href="#posts">Posts</Link>
      </Item>
      <Item>
        <Link href="#blog">Blog</Link>
      </Item>
      <Item>
        <Link href="#contato">Contato</Link>
      </Item>
    </Itens>
  );
};
