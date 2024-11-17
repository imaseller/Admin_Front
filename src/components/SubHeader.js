import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import NewIcon from "../assets/New.svg";

const SubHeader = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    // 현재 경로에 따라 activeTab 설정
    const getActiveTab = () => {
      if (location.pathname === "/admin") return "전체보기";
      else if (location.pathname === "/admin/active") return "일반관리자";
      else if (location.pathname === "/admin/blocked") return "블럭관리자";
      return "";
    };
    setActiveTab(getActiveTab());
  }, [location]);

  const handleTabClick = (tabName, path) => {
    setActiveTab(tabName);
    navigate(path);
  };

  return (
    <HeaderContainer>
      <TabContainer>
        <TabButton
          active={activeTab === "전체보기"}
          onClick={() => handleTabClick("전체보기", "/admin")}
        >
          전체보기
          {activeTab === "전체보기" && <NewBadge src={NewIcon} alt="New" />}
        </TabButton>
        <TabButton
          active={activeTab === "일반관리자"}
          onClick={() => handleTabClick("일반관리자", "/admin/active")}
        >
          일반관리자
          {activeTab === "일반관리자" && <NewBadge src={NewIcon} alt="New" />}
        </TabButton>
        <TabButton
          active={activeTab === "블럭관리자"}
          onClick={() => handleTabClick("블럭관리자", "/admin/blocked")}
        >
          블럭관리자
          {activeTab === "블럭관리자" && <NewBadge src={NewIcon} alt="New" />}
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
  padding: 10px 21px;
  background: #f9f9f9;
  border: 1px solid #dddddd;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

const TabButton = styled.button`
  background-color: ${({ active, theme }) =>
    active ? theme.colors.grayLight : theme.colors.white};
  color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.black};
  border: none;
  padding: 14px 27px;
  font-family: "NanumSquare Neo OTF";
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.gray};
  }
`;

const NewBadge = styled.img`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 24px;
  height: 24px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchInput = styled.input`
  padding: 12px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  width: 230px;
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  right: 10px;
  color: ${({ theme }) => theme.colors.grayDark};
  font-size: 16px;
`;
