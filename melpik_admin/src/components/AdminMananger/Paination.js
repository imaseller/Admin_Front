import React from 'react';
import styled from 'styled-components';

const Pagination = ({ page, setPage }) => {
  return (
    <PaginationContainer>
      <PageButton disabled={page === 1} onClick={() => setPage(page - 1)}>
        «
      </PageButton>
      <PageButton>{page}</PageButton>
      <PageButton onClick={() => setPage(page + 1)}>»</PageButton>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
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
