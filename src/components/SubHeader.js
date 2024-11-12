import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import NewIcon from "../assets/New.svg"; // Import custom "N" icon

const SubHeader = ({ title, searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState("전체보기");

  const handleTabClick = (tabName, path) => {
    setActiveTab(tabName);
    navigate(path);
  };

  return (
    <HeaderContainer>
      <TabContainer>
        <TabButton
          active={activeTab === "전체보기"}
          onClick={() => handleTabClick("전체보기", "/user")}
          isFirst
        >
          전체보기
          {activeTab === "전체보기" && <NewBadge src={NewIcon} alt="New" />}
        </TabButton>
        <TabButton
          active={activeTab === "일반회원"}
          onClick={() => handleTabClick("일반회원", "/user")}
        >
          일반회원
          {activeTab === "일반회원" && <NewBadge src={NewIcon} alt="New" />}
        </TabButton>
        <TabButton
          active={activeTab === "블랙회원"}
          onClick={() => handleTabClick("블랙회원", "/user/blocked")}
          isLast
        >
          블랙회원
          {activeTab === "블랙회원" && <NewBadge src={NewIcon} alt="New" />}
        </TabButton>
      </TabContainer>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchIcon />
      </SearchContainer>
    </HeaderContainer>
  );
};

export default SubHeader;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.gray5};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  margin-bottom: 20px;
`;

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  overflow: visible; /* Allows NewBadge to be fully visible */
`;

const TabButton = styled.button`
  position: relative;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.grayLight : theme.colors.white};
  color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.black};
  border: none;
  border-right: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  ${({ isFirst, isLast }) =>
    isFirst
      ? "border-top-left-radius: 8px; border-bottom-left-radius: 8px;"
      : isLast
      ? "border-top-right-radius: 8px; border-bottom-right-radius: 8px;"
      : ""}
  &:last-child {
    border-right: none;
  }
`;

const NewBadge = styled.img`
  position: absolute;
  top: -10px; /* Adjusts position to ensure icon is fully visible */
  right: -10px;
  width: 24px;
  height: 24px;
  z-index: 1; /* Ensures the New icon appears on top */
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchInput = styled.input`
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  width: 200px;
  padding-right: 30px;
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  right: 10px;
  color: ${({ theme }) => theme.colors.grayDark};
  font-size: 16px;
`;
