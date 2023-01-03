import { axiosInstance } from "../types/axios";

const AddToCart = async (cart) => {
  return await axiosInstance.post("/api/cart", cart);
};
const GetCartInfo = async () => {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  return await axiosInstance.get(`/api/cart/cart_${user.MaNguoiDung}`);
};
export { AddToCart, GetCartInfo };
