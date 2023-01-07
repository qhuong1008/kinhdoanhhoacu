import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AccountSideBar from "../../components/AccountSideBar";
import style from "./style.scss";
import $ from "jquery";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, DeleteFromCart } from "../../redux/actions/cartAction";
import { modifyNguoiDung } from "../../redux/actions/accountAction";
import {
  getAllNguoiDung,
  getNguoiDungById,
} from "../../redux/actions/signinAction";

const MyAccount = () => {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  // let nguoidung = useSelector((state) => state.nguoidung.nguoidung);

  const [daylist, setDaylist] = useState([]);
  const [monthlist, setMonthlist] = useState([]);
  const [yearlist, setYearlist] = useState([]);
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState(0);

  const [username, setUsername] = useState(user.TenDangNhap);
  const [hoten, setHoten] = useState(user.HoTen);
  const [ngaysinh, setNgaysinh] = useState(user.NgaySinh);
  const [diachi, setDiachi] = useState(user.DiaChi);

  const dispatch = useDispatch();

  const setUserDateBirth = () => {
    setYear(Number(user.NgaySinh.substring(0, 4)));
    setMonth(Number(user.NgaySinh.substring(5, 7)));
    setDay(Number(user.NgaySinh.substring(8, 10)));
  };

  const setDateTime = () => {
    for (let i = 1; i <= 31; i++) {
      daylist.push(i);
    }
    for (let i = 1; i <= 12; i++) {
      monthlist.push("Tháng " + i);
    }
    for (let i = 1900; i <= 2023; i++) {
      yearlist.push(i);
    }
  };
  const HandleModifyNguoiDung = () => {
    let modifiedUser = {};
    modifiedUser.MaNguoiDung = user.MaNguoiDung;
    modifiedUser.TenDangNhap = username;
    modifiedUser.MatKhau = user.MatKhau;
    modifiedUser.HoTen = hoten;
    // modifiedUser.NgaySinh = "01-31-2002";
    modifiedUser.NgaySinh =
      Number(month.substring(6, 8)) + "-" + day + "-" + year;
    modifiedUser.DiaChi = diachi;

    dispatch(modifyNguoiDung(modifiedUser))
      .then(() => {
        alert("modify thanh cong");
      })
      .catch((error) => alert(error));
  };
  useEffect(() => {
    setDateTime();
    setUserDateBirth();
  }, []);

  return (
    <>
      <Header />
      <div className="myacccount-page-container">
        <AccountSideBar />
        <div className="myaccount-page-content">
          <div className="myaccount-title">
            <h5>Hồ sơ của tôi</h5>
            <label>Quản lý thông tin hồ sơ để bảo mật tài khoản</label>
            <div className="ruler"></div>
          </div>
          <div className="myaccount-info">
            <div className="myaccount-info-item">
              <div className="myaccount-info-label">Tên đăng nhập</div>
              <input
                className="myaccount-info-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="myaccount-info-item">
              <div className="myaccount-info-label">Họ Tên</div>
              <input
                className="myaccount-info-input"
                value={hoten}
                onChange={(e) => setHoten(e.target.value)}
              />
            </div>
            <div className="myaccount-info-item">
              <div className="myaccount-info-label">Ngày sinh</div>
              <>
                <select
                  className="myaccount-info-combobox"
                  onChange={(e) => setDay(e.target.value)}
                >
                  <option>{day}</option>
                  {daylist.map((day) => {
                    return <option>{day}</option>;
                  })}
                </select>
                <select
                  className="myaccount-info-combobox"
                  onChange={(e) => setMonth(e.target.value)}
                >
                  <option>{month}</option>
                  {monthlist.map((month) => {
                    return <option>{month}</option>;
                  })}
                </select>
                <select
                  className="myaccount-info-combobox"
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option>{year}</option>
                  {yearlist.map((year) => {
                    return <option>{year}</option>;
                  })}
                </select>
              </>
            </div>
            <div className="myaccount-info-item">
              <div className="myaccount-info-label">Địa chỉ</div>
              <input
                className="myaccount-info-input"
                value={diachi}
                onChange={(e) => setDiachi(e.target.value)}
              />
            </div>
            <div className="myaccount-info-item">
              <div className="myaccount-info-label"></div>
              <div className="save-btn" onClick={() => HandleModifyNguoiDung()}>
                Lưu
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default MyAccount;
