import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../styles/Theme";
import HomeIcon from "../assets/Home.svg";
import MemberIcon from "../assets/Member.svg";
import AdminIcon from "../assets/Admin.svg";
import PaymentIcon from "../assets/Payment.svg";
import SettingIcon from "../assets/Setting.svg";
import ListLogo from "../assets/ListLogo.svg";

const List = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Sidebar>
          <TopBar />
          <NavIcons>
            <NavIcon
              onClick={() => navigate("/dashboard")}
              isActive={activeMenu === "dashboard"}
            >
              <Icon src={HomeIcon} alt="Home" />
            </NavIcon>
            <NavIcon
              onClick={() => handleMenuClick("manager")}
              isActive={activeMenu === "manager"}
            >
              <Icon src={AdminIcon} alt="Admin" />
              {activeMenu === "manager" && (
                <SubMenu>
                  <SubMenuItem onClick={() => navigate("/admin")}>
                    관리자 목록
                  </SubMenuItem>
                </SubMenu>
              )}
            </NavIcon>
            <NavIcon
              onClick={() => handleMenuClick("member")}
              isActive={activeMenu === "member"}
            >
              <Icon src={MemberIcon} alt="Member" />
              {activeMenu === "member" && (
                <SubMenu>
                  <SubMenuItem onClick={() => navigate("/user")}>
                    회원 목록
                  </SubMenuItem>
                  <SubMenuItem onClick={() => navigate("/inventorylist")}>
                    인벤토리 목록
                  </SubMenuItem>
                  <SubMenuItem onClick={() => navigate("/statisticslist")}>
                    통계 목록
                  </SubMenuItem>
                  <SubMenuItem onClick={() => navigate("/calculatelist")}>
                    정산 목록
                  </SubMenuItem>
                </SubMenu>
              )}
            </NavIcon>
            <NavIcon
              onClick={() => handleMenuClick("payment")}
              isActive={activeMenu === "payment"}
            >
              <Icon src={PaymentIcon} alt="Payment" />
              {activeMenu === "payment" && (
                <SubMenu>
                  <SubMenuItem onClick={() => navigate("/productlist")}>
                    제품 관리
                  </SubMenuItem>
                  <SubMenuItem onClick={() => navigate("/brandlist")}>
                    브랜드 관리
                  </SubMenuItem>
                  {/* <SubMenuItem onClick={() => navigate('/schedulelist')}>
              예정제품 관리
            </SubMenuItem> */}
                  <SubMenuItem onClick={() => navigate("/Orderlist")}>
                    주문 목록
                  </SubMenuItem>
                </SubMenu>
              )}
            </NavIcon>
            <NavIcon
              onClick={() => handleMenuClick("settings")}
              isActive={activeMenu === "settings"}
            >
              <Icon src={SettingIcon} alt="Settings" />
            </NavIcon>
          </NavIcons>
          <BottomBar />
          <LogoContainer>
            <Logo src={ListLogo} alt="Logo" />
          </LogoContainer>
        </Sidebar>

        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default List;

const Container = styled.div`
  display: flex;
  height: 894px;
`;

const Sidebar = styled.div`
  width: 70px;
  background-color: #2c2c2c;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  border-radius: 0px 14px 0px 0px;
  position: relative;
  border-radius: 0px 0px 14px 0px;
`;

const TopBar = styled.div`
  width: 30px;
  height: 6px;
  background: rgba(85, 85, 85, 0.517647);
  margin-bottom: 20px;
`;

const BottomBar = styled.div`
  width: 30px;
  height: 6px;
  background: rgba(153, 153, 153, 0.517647);
  margin-top: auto;
  margin-bottom: 20px;
`;

const NavIcons = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const NavIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isActive }) => (isActive ? "#F6AE24" : "#2c2c2c")};
  cursor: pointer;
  position: relative;
  border-radius: ${({ isActive }) => (isActive ? "10px" : "0px")};
  &:hover {
    background-color: #f6ac36;
    border-radius: 10px;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const SubMenu = styled.div`
  position: absolute;
  left: 70px;
  top: 0;
  width: 150px;
  display: flex;
  flex-direction: column;
  background: #333;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #444;
  z-index: 1;
`;

const SubMenuItem = styled.div`
  color: #ffffff;
  padding: 8px 12px;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #f6ac36;
  }
  border-radius: 4px;
`;

const LogoContainer = styled.div`
  width: 70px;
  height: 270px;
  background: #ffffff;
  border-top: 1px solid #dddddd;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0px 0px 14px 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
`;

const Logo = styled.img`
  width: 26px;
  height: 200px;
`;
