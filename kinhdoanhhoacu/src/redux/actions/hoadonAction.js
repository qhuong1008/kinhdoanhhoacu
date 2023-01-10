import { HoaDonApi } from "../../api/index";

export const THANHTOAN_BEGIN = "THANHTOAN_BEGIN";
export const THANHTOAN_SUCCESS = "THANHTOAN_SUCCESS";
export const THANHTOAN_FAIL = "THANHTOAN_FAIL";
export const GET_ALL_HOADON_BEGIN = "GET_ALL_HOADON_BEGIN";
export const GET_ALL_HOADON_SUCCESS = "GET_ALL_HOADON_SUCCESS";
export const GET_ALL_HOADON_FAIL = "GET_ALL_HOADON_FAIL";
export const GET_PRODUCTS_FROM_HOADON_BEGIN = "GET_PRODUCTS_FROM_HOADON_BEGIN";
export const GET_PRODUCTS_FROM_HOADON_SUCCESS =
  "GET_PRODUCTS_FROM_HOADON_SUCCESS";
export const GET_PRODUCTS_FROM_HOADON_FAIL = "GET_PRODUCTS_FROM_HOADON_FAIL";

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

export const getAllHoaDon = (userID) => async (dispatch) => {
  dispatch({
    type: GET_ALL_HOADON_BEGIN,
  });
  HoaDonApi.getAllHoaDon(userID)
    .then((response) => {
      dispatch({
        type: GET_ALL_HOADON_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_ALL_HOADON_FAIL,
        payload: error,
      });
    });
};

export const getAllProductsFromHoaDon = (userID) => async (dispatch) => {
  dispatch({
    type: GET_PRODUCTS_FROM_HOADON_BEGIN,
  });
  HoaDonApi.getAllProductsFromHoaDon(userID)
    .then((response) => {
      dispatch({
        type: GET_PRODUCTS_FROM_HOADON_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_PRODUCTS_FROM_HOADON_FAIL,
        payload: error,
      });
    });
};
