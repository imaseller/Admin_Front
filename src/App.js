import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import Header from "./components/Header";
import Cookies from "js-cookie";

import AdminLogin from "./pages/AdminLogin";
import ManagerList from "./pages/Admin/AdminList.js";
import AdminList from "./pages/Admin/AdminList.js";
import ManagerDetail from "../src/pages/Admin/ManagerDetail.js";
import BlockManagerList from "./pages/Admin/BlockManagerList.js";
import MemberList from "../src/pages/Member/MemberList.js";
import MemberDetail from "../src/pages/Member/MemberDetail.js";
import BlockMemberList from "../src/pages/Member/BlockMemberList.js";
import InventoryList from "../src/pages/Member/InventoryList";
import InventoryDetail from "../src/pages/Member/InventoryDetail.js";
import ProductList from "./pages/Service/ProductList.js";
import ProductDetail from "./pages/Service/ProductDetail.js";
import BrandList from "./pages/Service/BrandList.js";
import OrderList from "./pages/Payment/OrderList.js";
import List from "./components/List.js";

function App() {
  const [isListVisible, setListVisible] = useState(true);
  const location = useLocation();
  const token = Cookies.get("accessToken");

  const toggleListVisibility = () => {
    setListVisible((prev) => !prev);
  };

  const isLoginPage = location.pathname === "/admin/auth/login";

  useEffect(() => {
    if (!token && location.pathname !== "/admin/auth/login") {
      window.location.href = "/admin/auth/login";
    }
  }, [token, location.pathname]);

  const handleLogout = () => {
    Cookies.remove("accessToken");
    window.location.href = "/admin/auth/login";
  };

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {!isLoginPage && (
        <Header
          userName="유민기"
          onToggle={toggleListVisibility}
          onLogout={handleLogout}
        />
      )}
      <AppContainer>
        <div>{!isLoginPage && isListVisible && <List />}</div>
        <MainContent>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/admin/auth/login" replace />}
            />
            <Route path="/admin/auth/login" element={<AdminLogin />} />
            <Route path="/admin" element={<ManagerList />} />
            <Route
              path="/admin/active"
              element={
                <AdminList endpoint="/admin/active" title="활성 관리자 목록" />
              }
            />
            <Route
              path="/admin/blocked"
              element={
                <AdminList
                  endpoint="/admin/blocked"
                  title="차단된 관리자 목록"
                />
              }
            />
            <Route path="/admin/:id" element={<ManagerDetail />} />
            <Route path="/blockmanagerlist" element={<BlockManagerList />} />
            <Route path="/user" element={<MemberList />} />
            <Route path="/user/detail/:seq" element={<MemberDetail />} />
            <Route path="/user/blocked" element={<BlockMemberList />} />
            <Route path="/inventorylist" element={<InventoryList />} />
            <Route path="/inventory/detail/:no" element={<InventoryDetail />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/productlist/detail/:id" element={<ProductDetail />} />
            <Route path="/brandlist" element={<BrandList />} />
            <Route path="/Orderlist" element={<OrderList />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  );
}

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

export default App;
