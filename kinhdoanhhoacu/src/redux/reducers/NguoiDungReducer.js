import {
  GET_ALL_NGUOIDUNG_SUCCESS,
  GET_ALL_NGUOIDUNG_FAIL,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
} from "../actions/signinAction";

import {
  MODIFY_NGUOIDUNG_SUCCESS,
  MODIFY_NGUOIDUNG_FAIL,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
} from "../actions/accountAction";
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
    case MODIFY_NGUOIDUNG_SUCCESS:
      return {
        ...state,
        nguoidung: action.payload,
      };
    case MODIFY_NGUOIDUNG_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        nguoidung: action.payload,
      };
    case CHANGE_PASSWORD_FAIL:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
