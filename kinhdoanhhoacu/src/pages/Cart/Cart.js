import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BreadcrumbComponent from "../../components/BreadcrumbComponent";
import style from "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCart, DeleteFromCart } from "../../redux/actions/cartAction";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { CartApi } from "../../api/index";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  let cart = useSelector((state) => state.cart.cart);
  const isLoading = useSelector((state) => state.cart.loading);
  let user = localStorage.getItem("user");
  user = JSON.parse(user);

  const handleDeleteFromCart = (MaSP) => {
    let cartItem = {
      maNguoiDung: "",
      maSP: "",
    };
    cartItem.maNguoiDung = user.MaNguoiDung;
    cartItem.maSP = MaSP;

    var message = "Xoá sản phẩm " + cartItem.maSP + " khỏi giỏ hàng?";
    if (window.confirm(message) == true) {
      CartApi.DeleteFromCart(cartItem);
      alert("Xóa thành công!");
    }
  };

  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <>
      <Header />
      <BreadcrumbComponent />
      {isLoading ? (
        <Loading />
      ) : (
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
              {cart.map((cartItem) => {
                return (
                  <tr key={cartItem.MaSP}>
                    <td>
                      <img src={cartItem.Hinh} alt="" />
                    </td>
                    <td>{cartItem.TenSP}</td>
                    <td>{cartItem.SoLuong}</td>
                    <td>{cartItem.TongPhu}</td>
                    <td>
                      <span>
                        <button
                          href=""
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Delete"
                          onClick={() => handleDeleteFromCart(cartItem.MaSP)}
                        >
                          Delete
                          <i class="fa fa-close color-danger"></i>
                        </button>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Link to="/checkout">
            <div className="thanhtoan-btn">Thanh toán</div>
          </Link>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Cart;
