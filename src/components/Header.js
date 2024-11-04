import React from 'react';
import styled from 'styled-components';

const Header = ({ onToggle }) => {
  return (
    <HeaderContainer>
      <Title>Melpik Admin</Title>
      <ToggleButton onClick={onToggle}>사이드메뉴</ToggleButton>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;

  align-items: center;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.DarkBrown2};
  color: white;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 0;
`;

const ToggleButton = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.DarkBrown4};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 20px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue};
  }
`;
