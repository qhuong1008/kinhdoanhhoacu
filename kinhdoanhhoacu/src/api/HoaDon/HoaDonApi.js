import { axiosInstance } from "../types/axios";

const ThanhToanHoaDon = async (info) => {
  return await axiosInstance.post("/api/hoadon", info);
};
export { ThanhToanHoaDon };
