import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { UserGet } from "../../api/user/UserGet.js";
import Theme from "../../styles/Theme";
import Header from "../../components/SubHeader";
import Pagination from "../../components/Paination.js";
import ProductTable from "../../components/ProductTable";

const ProductList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("email");
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UserGet(page, limit);
        setUsers(data.users || []);
        setTotal(data.total || 0);
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    };

    fetchData();
  }, [page, limit]);

  // const handleEdit = (no) => {
  //   navigate(`/user/admin${no}`);
  // };

  const handleRegister = () => {
    navigate("/user/adminnew");
  };

  const filteredData = users.filter((item) => {
    if (searchType === "email") {
      return item.email.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchType === "nickname") {
      return item.nickname.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchType === "status") {
      return item.status.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return true;
  });

  const handleProductClick = (no) => {
    navigate(`/admin/productlist/detail/${no}`);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Content>
        <Header
          title="제품 관리"
          searchType={searchType}
          setSearchType={setSearchType}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <Container>
          <TotalCount>총 {filteredData.length}개</TotalCount>
          <ProductTable
            products={filteredData}
            onProductClick={handleProductClick}
          />
          <ActionButton onClick={handleRegister}>신규 등록</ActionButton>
          <Pagination
            page={page}
            setPage={setPage}
            total={total}
            limit={limit}
          />
        </Container>
      </Content>
    </ThemeProvider>
  );
};

export default ProductList;

const Content = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
`;

const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.gray};
  padding: 20px;
  height: 100%;
`;

const TotalCount = styled.div`
  font-size: ${({ theme }) => theme.fonts.default.fontSize};
  margin-bottom: 10px;
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
`;

const ActionButton = styled.button`
  margin-right: 5px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.WhiteBrown4};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
`;
