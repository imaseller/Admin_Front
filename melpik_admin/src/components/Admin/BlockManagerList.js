import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../../styles/Theme';
// import { BlockedAdminGet } from '../../api/admin/BlockedAdminGet'; // API call to get blocked admins
import { deleteAdmin } from '../../api/admin/AdminIdDelete'; // Reusing deleteAdmin for unblocking

const BlockManagerList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('id');
  const [blockedAdminData, setBlockedAdminData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const data = await BlockedAdminGet(page, limit);
  //         setBlockedAdminData(data.admins);
  //         setTotalCount(data.total);
  //       } catch (error) {
  //         console.error('Failed to fetch blocked admin data:', error);
  //       }
  //     };

  //     fetchData();
  //   }, [page, limit]);

  const handleEdit = (id) => {
    navigate(`/admin/${id}`);
  };

  const handleUnblock = async (id) => {
    const confirmUnblock = window.confirm(
      '정말로 이 관리자의 차단을 해제하시겠습니까?'
    );
    if (confirmUnblock) {
      try {
        await deleteAdmin(id); // Reusing deleteAdmin for unblocking
        alert('관리자의 차단이 성공적으로 해제되었습니다.');
        setBlockedAdminData((prevData) =>
          prevData.filter((admin) => admin.id !== id)
        );
      } catch (error) {
        alert('관리자 차단 해제 중 오류가 발생했습니다.');
      }
    }
  };

  const filteredData = blockedAdminData.filter((item) => {
    if (searchType === 'id') {
      return item.id.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchType === 'name') {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchType === 'email') {
      return item.email.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchType === 'role') {
      return item.role.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return item;
  });

  return (
    <ThemeProvider theme={Theme}>
      <Content>
        <Header>
          <HeaderTitle>차단된 관리자 목록</HeaderTitle>
          <SearchContainer>
            <SearchSelect onChange={(e) => setSearchType(e.target.value)}>
              <option value='id'>아이디</option>
              <option value='name'>이름</option>
              <option value='email'>이메일</option>
              <option value='role'>권한등급</option>
            </SearchSelect>
            <SearchInput
              type='text'
              placeholder='Search'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
        </Header>
        <Container>
          <TotalCount>총 {totalCount}개</TotalCount>
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
                    <ActionButton onClick={() => handleUnblock(manager.id)}>
                      차단 해제
                    </ActionButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <ActionButton onClick={() => navigate('/admin/create')}>
            신규 등록
          </ActionButton>
          <Pagination>
            <PageButton disabled={page === 1} onClick={() => setPage(page - 1)}>
              «
            </PageButton>
            <PageButton>{page}</PageButton>
            <PageButton onClick={() => setPage(page + 1)}>»</PageButton>
          </Pagination>
        </Container>
      </Content>
    </ThemeProvider>
  );
};

export default BlockManagerList;

const Content = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
  font-size: ${({ theme }) => theme.fonts.default.fontSize};
`;

const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.gray};
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.WhiteBrown5};
`;

const HeaderTitle = styled.h1`
  ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fonts.heading.fontSize};
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: ${({ theme }) => theme.fonts.default.fontSize};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  margin-right: 10px;
  width: 315px;
`;

const TotalCount = styled.div`
  font-size: ${({ theme }) => theme.fonts.default.fontSize};
  margin-bottom: 10px;
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
`;

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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const PageButton = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.WhiteBrown4};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchSelect = styled.select`
  padding: 10px;
  font-size: ${({ theme }) => theme.fonts.default.fontSize};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  margin-right: 10px;
`;
