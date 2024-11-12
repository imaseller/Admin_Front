import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../../styles/Theme";
import { UserGet } from "../../api/user/UserGet";
import Header from "../../components/SubHeader";
import MemberTable from "../../components/MemberTable";
import Pagination from "../../components/Paination";

const MemberList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("email");
  const [users, setUsers] = useState([]); // 유저 목록
  const [total, setTotal] = useState(0); // 전체 유저 수
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  // 페이지 변경 시 API 호출
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await UserGet(page, limit); // 데이터 가져오기
        setUsers(data.users); // 유저 데이터 설정
        setTotal(data.total); // 전체 유저 수 설정
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    };

    fetchData();
  }, [page, limit]);

  const handleEdit = (no) => {
    navigate(`/user/admin${no}`);
  };

  const handleRegister = () => {
    navigate("/user/adminnew");
  };

  // 검색 조건에 맞게 유저 필터링
  const filteredData = users.filter((item) => {
    if (searchType === "email") {
      return item.email.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchType === "nickname") {
      return item.nickname.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchType === "status") {
      return item.status.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return item;
  });

  return (
    <ThemeProvider theme={Theme}>
      <Content>
        <HeaderTitle>회원 목록</HeaderTitle>
        <Header
          searchType={searchType}
          setSearchType={setSearchType}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <Container>
          <TotalCount>총 {total}명</TotalCount> {/* 전체 유저 수 */}
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

export default MemberList;

// 스타일링 부분은 그대로 유지됩니다.
const Content = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
  font-size: ${({ theme }) => theme.fonts.default.fontSize};
`;

const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.gray};
  padding: 20px;
  overflow-x: auto;
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

const HeaderTitle = styled.h1`
  ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  font-weight: bold;

  margin: 20px;
`;
