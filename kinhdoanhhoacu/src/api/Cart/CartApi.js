import { createBreakpoints } from "@mui/system";
import { axiosInstance } from "../types/axios";

const AddToCart = async (cart) => {
  return await axiosInstance.post("/api/cart", cart);
};
const GetCartInfo = async () => {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  return await axiosInstance.get(`/api/cart/cart_${user.MaNguoiDung}`);
};
const DeleteFromCart = async (cart) => {
  return await axiosInstance.post("/api/delete/cart", cart);
};
export { AddToCart, GetCartInfo, DeleteFromCart };
