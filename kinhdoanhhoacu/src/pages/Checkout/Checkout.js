import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BreadcrumbComponent from "../../components/BreadcrumbComponent";
import style from "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCart, DeleteFromCart } from "../../redux/actions/cartAction";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { CartApi } from "../../api/index";
import { ThanhToanHoaDon } from "../../redux/actions/hoadonAction";

function Checkout() {
  const dispatch = useDispatch();
  let cart = useSelector((state) => state.cart.cart);
  const isLoading = useSelector((state) => state.cart.loading);
  let user = localStorage.getItem("user");
  user = JSON.parse(user);

  const [hoten, setHoten] = useState("");
  const [email, setEmail] = useState("");
  const [sdt, setSdt] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [termCheck, setTermCheck] = useState(false);
  var tongtien = 0;
  let info = {};

  const handleThanhToan = () => {
    if (
      hoten == "" ||
      email == "" ||
      sdt == "" ||
      address == "" ||
      note == ""
    ) {
      alert("Vui lòng nhập đủ thông tin!");
    } else {
      info.maNguoiDung = user.MaNguoiDung;
      info.hoten = hoten;
      info.email = email;
      info.sdt = sdt;
      info.diachi = address;
      info.ghichu = note;
      console.log("info:", info);
      dispatch(ThanhToanHoaDon(info));
      alert("Thanh toán hóa đơn thành công!");
    }
  };

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div>
      <Header />
      <BreadcrumbComponent />
      <div className="checkout-container">
        <div className="row">
          <div className="col-6">
            <div className="billing-detail">
              <div className="title">Thông tin cá nhân</div>
              <div className="form-info">
                <input
                  placeholder="Nhập họ tên"
                  onChange={(e) => setHoten(e.target.value)}
                />
              </div>
              <div className="form-info">
                <input
                  placeholder="Nhập email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-info">
                <input
                  placeholder="Nhập số điện thoại"
                  onChange={(e) => setSdt(e.target.value)}
                />
              </div>
              <div className="form-info">
                <input
                  placeholder="Nhập ghi chú"
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            </div>
            <div className="shipping-detail">
              <div className="title">Địa chỉ giao hàng</div>
              <div className="form-info">
                <textarea
                  placeholder="Nhập địa chỉ"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="order-detail">
              <div className="title">Đơn hàng</div>
              <div className="row">
                <div className="order-info">
                  <div className="order-title">
                    <div className="order-product-title">sản phẩm</div>
                    <div className="order-price-title">giá tiền</div>
                  </div>
                  {isLoading ? (
                    <Loading />
                  ) : (
                    cart.map((cartItem) => {
                      tongtien += cartItem.TongPhu;
                      return (
                        <div className="order-product">
                          <div className="product-name">
                            {cartItem.SoLuong}x {cartItem.TenSP}
                          </div>
                          <div className="product-price">
                            {cartItem.TongPhu}
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
                <div className="total-info">
                  <div className="total-title">total</div>
                  <div className="total-price">{tongtien}</div>
                </div>
                <div className="term-check">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={termCheck}
                    onChange={() => setTermCheck(!termCheck)}
                  ></input>
                  <div className="term-description">
                    Tôi đã đọc và chấp nhận các điều khoản và điều kiện
                  </div>
                </div>
                <div className="checkout-btn" onClick={handleThanhToan}>
                  Thanh toán
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
