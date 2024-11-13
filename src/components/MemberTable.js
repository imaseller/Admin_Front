import React, { useState } from "react";
import styled from "styled-components";

const MemberTable = ({ members = [], handleEdit }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  // Handle select all logic
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedRows(!selectAll ? members.map((member) => member.no) : []);
  };

  // Handle row selection logic
  const handleRowSelect = (no) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(no)
        ? prevSelected.filter((id) => id !== no)
        : [...prevSelected, no]
    );
  };

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th>No.</th>
            <th>상태</th>
            <th>등급</th>
            <th>이름</th>
            <th>닉네임</th>
            <th>계정 (인스타)</th>
            <th>팔로워 / 팔로우</th>
            <th>서비스 지역</th>
            <th>가입일자</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.no}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(member.no)}
                  onChange={() => handleRowSelect(member.no)}
                />
              </td>
              <td>{member.no}</td>
              <td>{member.status}</td>
              <td>{member.rank}</td>
              <td>{member.name}</td>
              <td>{member.nickname}</td>
              <AccountCell onClick={() => handleEdit(member.no)}>
                {member.profileImage ? (
                  <ProfileImage src={member.profileImage} alt="profile" />
                ) : (
                  <Placeholder />
                )}
                <AccountText>{member.account}</AccountText>
              </AccountCell>
              <td>
                {member.followers} / {member.following}
              </td>
              <td>{member.serviceRegion}</td>
              <td>{new Date(member.joinDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default MemberTable;

const TableContainer = styled.div`
  width: 100%;
  min-width: 1200px;
  margin: 20px auto;
  border: 1px solid #dddddd;
  border-radius: 4px;
  overflow: hidden;
`;

const StyledTable = styled.table`
  width: 100%;

  th,
  td {
    padding: 12px;
    text-align: center;
    vertical-align: middle;
    border: none;
  }

  th {
    background: #eeeeee;
    font-weight: bold;
    font-family: "NanumSquare Neo OTF";
    font-style: normal;
    font-weight: 400;
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

const AccountCell = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #007bff;
  cursor: pointer;
  vertical-align: middle;
  &:hover {
    color: #0056b3;
  }
`;

const ProfileImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
`;

const Placeholder = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #dddddd;
`;

const AccountText = styled.span`
  color: inherit;
  display: inline-block;
  vertical-align: middle;
`;
