import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../../styles/Theme";
import {
  fetchUserList,
  fetchActiveUserList,
  fetchBlockedUserList,
  deleteUser,
} from "../../api/UserApi";
import MemberTable from "../../components/MemberTable";
import Pagination from "../../components/Pagination";
import { FiSearch } from "react-icons/fi";
import NewIcon from "../../assets/New.svg";

const MemberList = ({ title }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType] = useState("id");
  const [UserData, setUserData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [selectedTab, setSelectedTab] = useState("all");
  const [loading, setLoading] = useState(false);

  // 탭에 따라 다른 API 호출
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      let data;
      if (selectedTab === "all") {
        data = await fetchUserList(page, limit);
      } else if (selectedTab === "active") {
        data = await fetchActiveUserList(page, limit);
      } else if (selectedTab === "blocked") {
        data = await fetchBlockedUserList(page, limit);
      }
      setUserData(data?.Users || []);
      setTotalCount(data?.total || 0);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    } finally {
      setLoading(false);
    }
  }, [selectedTab, page, limit]);

  // 데이터를 가져오는 useEffect
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // 수정 버튼 클릭 시 이동
  const handleEdit = (id) => {
    navigate(`/user/${id}`);
  };

  // 삭제 기능
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "정말로 이 사용자를 삭제하시겠습니까?"
    );
    if (confirmDelete) {
      try {
        await deleteUser(id);
        alert("사용자가 성공적으로 삭제되었습니다.");
        fetchData(); // 삭제 후 목록 갱신
      } catch (error) {
        alert("사용자 삭제 중 오류가 발생했습니다.");
      }
    }
  };

  // 검색 필터링
  const filteredData = Array.isArray(UserData)
    ? UserData.filter((item) =>
        item[searchType]?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const totalPages = Math.ceil(totalCount / limit);

  // 탭 변경 핸들러
  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
    setPage(1); // 탭 변경 시 페이지 초기화
  };

  return (
    <ThemeProvider theme={Theme}>
      <Content>
        <HeaderTitle>관리자 목록</HeaderTitle>
        <HeaderContainer>
          <TabContainer>
            {["all", "active", "blocked"].map((tab) => (
              <TabButton
                key={tab}
                active={selectedTab === tab}
                onClick={() => handleTabClick(tab)}
              >
                {tab === "all"
                  ? "전체보기"
                  : tab === "active"
                  ? "일반관리자"
                  : "차단 관리자"}
                {selectedTab === tab && <NewBadge src={NewIcon} alt="New" />}
              </TabButton>
            ))}
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

        <Container>
          <MemberTable
            filteredData={filteredData}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
          <ActionButton onClick={() => navigate("/user/create")}>
            신규 등록
          </ActionButton>
        </Container>

        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </Content>
    </ThemeProvider>
  );
};

export default MemberList;

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
