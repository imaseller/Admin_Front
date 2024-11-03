import React from 'react';
import styled from 'styled-components';

const AdminTable = ({ filteredData, handleEdit, handleDelete }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>No.</th>
          <th>상태</th>
          <th>아이디</th>
          <th>이름</th>
          <th>이메일</th>
          <th>권한등급</th>
          <th>액션</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((manager, index) => (
          <tr key={index}>
            <td>{manager.no}</td>
            <td>{manager.status}</td>
            <td>{manager.id}</td>
            <td>{manager.name}</td>
            <EmailCell onClick={() => handleEdit(manager.id)}>
              {manager.email}
            </EmailCell>
            <td>{manager.role}</td>
            <td>
              <ActionButton onClick={() => handleEdit(manager.id)}>
                수정
              </ActionButton>
              <ActionButton onClick={() => handleDelete(manager.id)}>
                삭제
              </ActionButton>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AdminTable;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.gray};

  th,
  td {
    padding: 12px 15px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    text-align: center;
    font-size: ${({ theme }) => theme.fonts.default.fontSize};
  }

  th {
    background-color: ${({ theme }) => theme.colors.WhiteBrown1};
  }
`;

const EmailCell = styled.td`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.blue};
  &:hover {
    color: ${({ theme }) => theme.colors.darkBlue};
  }
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
