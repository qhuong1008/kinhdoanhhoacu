import style from "./style.scss";
import { useState } from "react";
import { addNguoiDung } from "../../redux/actions/accountAction";
import { useDispatch } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");

  let user = {};
  const handleSubmit = (e) => {
    if (
      username == "" ||
      password == "" ||
      retypePassword == "" ||
      name == "" ||
      address == "" ||
      date == ""
    ) {
      alert("Vui lòng điền đủ thông tin!");
    } else {
      if (password != retypePassword) {
        alert("Mật khẩu nhập lại không khớp!");
      }
    }
    e.preventDefault();
    user.tendangnhap = username;
    user.matkhau = password;
    user.hoten = name;
    user.ngaysinh = date;
    user.diachi = address;
    user.hinh = "";

    dispatch(addNguoiDung(user)).catch((err) => console.log(err));

    setUsername("");
    setPassword("");
    setRetypePassword("");
    setAddress("");
    setDate("");
    setName();
    console.log(user);
    alert("Đăng kí tài khoản thành công!");
    window.location.href = "http://localhost:3000/login";
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <div className="signup-form">
          <div className="signup-header">Sign Up</div>
          <div className="signup-content">
            <div className="form-input">
              <label>username</label>
              <input
                type="text"
                required="required"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>password</label>
              <input
                type="password"
                required="required"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>Nhập lại password</label>
              <input
                type="password"
                required="required"
                value={retypePassword}
                onChange={(e) => setRetypePassword(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>Họ tên</label>
              <input
                type="text"
                required="required"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>Địa chỉ</label>
              <input
                type="text"
                required="required"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>Ngày sinh</label>
              <input
                type="date"
                required="required"
                value={date}
                onChange={(e) => setDate(e.target.value)}
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
            <button type="submit" className="signup-btn">
              Sign up
            </button>
            <div className="notmember">
              Already a member? <a href="/login">Sign in</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Signup;
