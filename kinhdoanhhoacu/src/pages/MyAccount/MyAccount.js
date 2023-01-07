import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AccountSideBar from "../../components/AccountSideBar";
import style from "./style.scss";
import $ from "jquery";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, DeleteFromCart } from "../../redux/actions/cartAction";

const MyAccount = () => {
  const [daylist, setDaylist] = useState([]);
  const [monthlist, setMonthlist] = useState([]);
  const [yearlist, setYearlist] = useState([]);
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  const dispatch = useDispatch();
  // let cart = useSelector((state) => state.cart.cart);
  // const isLoading = useSelector((state) => state.cart.loading);
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  console.log(user.NgaySinh.substring(0, 10));
  console.log(Number(user.NgaySinh.substring(0, 4)));
  console.log(Number(user.NgaySinh.substring(5, 7)));
  console.log(Number(user.NgaySinh.substring(8, 10)));
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
          <div className="myaccount-info-">
            <div className="myaccount-info-item">
              <div className="myaccount-info-label">Tên đăng nhập</div>
              <input
                className="myaccount-info-input"
                value={user.TenDangNhap}
              />
            </div>
            <div className="myaccount-info-item">
              <div className="myaccount-info-label">Họ Tên</div>
              <input className="myaccount-info-input" value={user.HoTen} />
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
              <input className="myaccount-info-input" value={user.DiaChi} />
            </div>
            <div className="myaccount-info-item">
              <div className="myaccount-info-label"></div>
              <div className="save-btn">Lưu</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default MyAccount;
