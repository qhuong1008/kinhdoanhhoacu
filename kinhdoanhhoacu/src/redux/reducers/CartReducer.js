import {
  GET_CART_BEGIN,
  GET_CART_SUCCESS,
  GET_CART_FAIL,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAIL,
} from "../actions/cartAction";

const initialState = {
  cart: [],
  loading: false,
  error: null,
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };
    case GET_CART_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
      };
    case ADD_TO_CART_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
