import React from 'react';
import styled from 'styled-components';

const DivLogoColorida = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
`;

const LogoColorida = () => {
  return (
    <DivLogoColorida>
      <a href="#">
        <img
          style={{ height: '24px' }}
          src="https://i.ibb.co/G7wJC3j/Code-Power.png"
          alt=""
        />
      </a>
    </DivLogoColorida>
  );
};

export default LogoColorida;
