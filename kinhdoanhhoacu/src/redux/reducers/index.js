import { combineReducers } from "redux";
import { NguoiDungReducer } from "./NguoiDungReducer";
import { productsReducer, productReducer } from "./productsReducer";
import { CartReducer } from "./CartReducer";
import { HoaDonReducer } from "./HoaDonReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: productReducer,
  nguoidung: NguoiDungReducer,
  cart: CartReducer,
  hoadon: HoaDonReducer,
});
export default reducers;
