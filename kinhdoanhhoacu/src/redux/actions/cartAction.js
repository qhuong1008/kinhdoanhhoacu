import { CartApi } from "../../api/index";

export const GET_CART_BEGIN = "GET_CART_BEGIN";
export const GET_CART_SUCCESS = "GET_CART_SUCCESS";
export const GET_CART_FAIL = "GET_CART_FAIL";

export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_CART_FAIL = "ADD_TO_CART_SUCCESS";

export const getCart = () => async (dispatch) => {
  dispatch({
    type: GET_CART_BEGIN,
  });
  CartApi.GetCartInfo()
    .then((response) => {
      dispatch({
        type: GET_CART_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_CART_FAIL,
        payload: error,
      });
    });
};

export const AddToCart = (cart) => async (dispatch) => {
  CartApi.AddToCart(cart)
    .then((response) => {
      dispatch({
        type: ADD_TO_CART_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: ADD_TO_CART_FAIL,
        payload: error,
      });
    });
};
