import { NguoiDungApi } from "../../api/index";

export const MODIFY_NGUOIDUNG_SUCCESS = "MODIFY_NGUOIDUNG_SUCCESS";
export const MODIFY_NGUOIDUNG_FAIL = "MODIFY_NGUOIDUNG_FAIL";
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_FAIL = "CHANGE_PASSWORD_FAIL";

export const modifyNguoiDung = (user) => async (dispatch) => {
  NguoiDungApi.modifyNguoiDung(user)
    .then((response) => {
      dispatch({
        type: MODIFY_NGUOIDUNG_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: MODIFY_NGUOIDUNG_FAIL,
        payload: error,
      });
    });
};

export const changePassword = (user) => async (dispatch) => {
  NguoiDungApi.changePassword(user)
    .then((response) => {
      dispatch({
        type: CHANGE_PASSWORD_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: CHANGE_PASSWORD_FAIL,
        payload: error,
      });
    });
};
