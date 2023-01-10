import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AccountSideBar from "../../components/AccountSideBar";
import Loading from "../../components/Loading";
import style from "./style.scss";
import $ from "jquery";
import { useEffect, useState } from "react";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllHoaDon,
  getAllProductsFromHoaDon,
} from "../../redux/actions/hoadonAction";
import { HoaDonApi } from "../../api/index";

const Orders = () => {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.hoadon.loading);
  let donhanglist = useSelector((state) => state.hoadon.donhanglist);

  let hoadonlist = [];
  // lọc ra đơn hàng có cùng mã hóa đơn
  const LocDonHang = () => {
    donhanglist.forEach((donhang) => {
      let array = donhanglist.filter(
        (item) => item.MaHoaDon === donhang.MaHoaDon
      );
      hoadonlist.push(array);
    });

    let arrayIndex = [];
    hoadonlist.forEach((hoadon, index) => {
      arrayIndex[index] = hoadon[0].MaHoaDon;
    });

    arrayIndex = [...new Set(arrayIndex)];
    let newhoadonlist = [];
    arrayIndex.forEach((mahoadon) => {
      let array = hoadonlist.filter((hoadon) => mahoadon == hoadon[0].MaHoaDon);
      newhoadonlist.push(array);
    });
    hoadonlist = newhoadonlist;
    donhanglist = [];
    hoadonlist.forEach((hoadonArray) => {
      donhanglist.push(hoadonArray[0]);
    });
  };

  LocDonHang();

  useEffect(() => {
    dispatch(getAllProductsFromHoaDon(user.MaNguoiDung));
  }, []);

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

          {donhanglist.map((donhang) => {
            console.log(donhang);
            return [
              <div className="order-list">
                <div className="order-product-status">
                  <FontAwesomeIcon icon={faShippingFast} className="icon" />
                  <label>Giao hàng thành công</label>
                </div>
                <div className="ruler"></div>
                <div className="order-item">
                  {donhang.map((sanpham) => {
                    return (
                      <>
                        <div className="order-product">
                          <div className="order-product-info">
                            <div className="order-product-img">
                              <img src={sanpham.Hinh} />
                            </div>
                            <div className="order-product-title">
                              <div className="order-product-name">
                                {sanpham.TenSP}
                              </div>
                              <div className="order-product-type">
                                {sanpham.TenLoaiSP}
                              </div>
                            </div>
                          </div>
                          <div className="order-product-price">
                            {sanpham.TongPhu} ₫
                          </div>
                        </div>
                        <div className="ruler"></div>
                      </>
                    );
                  })}
                </div>

                <div className="order-product-total">
                  Tổng tiền:
                  <label>{donhang[0].TongThanhToan} ₫</label>
                </div>

                <div className="order-button-options">
                  <Button children="Mua lại"></Button>
                  <Button children="Liên hệ người bán"></Button>
                  <Button children="Xem đánh giá shop"></Button>
                </div>
              </div>,
            ];
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Orders;
