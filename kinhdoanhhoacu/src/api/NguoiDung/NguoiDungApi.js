import { axiosInstance } from "../types/axios";
const getAllNguoiDung = async () => {
  return await axiosInstance.get("/api/nguoidung");
};
const getNguoiDungById = async (id) => {
  return await axiosInstance.get(`/api/nguoidung/${id}`);
};
const modifyNguoiDung = async (user) => {
  return await axiosInstance.post("/api/nguoidung", user);
};
const changePassword = async (user) => {
  return await axiosInstance.post("/api/nguoidung/changepw", user);
};

export { getAllNguoiDung, getNguoiDungById, modifyNguoiDung, changePassword };
