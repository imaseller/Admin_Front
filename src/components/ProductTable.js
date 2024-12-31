import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProductTable = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (productNo) => {
    navigate(`/productlist/detail/${productNo}`);
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>No.</th>
          <th>스타일(품번)</th>
          <th>브랜드</th>
          <th>분류</th>
          <th>색상</th>
          <th>사이즈</th>
          <th>리테일가</th>
          <th>등록일</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.no}</td>
            <ProductName onClick={() => handleProductClick(product.no)}>
              {product.productName}
            </ProductName>
            <td>{product.brand}</td>
            <td>{product.category}</td>
            <td>{product.color}</td>
            <td>{product.size}</td>
            <td>{product.price}</td>
            <td>{product.registerDate}</td>
            <td>{product.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductTable;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #dddddd;

  th,
  td {
    padding: 12px;
    text-align: center;
    vertical-align: middle;
    border: none;
  }

  th {
    background-color: #eeeeee;
    font-weight: bold;
    font-family: "NanumSquare Neo OTF";
    font-style: normal;
    font-weight: 800;
    font-size: 12px;
    line-height: 13px;
    color: #000000;
  }

  td {
    font-family: "NanumSquare Neo OTF";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 13px;
    color: #000000;
  }

  th:first-child,
  td:first-child {
    width: 40px;
  }

  tr {
    border: 1px solid #dddddd;
    &:last-child td {
      border-bottom: none;
    }
  }
`;

const ProductName = styled.td`
  color: #007bff;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`;
