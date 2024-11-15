import { Axios } from "../Axios";
import Cookies from "js-cookie";

export const AdminLoginPost = async (data, callbackFunctions) => {
  const { navigateSuccess, navigateError } = callbackFunctions;

  try {
    const response = await Axios.post("/admin/auth/login", {
      id: data.id,
      password: data.password,
    });

    const accessToken = response.data.accessToken;

    // 쿠키에 accessToken 저장
    Cookies.set("accessToken", accessToken, { expires: 7, path: "/" });

    navigateSuccess();
  } catch (error) {
    let errorMessage = "로그인에 실패했습니다.";

    if (error.response) {
      if (error.response.status === 401) {
        errorMessage = "잘못된 자격 증명입니다.";
      } else if (error.response.status === 403) {
        errorMessage = "계정이 차단되었습니다.";
      } else if (error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      }
    } else {
      errorMessage = "서버와 연결할 수 없습니다.";
    }

    navigateError(errorMessage);
  }
};
