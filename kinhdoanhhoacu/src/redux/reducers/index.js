import { combineReducers } from "redux";
import { AllNguoiDungReducer, NguoiDungReducer } from "./NguoiDungReducer";
import { productsReducer, productReducer } from "./productsReducer";
import { CartReducer } from "./CartReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: productReducer,
  allNguoiDung: AllNguoiDungReducer,
  nguoidung: NguoiDungReducer,
  cart: CartReducer,
});
export default reducers;
