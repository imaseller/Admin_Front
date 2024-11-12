import React, { useState } from "react";
import styled from "styled-components";

const MemberTable = ({ handleEdit }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const sampleData = [
    {
      no: 13486,
      status: "인증",
      rank: "일반",
      name: "홍길동",
      nickname: "miwin",
      account: "stylevexx",
      profileImage: "https://via.placeholder.com/24",
      followers: 5480,
      following: 397,
      serviceRegion: "서울 - 금천구",
      joinDate: "2024-11-15",
    },
    {
      no: 13487,
      status: "미인증",
      rank: "VIP",
      name: "이순신",
      nickname: "navyking",
      account: "admiral_lee",
      profileImage: "https://via.placeholder.com/24",
      followers: 10000,
      following: 500,
      serviceRegion: "서울 - 강남구",
      joinDate: "2023-09-10",
    },
  ];

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedRows(!selectAll ? sampleData.map((member) => member.no) : []);
  };

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
          {sampleData.map((member) => (
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
  border-collapse: collapse;

  th,
  td {
    padding: 12px;
    text-align: center;
    border: 1px solid #dddddd;
  }

  th {
    background: #eeeeee;
    font-weight: bold;
  }

  th:first-child,
  td:first-child {
    width: 40px;
  }

  tr {
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
`;
