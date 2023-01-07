import { HoaDonApi } from "../../api/index";

export const THANHTOAN_BEGIN = "THANHTOAN_BEGIN";
export const THANHTOAN_SUCCESS = "THANHTOAN_SUCCESS";
export const THANHTOAN_FAIL = "THANHTOAN_FAIL";

export const ThanhToanHoaDon = (info) => async (dispatch) => {
  dispatch({
    type: THANHTOAN_BEGIN,
  });
  HoaDonApi.ThanhToanHoaDon(info)
    .then((response) => {
      dispatch({
        type: THANHTOAN_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: THANHTOAN_FAIL,
        payload: error,
      });
    });
};
