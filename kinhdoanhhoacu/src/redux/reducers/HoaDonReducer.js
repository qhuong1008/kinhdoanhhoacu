import {
  THANHTOAN_BEGIN,
  THANHTOAN_SUCCESS,
  THANHTOAN_FAIL,
} from "../actions/hoadonAction";

const initialState = {
  loading: false,
  error: null,
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
    default:
      return state;
  }
};
