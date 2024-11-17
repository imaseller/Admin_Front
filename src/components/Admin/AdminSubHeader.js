import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import NewIcon from "../../assets/New.svg";

const SubHeader = ({ title, searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    // Define getActiveTab inside the useEffect to avoid ESLint warning
    const getActiveTab = () => {
      if (location.pathname === "/admin") {
        return "전체보기";
      } else if (location.pathname === "/blockmanagerlist") {
        return "블럭관리자";
      } else if (location.pathname === "/admin/active") {
        return "일반관리자";
      } else {
        return "일반관리자"; // Default to 일반관리자 if not matched
      }
    };

    // Set the active tab whenever location changes
    setActiveTab(getActiveTab());
  }, [location]); // Depend on location to trigger when the route changes

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
          isFirst
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
          onClick={() => handleTabClick("블럭관리자", "/blockmanagerlist")}
          isLast
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
  background: #eeeeee;
  border: 1px solid #dddddd;
  border-radius: 8px 0px 0px 8px;
  overflow: visible;
`;

const TabButton = styled.button`
  position: relative;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.grayLight : theme.colors.white};
  color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.black};
  border: none;
  border-right: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 14px 27px;
  font-family: "NanumSquare Neo OTF";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 13px;
  text-align: center;
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
  top: -10px;
  right: -10px;
  width: 24px;
  height: 24px;
  z-index: 1;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchInput = styled.input`
  padding: 12px;
  font-size: 14px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  width: 230px;
  padding-right: 30px;
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  right: 10px;
  color: ${({ theme }) => theme.colors.grayDark};
  font-size: 16px;
`;
