import { axiosInstance } from "../types/axios";
const getSanPham = async () => {
  return await axiosInstance.get("/api/sanpham");
};
const getSanPhamById = async (productId) => {
  return await axiosInstance.get(`/api/sanpham/${productId}`);
};
const getTenLoaiSanPhamBySPId = async (productId) => {
  return await axiosInstance.get(`/api/sanpham/lsp/${productId}`);
};
export { getSanPham, getSanPhamById, getTenLoaiSanPhamBySPId };
