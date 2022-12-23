import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.css";

function Loading() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loading;
