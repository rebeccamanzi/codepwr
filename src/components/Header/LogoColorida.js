import React from 'react';
import styled from 'styled-components';

const DivLogoColorida = styled.ul`
  display: flex;
  margin: 0px;
  padding: 0;
  height: 60px;
  display: table;
`;

const ImgLogoColorida = styled.li`
  list-style: none;
  color: #e7e7e7;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
`;

const LogoColorida = () => {
  return (
    <div>
      <DivLogoColorida>
        <ImgLogoColorida>
          <a href="#">
            <img
              style={{ height: '32px' }}
              src="https://i.ibb.co/G7wJC3j/Code-Power.png"
              alt=""
            />
          </a>
        </ImgLogoColorida>
      </DivLogoColorida>
    </div>
  );
};

export default LogoColorida;
