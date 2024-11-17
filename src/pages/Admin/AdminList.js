import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../../styles/Theme";
import {
  fetchAdminList,
  fetchActiveAdminList,
  fetchBlockedAdminList,
  deleteAdmin,
} from "../../api/AdminApi";
import AdminTable from "../../components/AdminTable";
import Pagination from "../../components/Pagination";
import { FiSearch } from "react-icons/fi";
import NewIcon from "../../assets/New.svg";

const AdminList = ({ title }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType] = useState("id");
  const [adminData, setAdminData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [selectedTab, setSelectedTab] = useState("all");

  // 탭에 따라 다른 API 호출
  const fetchData = useCallback(async () => {
    try {
      let data;
      if (selectedTab === "all") {
        data = await fetchAdminList(page, limit);
      } else if (selectedTab === "active") {
        data = await fetchActiveAdminList(page, limit);
      } else if (selectedTab === "blocked") {
        data = await fetchBlockedAdminList(page, limit);
      }
      setAdminData(data.admins);
      setTotalCount(data.total);
    } catch (error) {
      console.error("Failed to fetch admin data:", error);
    }
  }, [selectedTab, page, limit]);

  // 데이터를 가져오는 useEffect
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // 수정 버튼 클릭 시 이동
  const handleEdit = (id) => {
    navigate(`/admin/${id}`);
  };

  // 삭제 기능
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "정말로 이 관리자를 삭제하시겠습니까?"
    );
    if (confirmDelete) {
      try {
        await deleteAdmin(id);
        alert("관리자가 성공적으로 삭제되었습니다.");
        fetchData(); // 삭제 후 목록 갱신
      } catch (error) {
        alert("관리자 삭제 중 오류가 발생했습니다.");
      }
    }
  };

  // 검색 필터링
  const filteredData = adminData.filter((item) =>
    item[searchType]?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(totalCount / limit);

  // 탭 변경 핸들러
  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Content>
        <HeaderTitle>관리자 목록</HeaderTitle>
        <HeaderContainer>
          <TabContainer>
            <TabButton
              active={selectedTab === "all"}
              onClick={() => handleTabClick("all")}
              isFirst
            >
              전체보기
              {selectedTab === "all" && <NewBadge src={NewIcon} alt="New" />}
            </TabButton>
            <TabButton
              active={selectedTab === "active"}
              onClick={() => handleTabClick("active")}
            >
              일반관리자
              {selectedTab === "active" && <NewBadge src={NewIcon} alt="New" />}
            </TabButton>
            <TabButton
              active={selectedTab === "blocked"}
              onClick={() => handleTabClick("blocked")}
              isLast
            >
              차단 관리자
              {selectedTab === "blocked" && (
                <NewBadge src={NewIcon} alt="New" />
              )}
            </TabButton>
          </TabContainer>

          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon />
          </SearchContainer>
        </HeaderContainer>

        <Title>{title}</Title>

        <TotalCount>Total: {totalCount}</TotalCount>

        {/* 관리자 테이블 및 추가 버튼 */}
        <Container>
          <AdminTable
            filteredData={filteredData}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
          <ActionButton onClick={() => navigate("/admin/create")}>
            신규 등록
          </ActionButton>
        </Container>

        {/* 페이지네이션 */}
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </Content>
    </ThemeProvider>
  );
};

export default AdminList;

// 스타일 컴포넌트 정의
const Content = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.gray};
  padding: 20px;
`;

const TotalCount = styled.div`
  font-family: "NanumSquare Neo OTF";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 13px;
  margin-left: 20px;
  margin-bottom: 19px;
  margin-top: 34px;
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
`;

const ActionButton = styled.button`
  background-color: ${({ theme }) => theme.colors.WhiteBrown4};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 21px;
  background: #f9f9f9;
  border: 1px solid #dddddd;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  background: #eeeeee;
  border: 1px solid #dddddd;
  border-radius: 8px 0px 0px 8px;
  overflow: visible;
`;

const TabButton = styled.button`
  position: relative;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.grayLight : theme.colors.white};
  color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.black};
  border: none;
  border-right: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 14px 27px;
  font-family: "NanumSquare Neo OTF";
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  cursor: pointer;

  ${({ isFirst, isLast }) =>
    isFirst
      ? "border-top-left-radius: 8px; border-bottom-left-radius: 8px;"
      : isLast
      ? "border-top-right-radius: 8px; border-bottom-right-radius: 8px;"
      : ""}
  &:last-child {
    border-right: none;
  }
`;

const NewBadge = styled.img`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 24px;
  height: 24px;
  z-index: 1;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchInput = styled.input`
  padding: 12px;
  font-size: 14px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  width: 230px;
  padding-right: 30px;
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  right: 10px;
  color: ${({ theme }) => theme.colors.grayDark};
  font-size: 16px;
`;

const HeaderTitle = styled.h1`
  ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
  font-family: "NanumSquare Neo OTF";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
`;
