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
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allProductTypeSelector } from "../redux/selectors";
import {
  getAllProductType,
  ProductTypeFilterChange,
  SearchFilterChange,
} from "../redux/actions/productsActions";

function Header() {
  const dispatch = useDispatch();
  const zallProductTypes = useSelector(allProductTypeSelector);
  const isLoading = useSelector((state) => state.allProducts.loading);

  let allProductTypes = zallProductTypes.filter((type) => {
    return type.DaXoa === false;
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
  };

  let option = "Login";
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  if (user !== null) {
    option = "Logout";
  }

  const handleLogin = (link) => {
    if (user !== null) {
      window.location.href = link;
    } else {
      window.location.href = "/login";
    }
  };

  const handleFilterProducts = (maLsp) => {
    dispatch(ProductTypeFilterChange(maLsp));
  };
  const [searchVal, setSearchVal] = useState("");
  const handleSearch = (searchValue) => {
    dispatch(SearchFilterChange(searchValue));
    setSearchVal(searchValue);
  };
  useEffect(() => {
    dispatch(getAllProductType());
  }, []);

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

          <div
            className="top-header-item"
            onClick={() => handleLogin("/myaccount")}
          >
            <FontAwesomeIcon icon={faUser} className="icon" />
            My Accounts
          </div>
          <Link to="/login" onClick={handleLogout}>
            <div className="top-header-item">
              <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
              {option}
            </div>
          </Link>
        </div>
      </div>
      <div className="header">
        <a href="/" className="logo">
          <img src={logo} />
        </a>
        <div className="search-container">
          <input
            type="text"
            name=""
            placeholder="Search here..."
            onChange={(e) => handleSearch(e.target.value)}
          />
          <div className="search-btn">Search</div>
        </div>
        <div className="header-menu">
          <div className="header-menu-item">
            <FontAwesomeIcon icon={faHeart} className="icon" />
            <div className="amount">2</div>
            Wishlist
          </div>

          <div className="header-menu-item">
            <FontAwesomeIcon
              icon={faCartShopping}
              onClick={() => handleLogin("/cart")}
              className="icon"
            />
            <div className="amount">2</div>
            Giỏ hàng
          </div>

          <div className="header-menu-item">
            <FontAwesomeIcon
              icon={faBox}
              className="icon"
              onClick={() => handleLogin("/orders")}
            />
            <div className="amount">2</div>
            Đơn hàng
          </div>
        </div>
      </div>
      <div className="header-red"></div>
      <div className="navigation">
        <ul className="nav-list">
          {allProductTypes.map((type) => {
            return (
              <Link to="/homepage">
                <li
                  className="nav-item"
                  onClick={() => handleFilterProducts(type.MaLoaiSP)}
                >
                  {type.TenLoaiSanPham} <div className="underline"></div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Header;
