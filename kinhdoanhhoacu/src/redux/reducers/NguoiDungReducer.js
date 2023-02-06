import { LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/authAction";
import {
  MODIFY_NGUOIDUNG_SUCCESS,
  MODIFY_NGUOIDUNG_FAIL,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
} from "../actions/accountAction";
const intialState = {
  nguoidungList: [],
  nguoidung: {},
  account: {},
  error: null,
};

export const NguoiDungReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        nguoidung: action.payload,
      };
    case LOGIN_FAIL:
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
    case SIGN_IN_SUCCESS:
      return {
        ...state,
      };
    case SIGN_IN_FAIL:
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
