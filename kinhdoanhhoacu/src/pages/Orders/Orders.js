import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AccountSideBar from "../../components/AccountSideBar";
import style from "./style.scss";
import $ from "jquery";
import { useEffect, useState } from "react";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faTwitter,
} from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
  return (
    <>
      <Header />
      <div className="orderpage-container">
        <AccountSideBar />
        <div className="order-content">
          <h5>Đơn hàng của tôi</h5>
          <ul className="order-filter-list">
            <li className="order-filter-item choosen">Tất cả</li>
            <li className="order-filter-item">Chờ thanh toán</li>
            <li className="order-filter-item">Đang xử lí</li>
            <li className="order-filter-item">Đang vận chuyển</li>
            <li className="order-filter-item">Đã giao</li>
            <li className="order-filter-item">Đã hủy</li>
          </ul>
          <div className="order-filter-input">
            <input placeholder="Tìm đơn hàng theo mã đơn hàng hoặc tên sản phẩm" />
          </div>
          <div className="order-list">
            <div className="order-item">
              <div className="order-product-img">
                <img src="https://bucket.nhanh.vn/store/15668/ps/20211124/tui_cheo_ban_to_4.jpg" />
              </div>
              <div className="order-product-title">
                <div>Túi đeo chéo bản to màu đen</div>
                <div className="order-product-type">
                  Phân loại hàng: dụng cụ
                </div>
              </div>
            </div>
            <div className="ruler"></div>
            <div className="order-item">
              <div className="order-product-img">
                <img src="https://bucket.nhanh.vn/store/15668/ps/20211124/tui_cheo_ban_to_4.jpg" />
              </div>
              <div className="order-product-title">
                <div>Túi đeo chéo bản to màu đen</div>
                <div className="order-product-type">
                  Phân loại hàng: dụng cụ
                </div>
              </div>
            </div>
            <div className="ruler"></div>
            <div className="order-item">
              <div className="order-product-img">
                <img src="https://bucket.nhanh.vn/store/15668/ps/20211124/tui_cheo_ban_to_4.jpg" />
              </div>
              <div className="order-product-title">
                <div>Túi đeo chéo bản to màu đen</div>
                <div className="order-product-type">
                  Phân loại hàng: dụng cụ
                </div>
              </div>
            </div>
            <div className="ruler"></div>
            <div className="order-item">
              <div className="order-product-img">
                <img src="https://bucket.nhanh.vn/store/15668/ps/20211124/tui_cheo_ban_to_4.jpg" />
              </div>
              <div className="order-product-title">
                <div>Túi đeo chéo bản to màu đen</div>
                <div className="order-product-type">
                  Phân loại hàng: dụng cụ
                </div>
              </div>
            </div>
            <div className="ruler"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Orders;
