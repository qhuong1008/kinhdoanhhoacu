import { axiosInstance } from "../types/axios";
const getSanPham = async () => {
  return await axiosInstance.get("/api/sanpham");
};
const getSanPhamById = async (productId) => {
  return await axiosInstance.get(`/api/sanpham/${productId}`);
};
export { getSanPham, getSanPhamById };
