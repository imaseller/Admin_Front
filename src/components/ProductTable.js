// src/components/ProductTable.js
import React from "react";
import styled from "styled-components";

const ProductTable = ({ products, onProductClick }) => (
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
          <ProductName onClick={() => onProductClick(product.no)}>
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

export default ProductTable;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.gray};

  th,
  td {
    padding: 12px 0px;
    text-align: left;
    min-width: 60px;
    border-bottom: 1px solid #ddd;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    text-align: center;
  }

  th {
    background-color: ${({ theme }) => theme.colors.WhiteBrown1};
  }
`;

const ProductName = styled.td`
  color: #007bff;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`;
