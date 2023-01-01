import style from "./style.scss";
const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="signup-header">Sign Up</div>
        <div className="signup-content">
          <div className="form-input">
            <label>username</label>
            <input type="text" required="required" />
          </div>
          <div className="form-input">
            <label>password</label>
            <input type="password" required="required" />
          </div>
          <div className="form-input">
            <label>Nhập lại password</label>
            <input type="password" required="required" />
          </div>
          <div className="form-input">
            <label>Họ tên</label>
            <input type="text" required="required" />
          </div>
          <div className="form-input">
            <label>Địa chỉ</label>
            <input type="text" required="required" />
          </div>
          <div className="form-input">
            <label>Ngày sinh</label>
            <input type="date" required="required" />
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
          <div className="signup-btn">Login</div>
          <div className="notmember">
            Already a member? <a href="/login">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
