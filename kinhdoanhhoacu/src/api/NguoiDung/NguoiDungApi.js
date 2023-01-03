import { axiosInstance } from "../types/axios";
const getAllNguoiDung = async () => {
  return await axiosInstance.get("/api/nguoidung");
};
const getNguoiDungById = async (id) => {
  return await axiosInstance.get(`/api/nguoidung/${id}`);
};

export { getAllNguoiDung, getNguoiDungById };
