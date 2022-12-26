import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BreadcrumbComponent from "../../components/BreadcrumbComponent";
import style from "./style.scss";
function Cart() {
  return (
    <>
      <Header />
      <BreadcrumbComponent />
      <div className="cart-container">
        <table className="table table-bordered verticle-middle">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Tên Sản Phẩm</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Giá tiền</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://bucket.nhanh.vn/store/15668/ps/20211124/tui_cheo_ban_to_4.jpg"
                  alt=""
                />
              </td>
              <td>$</td>
              <td>$</td>
              <td>$</td>
              <td>
                <span>
                  <a
                    href=""
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Delete"
                  >
                    Delete
                    <i class="fa fa-close color-danger"></i>
                  </a>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="thanhtoan-btn">Thanh toán</div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
