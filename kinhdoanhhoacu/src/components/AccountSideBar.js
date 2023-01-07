import style from "./style.scss";
import { Link } from "react-router-dom";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKey,
  faUser,
  faBox,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const AccountSideBar = () => {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  return (
    <>
      <div className="sidebar-container">
        <div className="account-container">
          <div className="account-avt">
            <img src="https://cf.shopee.vn/file/7e03f703b6cc3433b9be7a6b48b3acf1_tn" />
          </div>
          <div className="account-item">
            <div className="account-name">{user.HoTen}</div>
            <Link to="/myaccount">
              <div className="account-modify">Sửa hồ sơ</div>
            </Link>
          </div>
        </div>
        <div className="sidebar-list">
          <div className="sidebar-list-item">
            <Link to="/myaccount">
              <FontAwesomeIcon icon={faUser} className="icon" />
              Tài khoản của tôi
            </Link>
          </div>
          <div className="sidebar-list-item">
            <Link to="/changepassword">
              <FontAwesomeIcon icon={faKey} className="icon" />
              Đổi mật khẩu
            </Link>
          </div>
          <div className="sidebar-list-item">
            <Link to="/orders">
              <FontAwesomeIcon icon={faBox} className="icon" />
              Đơn mua
            </Link>
          </div>

          <div className="sidebar-list-item">
            <Link to="/notification">
              <FontAwesomeIcon icon={faBell} className="icon" />
              Thông báo
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default AccountSideBar;
