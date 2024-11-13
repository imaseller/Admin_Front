import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
// import Loading from "./components/Loading";
import Header from "./components/Header";
import Cookies from "js-cookie";

// 페이지들 (동기식 import로 변경)
import AdminLogin from "./pages/AdminLogin";
import ManagerList from "./pages/Admin/ManagerList.js";
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
  const [isListVisible, setListVisible] = useState(true); // State to control List visibility
  const location = useLocation(); // Get current location
  const token = Cookies.get("accessToken"); // Get the access token from cookies

  const toggleListVisibility = () => {
    setListVisible((prev) => !prev); // Toggle the visibility
  };

  const isLoginPage = location.pathname === "/admin/auth/login"; // Check if on login page

  useEffect(() => {
    // If no access token is present, redirect to login page
    if (!token && location.pathname !== "/admin/auth/login") {
      window.location.href = "/admin/auth/login"; // Redirect to login page
    }
  }, [token, location.pathname]);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {isLoginPage ? null : <Header onToggle={toggleListVisibility} />}{" "}
      {/* Conditionally render Header */}
      <AppContainer>
        <div>
          {/* Conditionally render List */}
          {!isLoginPage && isListVisible && <List />}
        </div>
        <MainContent>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/admin/auth/login" replace />}
            />
            <Route path="/admin/auth/login" element={<AdminLogin />} />
            <Route path="/admin" element={<ManagerList />} />
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
  height: 100vh; /* Full height to ensure both List and MainContent fit */
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;

  overflow-y: auto; /* Allows scrolling if content exceeds viewport */
`;

export default App;
