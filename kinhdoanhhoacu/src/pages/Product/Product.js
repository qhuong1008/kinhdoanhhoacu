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

function Product() {
  const params = useParams();
  console.log(params);
  const [isLoading, setIsLoading] = useState(true);
  const [sanpham, setSanpham] = useState({});
  const loadSanPham = () => {
    SanPhamApi.getSanPhamById(params.productId)
      .then((response) => {
        console.log(response.data);
        setSanpham(response.data[0]);
      })
      .then(() => setIsLoading(false))
      .catch((err) => {});
  };
  useEffect(() => {
    loadSanPham();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <BreadcrumbComponent />
      <div className="product-container">
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
                <button className="quantity-btn">-</button>
                <input type="text" />
                <button className="quantity-btn">+</button>
              </div>
              <button className="add-to-cart-btn">
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
      </div>
      <Footer />
    </>
  );
}

export default Product;
