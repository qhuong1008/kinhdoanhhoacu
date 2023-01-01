import axios from "axios";
import { ActionTypes } from "../constants/ActionTypes";
import { SanPhamApi } from "../../api/index";

export const fetchProducts = () => async (dispatch) => {
  const response = await SanPhamApi.getSanPham();
  console.log(response.data);
  dispatch({
    type: ActionTypes.FETCH_PRODUCTS,
    payload: response.data,
  });
};
