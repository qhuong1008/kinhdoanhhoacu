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
const addNguoiDung = async (user) => {
  return await axiosInstance.post("/api/nguoidung/add", user);
};
const changePassword = async (user) => {
  return await axiosInstance.post("/api/nguoidung/changepw", user);
};

const login = async (loginInfo) => {
  return await axiosInstance.post("/api/nguoidung/login", loginInfo);
};
const logout = async (token) => {
  return await axiosInstance.post("/api/nguoidung/login", token);
};
const refresh = async (token) => {
  return await axiosInstance.post("/api/nguoidung/refresh", token);
};

export {
  getAllNguoiDung,
  getNguoiDungById,
  modifyNguoiDung,
  addNguoiDung,
  changePassword,
  login,
  logout,
  refresh,
};
