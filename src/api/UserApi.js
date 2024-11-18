import { Axios } from "../api/Axios";

// 사용자 목록 조회 (전체, 활성, 차단 사용자 구분)
export const fetchUserList = async (page = 1, limit = 10) => {
  try {
    const response = await Axios.get("/user/", {
      params: { page, limit },
    });
    return response.data;
  } catch (error) {
    console.error("사용자 목록 조회 실패:", error);
    throw error;
  }
};

// 활성 사용자 목록 조회
export const fetchActiveUserList = async (page = 1, limit = 10) => {
  try {
    const response = await Axios.get("/user/actived", {
      params: { page, limit, status: "active" },
    });
    return response.data;
  } catch (error) {
    console.error("활성 사용자 목록 조회 실패:", error);
    throw error;
  }
};

// 차단 사용자 목록 조회
export const fetchBlockedUserList = async (page = 1, limit = 10) => {
  try {
    const response = await Axios.get("/user/blocked", {
      params: { page, limit },
    });
    return response.data;
  } catch (error) {
    console.error("차단 사용자 목록 조회 실패:", error);
    throw error;
  }
};

// 특정 사용자 정보 조회 (닉네임으로 조회)
export const fetchUserByNickname = async (nickname) => {
  try {
    const response = await Axios.get(`/user/${nickname}`);
    return response.data;
  } catch (error) {
    console.error(`사용자 조회 실패 (${nickname}):`, error);
    throw error;
  }
};

// 사용자 삭제
export const deleteUser = async (id) => {
  try {
    const response = await Axios.delete(`/user/${id}`);
    return response.data;
  } catch (error) {
    console.error(`사용자 삭제 실패 (ID: ${id}):`, error);
    throw error;
  }
};
