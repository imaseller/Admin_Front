import React from 'react';
import styled from 'styled-components';

const Header = ({ onToggle }) => {
  return (
    <HeaderContainer>
      <h1>Melpik Admin</h1>
      <ToggleButton onClick={onToggle}>Side Menu</ToggleButton>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: white;
  z-index: 1000;
`;

const ToggleButton = styled.button`
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
  border: none;
  border-radius: 4px;
  margin-left: 40px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;
