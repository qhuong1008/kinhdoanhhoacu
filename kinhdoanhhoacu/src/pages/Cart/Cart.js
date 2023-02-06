import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BreadcrumbComponent from "../../components/BreadcrumbComponent";
import style from "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCart, DeleteFromCart } from "../../redux/actions/cartAction";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { CartApi } from "../../api/index";
import { Link } from "react-router-dom";
import emptycart from "../../assets/img/empty_cart.png";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const dispatch = useDispatch();
  let cart = useSelector((state) => state.cart.cart);

  let isLoading = useSelector((state) => state.cart.loading);
  let user = localStorage.getItem("user");
  user = JSON.parse(user);

  let cartItem = {
    maNguoiDung: "",
    maSP: "",
  };
  const [count, setCount] = useState(1);

  const handleDeleteFromCart = (MaSP) => {
    cartItem.maNguoiDung = user.MaNguoiDung;
    cartItem.maSP = MaSP;

    var message = "Xoá sản phẩm " + cartItem.maSP + " khỏi giỏ hàng?";
    if (window.confirm(message) == true) {
      dispatch(DeleteFromCart(cartItem));
      setCount((count) => count + 1);
    }
  };
  useEffect(() => {
    dispatch(getCart());
  }, []);
  useEffect(() => {
    dispatch(getCart());
  }, [count]);
  let a = "string";
  if (typeof cart === typeof a) {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <BreadcrumbComponent />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="cart-container">
          {cart.length == 0 ? (
            <div className="emptycart-container">
              <img className="emptycart" src={emptycart} />
              <label for="">
                Không có sản phẩm nào trong giỏ hàng của bạn!
              </label>
              <Link to="/homepage">
                <div className="continue-btn">Tiếp tục mua sắm</div>
              </Link>
            </div>
          ) : (
            <>
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
                              onClick={() =>
                                handleDeleteFromCart(cartItem.MaSP)
                              }
                              className="trash-btn"
                            >
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="icon"
                              />
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
            </>
          )}
        </div>
      )}
      <Footer />
    </>
  );
}

export default Cart;
