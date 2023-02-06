import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.css";
import style from "./style.scss";
import { containerClasses } from "@mui/system";

function Loading() {
  return (
    <div className="spinner-container">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;
