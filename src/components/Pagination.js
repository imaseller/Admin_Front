import React from "react";
import styled from "styled-components";

const Pagination = ({ page, setPage, totalPages }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <PaginationContainer>
      <PageArrow disabled={page === 1} onClick={() => setPage(1)}>
        «
      </PageArrow>

      <PageArrow disabled={page === 1} onClick={() => setPage(page - 1)}>
        ‹
      </PageArrow>

      {pages.length > 0 &&
        pages.map((num) => (
          <PageButton
            key={num}
            active={num === page}
            onClick={() => setPage(num)}
          >
            {num}
          </PageButton>
        ))}

      <PageArrow
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        ›
      </PageArrow>

      <PageArrow
        disabled={page === totalPages}
        onClick={() => setPage(totalPages)}
      >
        »
      </PageArrow>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
`;

const PageButton = styled.button`
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.black : theme.colors.white};
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.darkGray};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 4px;

  &:hover {
    background-color: ${({ active, theme }) =>
      active ? theme.colors.black : theme.colors.lightGray};
  }
`;

const PageArrow = styled.button`
  padding: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: transparent;
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.lightGray : theme.colors.darkGray};
  border: none;

  &:hover {
    color: ${({ disabled, theme }) =>
      disabled ? theme.colors.lightGray : theme.colors.black};
  }
`;
