import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://api.stylewh.com", // API 서버 URL
  withCredentials: true, // 쿠키를 포함하여 요청을 보냄
});

// 응답 인터셉터 수정
Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // 로그인 경로에서만 오류를 처리하지 않도록 수정
    if (window.location.pathname === "/auth/login") {
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
