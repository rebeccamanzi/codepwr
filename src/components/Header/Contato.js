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
  padding-left: 36px;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
`;

const Link = styled.a`
  text-decoration: none;
  color: #e7e7e7;
`;

const Contato = () => {
  return (
    <Itens>
      <Item>
        <Link href="https://github.com/rebeccamanzi" target="_blank">
          <img
            src="https://i.ibb.co/QH8C2gD/github.png"
            alt="Github"
            border="0"
          />
        </Link>
      </Item>
      <Item>
        <Link href="https://www.linkedin.com/in/rebeccamanzi/" target="_blank">
          <img
            src="https://i.ibb.co/6vXXgqD/linkedin.png"
            alt="Linkedin"
            border="0"
          />
        </Link>
      </Item>
      <Item>
        <Link href="https://www.instagram.com/codepwr/" target="_blank">
          <img
            src="https://i.ibb.co/LZ5L2JZ/instagram.png"
            alt="Instagram"
            border="0"
          />
        </Link>
      </Item>
    </Itens>
  );
};

export default Contato;
