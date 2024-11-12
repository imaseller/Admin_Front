import React from "react";
import styled from "styled-components";

const Header = ({
  title,
  searchType,
  setSearchType,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <SearchContainer>
        <SearchSelect onChange={(e) => setSearchType(e.target.value)}>
          <option value="id">아이디</option>
          <option value="name">이름</option>
          <option value="email">이메일</option>
          <option value="role">권한등급</option>
        </SearchSelect>
        <SearchInput
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.WhiteBrown5};
`;

const HeaderTitle = styled.h1`
  ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fonts.heading.fontSize};
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: ${({ theme }) => theme.fonts.default.fontSize};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  margin-right: 10px;
  width: 315px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchSelect = styled.select`
  padding: 10px;
  font-size: ${({ theme }) => theme.fonts.default.fontSize};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  margin-right: 10px;
`;
