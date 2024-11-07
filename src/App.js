import React, { Suspense, useState, useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Cookies from "js-cookie";

// 페이지들
const AdminLogin = React.lazy(() => import("./pages/AdminLogin"));
const ManagerList = React.lazy(() => import("./pages/Admin/ManagerList.js"));
const ManagerDetail = React.lazy(() =>
  import("../src/pages/Admin/ManagerDetail.js")
);
const BlockManagerList = React.lazy(() =>
  import("./pages/Admin/BlockManagerList.js")
);
const MemberList = React.lazy(() =>
  import("../src/pages/Member/MemberList.js")
);
const MemberDetail = React.lazy(() =>
  import("../src/pages/Member/MemberDetail.js")
);
const BlockMemberList = React.lazy(() =>
  import("../src/pages/Member/BlockMemberList.js")
);
const ReviewList = React.lazy(() => import("../src/pages/Member/ReviewList"));
const ReviewDetail = React.lazy(() =>
  import("../src/pages/Member/ReviewDetail.js")
);
const ProductList = React.lazy(() => import("./pages/Service/ProductList.js"));
const ProductDetail = React.lazy(() =>
  import("./pages/Service/ProductDetail.js")
);
const BrandList = React.lazy(() => import("./pages/Service/BrandList.js"));
const OrderList = React.lazy(() => import("./pages/Payment/OrderList.js"));
const List = React.lazy(() => import("./components/List.js"));

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
        <Suspense fallback={<Loading />}>
          {!isLoginPage && isListVisible && <List />}{" "}
          {/* Conditionally render List */}
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
              <Route path="/reviewlist" element={<ReviewList />} />
              <Route path="/reviewlist/detail/:no" element={<ReviewDetail />} />
              <Route path="/productlist" element={<ProductList />} />
              <Route
                path="/productlist/detail/:id"
                element={<ProductDetail />}
              />
              <Route path="/brandlist" element={<BrandList />} />
              <Route path="/Orderlist" element={<OrderList />} />
            </Routes>
          </MainContent>
        </Suspense>
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
