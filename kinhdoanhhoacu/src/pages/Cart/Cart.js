import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BreadcrumbComponent from "../../components/BreadcrumbComponent";
import style from "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../redux/actions/cartAction";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isLoading = useSelector((state) => state.cart.loading);

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
                  <tr>
                    <td>
                      <img src={cartItem.Hinh} alt="" />
                    </td>
                    <td>{cartItem.TenSP}</td>
                    <td>{cartItem.SoLuong}</td>
                    <td>{cartItem.TongPhu}</td>
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
                );
              })}
            </tbody>
          </table>
          <div className="thanhtoan-btn">Thanh toán</div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Cart;
