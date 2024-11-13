import React from "react";
import styled from "styled-components";

const Header = ({ userName, onLogout }) => {
  return (
    <HeaderContainer>
      <UserInfo>
        <WelcomeText>
          <span>{userName}</span>님! 안녕하세요.
        </WelcomeText>
      </UserInfo>
      <LogoutButton onClick={onLogout}>로그아웃</LogoutButton>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  padding: 0 30px;
  z-index: 1000;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 30px;
`;

const WelcomeText = styled.div`
  font-family: "NanumSquare Neo OTF";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 0.05em;
  color: #aaaaaa;

  span {
    font-weight: 800;
    color: #000; /* userName은 검은색으로 */
    text-decoration: underline;
    margin-right: 3px;
  }
`;

const LogoutButton = styled.button`
  width: 92px;
  height: 34px;
  font-size: 14px;
  font-weight: 800;
  line-height: 15px;
  color: #000;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f2f2f2;
  }
`;
