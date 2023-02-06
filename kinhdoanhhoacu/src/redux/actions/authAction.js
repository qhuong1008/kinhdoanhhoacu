import { NguoiDungApi } from "../../api/index";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";
export const REFRESH_SUCCESS = "REFRESH_SUCCESS";
export const REFRESH_FAIL = "REFRESH_FAIL";

export const login = (loginInfo) => async (dispatch) => {
  NguoiDungApi.login(loginInfo)
    .then((response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });

      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
        payload: err,
      });
    });
};

export const logout = (token) => async (dispatch) => {
  NguoiDungApi.logout(token)
    .then(() => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGOUT_FAIL,
        payload: err,
      });
    });
};
export const refresh = (token) => async (dispatch) => {
  NguoiDungApi.refresh(token)
    .then(() => {
      dispatch({
        type: REFRESH_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: REFRESH_FAIL,
        payload: err,
      });
    });
};
