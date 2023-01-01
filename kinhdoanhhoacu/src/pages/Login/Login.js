import style from "./style.scss";
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-header">LOGIN</div>
        <div className="login-content">
          <div className="form-input">
            <label>username</label>
            <input type="text" required="required" />
          </div>
          <div className="form-input">
            <label>password</label>
            <input type="password" required="required" />
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
          <div className="login-btn">Login</div>
          <div className="notmember">
            Not a member? <a href="/signup">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
