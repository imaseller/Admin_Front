import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MemberTable = ({ members = [], handleEdit }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const navigate = useNavigate();

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

  // Handle navigation to detail page
  const handleNavigateToDetail = (no) => {
    navigate(`/user/detail/${no}`);
  };

  return (
    <Table>
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
            <AccountCell onClick={() => handleNavigateToDetail(member.no)}>
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
    </Table>
  );
};

export default MemberTable;

// 스타일 컴포넌트 정의
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
    font-size: 12px;
    line-height: 13px;
    color: #000000;
  }

  td {
    font-family: "NanumSquare Neo OTF";
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
  justify-content: flex-start;
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
