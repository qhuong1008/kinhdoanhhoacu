import logo from "../assets/img/logo4.png";
import style from "./style.scss";
import GlobalStyle from "../GlobalStyle.scss";
import { Link } from "react-router-dom";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faPhone,
  faEnvelope,
  faLocationDot,
  faDollarSign,
  faUser,
  faRightFromBracket,
  faBox,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const handleLogout = () => {
    localStorage.removeItem("user");
  };
  const handleLogin = () => {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    if (user == null) {
      window.location.href = `/login`;
    }
  };
  return (
    <>
      <div className="top-header">
        <div className="header-links">
          <div className="top-header-item">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            +454-54-54-54
          </div>

          <div className="top-header-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            quanlihoacu@email.com
          </div>
          <div className="top-header-item">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />1 Vo Van
            Ngan
          </div>
        </div>
        <div className="header-links">
          <div className="top-header-item">
            <FontAwesomeIcon icon={faDollarSign} className="icon" />
            VND
          </div>
          <div className="top-header-item" onClick={handleLogin}>
            <FontAwesomeIcon icon={faUser} className="icon" />
            My Accounts
          </div>
          <Link to="/login" onClick={handleLogout}>
            <div className="top-header-item">
              <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
              Logout
            </div>
          </Link>
        </div>
      </div>
      <div className="header">
        <a href="/" className="logo">
          <img src={logo} />
        </a>
        <div className="search-container">
          <input type="text" name="" placeholder="Search here..." />
          <div className="search-btn">Search</div>
        </div>
        <div className="header-menu">
          <div className="header-menu-item">
            <FontAwesomeIcon icon={faHeart} className="icon" />
            <div className="amount">2</div>
            Wishlist
          </div>
          <Link to="/cart">
            <div className="header-menu-item">
              <FontAwesomeIcon
                icon={faCartShopping}
                onClick={handleLogin}
                className="icon"
              />
              <div className="amount">2</div>
              Giỏ hàng
            </div>
          </Link>
          <Link to="/orders">
            <div className="header-menu-item">
              <FontAwesomeIcon
                icon={faBox}
                className="icon"
                onClick={handleLogin}
              />
              <div className="amount">2</div>
              Đơn hàng
            </div>
          </Link>
        </div>
      </div>
      <div className="header-red"></div>
      <div className="navigation">
        <ul className="nav-list">
          <li className="nav-item">
            Trang chủ
            <div className="underline"></div>
          </li>
          <li className="nav-item">
            Màu vẽ <div className="underline"></div>
          </li>
          <li className="nav-item">
            Giấy vẽ <div className="underline"></div>
          </li>
          <li className="nav-item">
            Phác thảo <div className="underline"></div>
          </li>
          <li className="nav-item">
            Dụng cụ bổ trợ
            <div className="underline"></div>
          </li>
          <li className="nav-item">
            Văn phòng phẩm
            <div className="underline"></div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
