import { Axios } from "../Axios";
import Cookies from "js-cookie";

export const AdminLoginPost = async (data, callbackFunctions) => {
  const { navigateSuccess, navigateError } = callbackFunctions;

  try {
    // 서버 요청에 맞게 `id`와 `password`를 전송
    const response = await Axios.post("/admin/auth/login", {
      id: data.id, // 'id' 필드로 수정 (email -> id)
      password: data.password,
    });

    const accessToken = response.data.accessToken;

    // 쿠키에 accessToken 저장
    Cookies.set("accessToken", accessToken, { expires: 7, path: "/" });

    // 로그인 성공 시 navigateSuccess 호출
    navigateSuccess();
  } catch (error) {
    let errorMessage = "로그인에 실패했습니다."; // 기본 오류 메시지

    if (error.response) {
      // 응답에서 상태 코드에 따라 에러 메시지 처리
      if (error.response.status === 401) {
        errorMessage = "잘못된 자격 증명입니다."; // 잘못된 자격 증명
      } else if (error.response.status === 403) {
        errorMessage = "계정이 차단되었습니다."; // 계정 차단
      } else if (error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message; // 서버에서 반환된 오류 메시지
      }
    } else {
      errorMessage = "서버와 연결할 수 없습니다."; // 네트워크 또는 서버 오류 처리
    }

    navigateError(errorMessage);
  }
};
