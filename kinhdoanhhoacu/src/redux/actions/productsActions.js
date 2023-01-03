import { SanPhamApi } from "../../api/index";

export const GET_ALL_PRODUCTS_BEGIN = "GET_ALL_PRODUCTS_BEGIN";
export const GET_ALL_PRODUCTS_SUCCESS = "GET_ALL_PRODUCTS_SUCCESS";
export const GET_ALL_PRODUCTS_FAIL = "GET_ALL_PRODUCTS_FAIL";

export const GET_PRODUCT_BEGIN = "GET_PRODUCT_BEGIN";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAIL = "GET_PRODUCT_FAIL";

export const getAllProducts = () => async (dispatch) => {
  dispatch({
    type: GET_ALL_PRODUCTS_BEGIN,
  });
  SanPhamApi.getSanPham()
    .then((response) => {
      dispatch({
        type: GET_ALL_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_ALL_PRODUCTS_FAIL,
        payload: error,
      });
    });
};

export const getProductById = (id) => async (dispatch) => {
  dispatch({
    type: GET_PRODUCT_BEGIN,
  });

  SanPhamApi.getSanPhamById(id)
    .then((response) => {
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: response.data[0],
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_PRODUCT_FAIL,
        payload: error,
      });
    });
};
