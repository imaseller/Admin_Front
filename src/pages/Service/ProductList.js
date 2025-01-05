import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../../styles/Theme";
import ProductTable from "../../components/ProductTable";
import Pagination from "../../components/Pagination";
import { FiSearch } from "react-icons/fi";
import NewIcon from "../../assets/New.svg";

const ProductList = ({ title }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType] = useState("productName");
  const [productData] = useState([
    // 임시 데이터 추가
    {
      no: 1,
      productName: "Stylish T-shirt",
      brand: "Brand A",
      category: "Top",
      color: "Red",
      size: "M",
      price: "₩30,000",
      registerDate: "2023-12-01",
      status: "등록완료",
    },
    {
      no: 2,
      productName: "Casual Jeans",
      brand: "Brand B",
      category: "Bottom",
      color: "Blue",
      size: "L",
      price: "₩50,000",
      registerDate: "2023-12-02",
      status: "등록대기",
    },
  ]);
  const [totalCount] = useState(productData.length); // 초기 총 개수
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [selectedTab, setSelectedTab] = useState("all");

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const filteredData = productData.filter((item) =>
    item[searchType]?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(totalCount / limit);

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Content>
        <HeaderTitle>상품 목록</HeaderTitle>
        <HeaderContainer>
          <TabContainer>
            <TabButton
              active={selectedTab === "all"}
              onClick={() => handleTabClick("all")}
              isFirst
            >
              전체보기
              {selectedTab === "all" && <NewBadge src={NewIcon} alt="New" />}
            </TabButton>
            <TabButton
              active={selectedTab === "active"}
              onClick={() => handleTabClick("active")}
            >
              활성화 상품
              {selectedTab === "active" && <NewBadge src={NewIcon} alt="New" />}
            </TabButton>
            <TabButton
              active={selectedTab === "blocked"}
              onClick={() => handleTabClick("blocked")}
              isLast
            >
              비활성화 상품
              {selectedTab === "blocked" && (
                <NewBadge src={NewIcon} alt="New" />
              )}
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

        <Title>{title}</Title>

        <TotalCount>Total: {totalCount}</TotalCount>

        <Container>
          <ProductTable
            products={filteredData}
            onProductClick={handleProductClick}
          />
        </Container>

        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </Content>
    </ThemeProvider>
  );
};

export default ProductList;

// 스타일 컴포넌트 정의
const Content = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  padding: 20px;
`;

const TotalCount = styled.div`
  font-family: "NanumSquare Neo OTF";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 13px;
  margin-left: 20px;
  margin-top: 34px;
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
`;

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
  font-weight: 700;
  font-size: 12px;
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

const HeaderTitle = styled.h1`
  ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
  font-family: "NanumSquare Neo OTF";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
`;
