import { axiosInstance } from "../types/axios";

const ThanhToanHoaDon = async (info) => {
  return await axiosInstance.post("/api/hoadon", info);
};
const getAllHoaDon = async (userID) => {
  return await axiosInstance.get(`/api/hoadon/${userID}`);
};

const getAllProductsFromHoaDon = async (userID) => {
  return await axiosInstance.get(`/api/hoadon/products/${userID}`);
};
export { ThanhToanHoaDon, getAllHoaDon, getAllProductsFromHoaDon };
