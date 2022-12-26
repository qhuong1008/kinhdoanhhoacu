import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BreadcrumbComponent from "../../components/BreadcrumbComponent";
import style from "./style.scss";

function Checkout() {
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
                <input placeholder="Nhập họ tên" />
              </div>
              <div className="form-info">
                <input placeholder="Nhập email" />
              </div>
              <div className="form-info">
                <input placeholder="Nhập địa chỉ" />
              </div>
              <div className="form-info">
                <input placeholder="Nhập số điện thoại" />
              </div>
            </div>
            <div className="shipping-detail">
              <div className="title">Địa chỉ giao hàng</div>
              <div className="form-info">
                <textarea placeholder="Nhập địa chỉ" />
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
                  <div className="order-product">
                    <div className="product-name">
                      1x PHẤN TIÊN MASTER PASTEL MARIE'S
                    </div>
                    <div className="product-price">78000</div>
                  </div>
                  <div className="order-product">
                    <div className="product-name">
                      1x PHẤN TIÊN MASTER PASTEL MARIE'S
                    </div>
                    <div className="product-price">78000</div>
                  </div>
                  <div className="order-product">
                    <div className="product-name">
                      1x PHẤN TIÊN MASTER PASTEL MARIE'S
                    </div>
                    <div className="product-price">78000</div>
                  </div>
                </div>
                <div className="total-info">
                  <div className="total-title">total</div>
                  <div className="total-price">90000</div>
                </div>
                <div className="term-check">
                  <input type="checkbox" className="checkbox"></input>
                  <div className="term-description">
                    Tôi đã đọc và chấp nhận các điều khoản và điều kiện
                  </div>
                </div>
                <div className="checkout-btn">Thanh toán</div>
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
