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
  height: 60px; /* Increased height for better aesthetics */
  display: flex;

  align-items: center;
  padding: 0 20px; /* Horizontal padding */
  background-color: ${({ theme }) => theme.colors.DarkBrown2};
  color: white;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
`;

const Title = styled.h1`
  font-size: 18px; /* Larger font size */
  font-weight: 600; /* Slightly bolder font */
  letter-spacing: 1px; /* Added letter spacing for style */
  margin: 0; /* Remove default margin */
`;

const ToggleButton = styled.button`
  padding: 8px 16px; /* Increased padding for better touch target */
  background-color: ${({ theme }) => theme.colors.DarkBrown4};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 10px; /* Font size for the button */
  cursor: pointer;
  transition: background-color 0.3s ease; /* Smooth transition effect */
  margin-left: 20px;
  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.blue}; /* Use theme color for hover */
  }

  &:focus {
    outline: none; /* Remove outline on focus */
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue}; /* Add focus ring */
  }
`;
