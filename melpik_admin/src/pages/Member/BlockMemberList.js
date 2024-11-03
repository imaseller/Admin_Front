import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../../styles/Theme';
import { UserGet } from '../../api/user/UserGet.js';
import Header from '../../components/HeaderTitle.js';
import MemberTable from '../../components/MemberTable.js';
import Pagination from '../../components/Paination.js';

const BlockMemberList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('email');
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UserGet(page, limit);
        setUsers(data.users || []);
        setTotal(data.total || 0);
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };

    fetchData();
  }, [page, limit]);

  const handleEdit = (no) => {
    navigate(`/user/admin${no}`);
  };

  const handleRegister = () => {
    navigate('/user/adminnew');
  };

  const filteredData = users.filter((item) => {
    if (searchType === 'email') {
      return item.email.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchType === 'nickname') {
      return item.nickname.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchType === 'status') {
      return item.status.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return item;
  });

  return (
    <ThemeProvider theme={Theme}>
      <Content>
        <Header
          title='블록회원 목록'
          searchType={searchType}
          setSearchType={setSearchType}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <Container>
          <TotalCount>총 {total}명</TotalCount>
          <MemberTable filteredData={filteredData} handleEdit={handleEdit} />
          <ActionButton onClick={handleRegister}>신규 등록</ActionButton>
          <Pagination
            page={page}
            setPage={setPage}
            total={total}
            limit={limit}
          />
        </Container>
      </Content>
    </ThemeProvider>
  );
};

export default BlockMemberList;

const Content = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
  font-size: ${({ theme }) => theme.fonts.default.fontSize};
`;

const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.gray};
  padding: 20px;
  overflow-x: auto; /* Enable horizontal scrolling if necessary */
`;

const TotalCount = styled.div`
  font-size: ${({ theme }) => theme.fonts.default.fontSize};
  margin-bottom: 10px;
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
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
