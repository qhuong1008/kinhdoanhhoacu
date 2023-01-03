import {
  GET_ALL_NGUOIDUNG_SUCCESS,
  GET_ALL_NGUOIDUNG_FAIL,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
} from "../actions/signinAction";

const intialState = {
  nguoidungList: [],
  nguoidung: {},
  error: null,
};

export const AllNguoiDungReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ALL_NGUOIDUNG_SUCCESS:
      return {
        ...state,
        nguoidungList: action.payload,
      };
    case GET_ALL_NGUOIDUNG_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export const NguoiDungReducer = (state = intialState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return {
        ...state,
        nguoidung: action.payload,
      };
    case SIGNIN_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
