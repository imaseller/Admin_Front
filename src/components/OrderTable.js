import React from "react";
import styled from "styled-components";

const OrderTable = ({ filteredData, handleEdit }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>No.</th>
          <th>신청일</th>
          <th>닉네임(수령인)</th>
          <th>제품명/브랜드</th>
          <th>기간</th>
          <th>이용날짜</th>
          <th>사이즈</th>
          <th>이용금액</th>
          <th>결제방식</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((order) => (
          <tr key={order.no}>
            <td>{order.no}</td>
            <td>{new Date(order.applicationDate).toLocaleDateString()}</td>{" "}
            {/* 신청일 */}
            <td>{order.recipientNickname}</td> {/* 닉네임(수령인) */}
            <td>
              {order.productName} / {order.brandName}
            </td>{" "}
            {/* 제품명/브랜드 */}
            <td>{order.duration}</td> {/* 기간 */}
            <td>{new Date(order.useDate).toLocaleDateString()}</td>{" "}
            {/* 이용날짜 */}
            <td>{order.size}</td> {/* 사이즈 */}
            <td>{order.amount}</td> {/* 이용금액 */}
            <td>{order.paymentMethod}</td> {/* 결제방식 */}
            <td>{order.status}</td> {/* 상태 */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default OrderTable;

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
