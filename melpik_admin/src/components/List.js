import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';

const List = () => {
  const navigate = useNavigate();
  const [isManagerMenuOpen, setIsManagerMenuOpen] = useState(false);
  const [isMemberMenuOpen, setIsMemberMenuOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [isPaymentMenuOpen, setIsPaymentMenuOpen] = useState(false);

  const handleManagerMenuToggle = () => {
    setIsManagerMenuOpen(!isManagerMenuOpen);
  };

  const handleMemberMenuToggle = () => {
    setIsMemberMenuOpen(!isMemberMenuOpen);
  };

  const handleServiceMenuToggle = () => {
    setIsServiceMenuOpen(!isServiceMenuOpen);
  };

  const handlePaymentMenuToggle = () => {
    setIsPaymentMenuOpen(!isPaymentMenuOpen);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Sidebar>
          <Profile>
            <ProfileInfo>
              <Username>관리자 (Admin)</Username>
              <Status>Online</Status>
            </ProfileInfo>
          </Profile>
          <Navigation>
            <NavItem onClick={() => navigate('/dashboard')}>Dash Board</NavItem>
            <NavItem onClick={handleManagerMenuToggle}>관리자 관리</NavItem>
            <SubMenu isOpen={isManagerMenuOpen}>
              <SubMenuItem onClick={() => navigate('/admin')}>
                관리자 목록
              </SubMenuItem>
              <SubMenuItem onClick={() => navigate('/blockmanagerlist')}>
                블럭 관리자 목록
              </SubMenuItem>
            </SubMenu>
            <NavItem onClick={handleMemberMenuToggle}>회원 관리</NavItem>
            <SubMenu isOpen={isMemberMenuOpen}>
              <SubMenuItem onClick={() => navigate('/user')}>
                회원 목록
              </SubMenuItem>
              <SubMenuItem onClick={() => navigate('/user/blocked')}>
                블록 회원 목록
              </SubMenuItem>
              <SubMenuItem onClick={() => navigate('/reviewlist')}>
                사용후기 목록
              </SubMenuItem>
            </SubMenu>
            <NavItem onClick={handleServiceMenuToggle}>서비스 관리</NavItem>
            <SubMenu isOpen={isServiceMenuOpen}>
              <SubMenuItem onClick={() => navigate('/productlist')}>
                제품 관리
              </SubMenuItem>
              <SubMenuItem onClick={() => navigate('/brandlist')}>
                브랜드 관리
              </SubMenuItem>
              {/* <SubMenuItem onClick={() => navigate('/schedulelist')}>
                예정제품 관리
              </SubMenuItem> */}
            </SubMenu>
            <NavItem onClick={handlePaymentMenuToggle}>결제 관리</NavItem>
            <SubMenu isOpen={isPaymentMenuOpen}>
              <SubMenuItem onClick={() => navigate('/Orderlist')}>
                주문 목록
              </SubMenuItem>
            </SubMenu>
            <NavItem>앱 설정 관리</NavItem>
            <NavItem>고객센터</NavItem>
          </Navigation>
        </Sidebar>
        <MainContent>
          <Outlet />
        </MainContent>
      </Container>
    </ThemeProvider>
  );
};

export default List;

const Container = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  min-width: 250px;
  background-color: ${({ theme }) => theme.colors.WhiteBrown6};
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Username = styled.span`
  color: ${({ theme }) => theme.colors.WhiteBrown1};
  font-size: 14px;
  font-weight: bold;
`;

const Status = styled.span`
  color: #2ecc71;
  font-size: 12px;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.div`
  padding: 10px 0;
  color: ${({ theme }) => theme.colors.WhiteBrown1};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.WhiteBrown4};
  }
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease, transform 0.5s ease; /* Animation effect */
`;

const SubMenuItem = styled.div`
  padding: 5px 0;
  color: ${({ theme }) => theme.colors.WhiteBrown1};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.WhiteBrown4};
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  background-color: ${({ theme }) => theme.colors.WhiteBrown1};
`;
