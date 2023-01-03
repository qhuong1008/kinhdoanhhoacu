import {
  GET_ALL_PRODUCTS_BEGIN,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  GET_PRODUCT_BEGIN,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
} from "../actions/productsActions";

const intialState = {
  products: [],
  product: {},
  loading: false,
  error: null,
};

export const productsReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case GET_ALL_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case GET_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
