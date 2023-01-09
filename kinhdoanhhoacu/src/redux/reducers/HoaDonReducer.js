import {
  THANHTOAN_BEGIN,
  THANHTOAN_SUCCESS,
  THANHTOAN_FAIL,
  GET_ALL_HOADON_BEGIN,
  GET_ALL_HOADON_SUCCESS,
  GET_ALL_HOADON_FAIL,
  GET_PRODUCTS_FROM_HOADON_BEGIN,
  GET_PRODUCTS_FROM_HOADON_SUCCESS,
  GET_PRODUCTS_FROM_HOADON_FAIL,
} from "../actions/hoadonAction";

const initialState = {
  loading: false,
  error: null,
  hoadonlist: [],
  donhanglist: [],
};

export const HoaDonReducer = (state = initialState, action) => {
  switch (action.type) {
    case THANHTOAN_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case THANHTOAN_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case THANHTOAN_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    case GET_ALL_HOADON_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_HOADON_SUCCESS:
      return {
        ...state,
        hoadonlist: action.payload,
        loading: false,
      };
    case GET_ALL_HOADON_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    case GET_PRODUCTS_FROM_HOADON_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_FROM_HOADON_SUCCESS:
      return {
        ...state,
        donhanglist: action.payload,
        loading: false,
      };
    case GET_PRODUCTS_FROM_HOADON_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
