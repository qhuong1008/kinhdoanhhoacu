import style from "./style.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BreadcrumbComponent from "../../components/BreadcrumbComponent";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faTwitter,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SanPhamApi } from "../../api";
import Loading from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/actions/productsActions";
import { AddToCart } from "../../redux/actions/cartAction";

function Product() {
  const params = useParams();
  const dispatch = useDispatch();

  const sanpham = useSelector((state) => state.product.product);
  console.log("sanpham:", sanpham);
  const isLoading = useSelector((state) => state.product.loading);

  const [soLuong, setSoLuong] = useState(1);

  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  let cart = {
    maNguoiDung: "",
    maSP: "",
    soLuong: 1,
  };
  cart.maNguoiDung = user.MaNguoiDung;
  cart.maSP = sanpham.MaSP;
  cart.soLuong = soLuong;

  const handleAddToCart = () => {
    var message = "Thêm sản phẩm " + sanpham.MaSP + " vào giỏ hàng?";
    if (window.confirm(message) == true) {
      dispatch(AddToCart(cart));
      alert("Thêm vào giỏ thành công!");
    }
  };
  const handleDecrease = () => {
    if (soLuong > 1) {
      setSoLuong(soLuong - 1);
    }
  };
  const handleIncrease = () => {
    setSoLuong(soLuong + 1);
  };
  useEffect(() => {
    dispatch(getProductById(params.productId));
  }, []);

  return (
    <>
      <Header />
      <BreadcrumbComponent />
      <div className="product-container">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="row">
            <div className="col product-img">
              <img src={sanpham.Hinh} />
            </div>
            <div className="col product-info">
              <div className="product-name">{sanpham.TenSP}</div>
              <div className="product-price">
                {sanpham.Gia}
                <div className="product-old-price">500.000</div>
              </div>
              <div className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </div>
              <div className="product-quantity-container">
                Số lượng:
                <div className="product-quantity">
                  <button className="quantity-btn" onClick={handleDecrease}>
                    -
                  </button>
                  <input
                    type="text"
                    value={soLuong}
                    onChange={(e) => setSoLuong(e.target.value)}
                  />
                  <button className="quantity-btn" onClick={handleIncrease}>
                    +
                  </button>
                </div>
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                  <FontAwesomeIcon icon={faCartShopping} className="icon" />
                  Thêm vào giỏ
                </button>
              </div>

              <div className="wishlist">
                <FontAwesomeIcon icon={faHeart} className="icon" />
                Thêm vào Wishlist
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Product;
