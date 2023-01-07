import style from "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAllNguoiDung,
  getNguoiDungById,
} from "../../redux/actions/signinAction";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const nguoidungList = useSelector(
    (state) => state.allNguoiDung.nguoidungList
  );
  let nguoidung = useSelector((state) => state.nguoidung.nguoidung);
  localStorage.setItem("user", JSON.stringify(nguoidung));

  const handleLogin = () => {
    if (username == "" || password == "") {
      alert("Vui lòng nhập đủ thông tin!");
    } else {
      let user = nguoidungList.find((userItem) => {
        if (userItem.TenDangNhap == username && userItem.MatKhau == password) {
          dispatch(getNguoiDungById(userItem.MaNguoiDung));

          return userItem;
        }
      });
      if (user == undefined) {
        alert("User not exist!");
      } else {
        window.location.href = `/homepage`;
      }
    }
  };
  useEffect(() => {
    dispatch(getAllNguoiDung());
  }, []);
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-header">LOGIN</div>
        <div className="login-content">
          <div className="form-input">
            <label>username</label>
            <input
              type="text"
              required="required"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label>password</label>
            <input
              type="password"
              required="required"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <div className="form-remember">
              <input type="checkbox" />
              <div>Remember me</div>
            </div>
            <div className="form-forgot">
              <a href="/forgot">Forgot password?</a>
            </div>
          </div>
          <div className="login-btn" onClick={handleLogin}>
            Login
          </div>
          <div className="notmember">
            Not a member? <a href="/signup">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
