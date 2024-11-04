// src/components/ProductTable.js
import React from 'react';
import styled from 'styled-components';

const BrandTable = ({ products, onProductClick }) => (
  <Table>
    <thead>
      <tr>
        <th>No.</th>
        <th>그룹명</th>
        <th>브랜드명</th>
        <th>담당자</th>
        <th>연락처</th>
        <th>인기여부</th>
        <th>사용</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product, index) => (
        <tr key={index}>
          <td>{product.no}</td>
          <ProductName onClick={() => onProductClick(product.no)}>
            {product.groupName} {/* Changed to match the header */}
          </ProductName>
          <td>{product.brandName}</td> {/* Changed to match the header */}
          <td>{product.manager}</td> {/* Changed to match the header */}
          <td>{product.contact}</td> {/* Changed to match the header */}
          <td>{product.isPopular ? 'Yes' : 'No'}</td>{' '}
          {/* Changed to match the header */}
          <td>{product.isActive ? 'Yes' : 'No'}</td>{' '}
          {/* Changed to match the header */}
        </tr>
      ))}
    </tbody>
  </Table>
);

export default BrandTable;

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
