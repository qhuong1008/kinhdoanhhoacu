import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AccountSideBar from "../../components/AccountSideBar";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../redux/actions/accountAction";
import { useState, useEffect } from "react";

const ChangePassword = () => {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);

  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const handleChangePassword = () => {
    const modifiedUser = {};
    modifiedUser.MaNguoiDung = user.MaNguoiDung;
    modifiedUser.MatKhau = password;
    console.log(modifiedUser);
    dispatch(changePassword(modifiedUser))
      .then(alert("Đổi mật khẩu thành công!"))
      .catch((error) => alert(error));
  };
  return (
    <>
      <Header />
      <div className="changepw-page-container">
        <AccountSideBar />
        <div className="changepw-page-content">
          <div className="changepw-title">
            <h5>Đổi mật khẩu</h5>
            <label>Quản lý thông tin hồ sơ để bảo mật tài khoản</label>
            <div className="ruler"></div>
          </div>
          <div className="changepw-info">
            <div className="changepw-info-item">
              <div className="changepw-info-label">Mật khẩu mới</div>
              <input
                className="changepw-info-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="changepw-info-item">
              <div className="changepw-info-label">Xác nhận mật khẩu</div>
              <input
                className="changepw-info-input"
                type="password"
                value={retypePassword}
                onChange={(e) => setRetypePassword(e.target.value)}
              />
            </div>
            <div className="changepw-info-item">
              <div className="changepw-info-label"></div>
              <div className="save-btn" onClick={handleChangePassword}>
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
export default ChangePassword;
