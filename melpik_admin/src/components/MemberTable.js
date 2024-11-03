import React from 'react';
import styled from 'styled-components';

const MemberTable = ({ filteredData, handleEdit }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>No.</th>
          <th>상태</th>
          <th>회원타입</th>
          <th>계정(이메일)</th>
          <th>닉네임</th>
          <th>생일</th>
          <th>선호색상</th>
          <th>선호브랜드</th>
          <th>최근접속일</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((member) => (
          <tr key={member.no}>
            <td>{member.no}</td>
            <td>{member.status}</td>
            <td>{member.memberType}</td>
            <EmailCell onClick={() => handleEdit(member.no)}>
              {member.email}
            </EmailCell>
            <td>{member.nickname}</td>
            <td>{member.birthdate}</td>
            <td>{member.preferredColors.join(', ')}</td>
            <td>{member.preferredBrands.join(', ')}</td>
            <td>{new Date(member.lastLogin).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MemberTable;

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

const EmailCell = styled.td`
  color: #007bff;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`;
