import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Orders from "./pages/Orders/Orders";
import MyAccount from "./pages/MyAccount/MyAccount";
import ChangePassword from "./pages/MyAccount/ChangePassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />}></Route>
          <Route path="/homepage" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/product/:productId" element={<Product />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/myaccount" element={<MyAccount />}></Route>
          <Route path="/changepassword" element={<ChangePassword />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
