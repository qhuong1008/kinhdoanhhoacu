import style from "./style.scss";
import GlobalStyle from "../GlobalStyle.scss";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faPhone,
  faEnvelope,
  faLocationDot,
  faDollarSign,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-red"></div>
      <div className="footer">
        <div class="row">
          <div className="col">
            <div className="footer-title">about us</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
            <ul className="footer-links">
              <li>
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
                <a>1 Vo Van Ngan</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <a>+454-54-54-54</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <a>quanlihoacu@email.com</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <div className="footer-title">categories</div>
            <ul className="footer-links">
              <li>
                <a>MÀU VẼ</a>
              </li>
              <li>
                <a>GIẤY VẼ</a>
              </li>
              <li>
                <a>BÚT VẼ</a>
              </li>
              <li>
                <a>PHÁC THẢO</a>
              </li>
              <li>
                <a>DỤNG CỤ BỔ TRỢ</a>
              </li>
              <li>
                <a>VĂN PHÒNG PHẨM</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <div className="footer-title">information</div>
            <ul className="footer-links">
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Orders and Returns</a>
              </li>
              <li>
                <a>Terms and Conditions</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <div className="footer-title">service</div>
            <ul className="footer-links">
              <li>
                <a>My Sccount</a>
              </li>
              <li>
                <a>View Cart</a>
              </li>
              <li>
                <a>Wishlist</a>
              </li>
              <li>
                <a>Track My Order</a>
              </li>
              <li>
                <a>Help</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
