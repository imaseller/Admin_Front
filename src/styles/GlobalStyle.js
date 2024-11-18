import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import "./GlobalFont.css";

const GlobalStyle = createGlobalStyle`
  ${reset};

  html, body, div, span, h1, h2, h3, h4, h5, h6, p,
  a, dl, dt, dd, ol, ul, li, form, label, table {
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
    box-sizing: border-box;
    ${({ theme }) => theme.fonts.default};
    font-family: 'NanumSquare Neo OTF', sans-serif;
    &:visited {
      text-decoration: none;
      color: black;
    }
  }

  body {
    line-height: 1;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-width: 1024px;
    min-height: 1366px;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  ol, ul {
    list-style: none;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  /* Add responsiveness */
  @media (max-width: 1366px) {
    body {
      font-size: 14px;
    }
    h1 {
      font-size: 24px;
    }
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 18px;
    }
    p, label {
      font-size: 14px;
    }
  }

  @media (max-width: 1024px) {
    body {
      font-size: 12px;
    }
    h1 {
      font-size: 20px;
    }
    h2 {
      font-size: 18px;
    }
    h3 {
      font-size: 16px;
    }
    p, label {
      font-size: 12px;
    }
  }

  /* Tablet (iPad 12.9) */
  @media (max-width: 1024px) {
    body {
      overflow-x: auto;
    }
    .table-container {
      min-width: 800px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    body {
      font-size: 12px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    body {
      font-size: 14px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    body {
      font-size: 18px;
    }
  }
`;

export default GlobalStyle;
