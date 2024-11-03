import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../../styles/Theme';
import { AdminGet } from '../../api/admin/AdminGet';
import { deleteAdmin } from '../../api/admin/AdminIdDelete';
import Header from '../../components/AdminMananger/Header';
import AdminTable from '../../components/AdminMananger/AdminTable';
import Pagination from '../../components/AdminMananger/Paination';

const ManagerList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('id');
  const [adminData, setAdminData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AdminGet(page, limit);
        setAdminData(data.admins);
        setTotalCount(data.total);
      } catch (error) {
        console.error('Failed to fetch admin data:', error);
      }
    };

    fetchData();
  }, [page, limit]);

  const handleEdit = (id) => {
    navigate(`/admin/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      '정말로 이 관리자를 삭제하시겠습니까?'
    );
    if (confirmDelete) {
      try {
        await deleteAdmin(id);
        alert('관리자가 성공적으로 삭제되었습니다.');
        setAdminData((prevData) => prevData.filter((admin) => admin.id !== id));
      } catch (error) {
        alert('관리자 삭제 중 오류가 발생했습니다.');
      }
    }
  };

  const filteredData = adminData.filter((item) => {
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
        <Header
          title='관리자 목록'
          searchType={searchType}
          setSearchType={setSearchType}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <Container>
          <TotalCount>총 {totalCount}개</TotalCount>
          <AdminTable
            filteredData={filteredData}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
          <ActionButton onClick={() => navigate('/admin/create')}>
            신규 등록
          </ActionButton>
          <Pagination page={page} setPage={setPage} />
        </Container>
      </Content>
    </ThemeProvider>
  );
};

export default ManagerList;

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
