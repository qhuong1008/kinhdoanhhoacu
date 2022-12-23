import Breadcrumb from "react-bootstrap/Breadcrumb";

import style from "./style.scss";
function BreadcrumbComponent() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Trang chủ</Breadcrumb.Item>
      <div>/</div>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Sản phẩm
      </Breadcrumb.Item>

      <div>/</div>
      <Breadcrumb.Item active>Tên sản phẩm</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbComponent;
