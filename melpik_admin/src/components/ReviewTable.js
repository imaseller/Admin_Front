import React from 'react';
import styled from 'styled-components';

const ReviewTable = ({ filteredData, handleEdit }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>No.</th>
          <th>제품명</th>
          <th>브랜드</th>
          <th>평가</th>
          <th>이용기간</th>
          <th>사이즈</th>
          <th>이용자</th>
          <th>노출여부</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((review, index) => (
          <tr key={index}>
            <td>{review.no}</td>
            <ProductNameCell onClick={() => handleEdit(review.no)}>
              {review.productName}
            </ProductNameCell>
            <td>{review.brand}</td>
            <td>{review.rating}</td>
            <td>{review.usagePeriod}</td>
            <td>{review.size}</td>
            <td>{review.user}</td>
            <td>{review.exposure}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ReviewTable;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.gray};

  th,
  td {
    padding: 12px 5px;
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

const ProductNameCell = styled.td`
  color: #007bff;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`;
