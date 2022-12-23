import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.css";
import style from "./style.scss";

function Loading() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loading;
