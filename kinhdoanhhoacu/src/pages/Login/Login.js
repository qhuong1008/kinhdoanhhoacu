import style from "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { axiosInstance } from "../../api/types/axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const dispatch = useDispatch(null);
  const axiosJWT = axios.create();

  const refreshToken = async () => {
    try {
      const res = await axios.post("/api/nguoidung/refresh", {
        token: user.refreshToken,
      });
      setUser({
        ...user,
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
      });
      localStorage.setItem("user", JSON.stringify(user));
    } catch (err) {
      console.log(err);
    }
  };

  axiosJWT.interceptors.request.use(
    async (config) => {
      let currentDate = new Date();
      const decodedToken = jwt_decode(user.accessToken);
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const data = await refreshToken();
        config.headers["authorization"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username == "" || password == "") {
      alert("Vui lòng nhập đủ thông tinn!");
    } else {
      let loginInfo = {
        username: username,
        password: password,
      };
      try {
        const res = await axiosInstance.post("/api/nguoidung/login", loginInfo);

        // setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.href = "http://localhost:3000/homepage";
        // console.log(user);
        // setTimeout(() => {
        //   console.log("5s");
        // }, 5000);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
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
            <button type="submit" className="login-btn">
              Login
            </button>
            <div className="notmember">
              Not a member? <a href="/signup">Sign up</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
