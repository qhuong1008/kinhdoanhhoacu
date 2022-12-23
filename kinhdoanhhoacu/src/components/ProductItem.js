function ProductItem(props) {
  return (
    <div className="product">
      <div className="product-img">
        {/* <img src="https://bucket.nhanh.vn/store/15668/ps/20210520/2008202150855_but_tay_mono_2.jpg" /> */}
        <img src={props.hinh} />
      </div>
      <div className="product-body">
        <div className="product-category">Màu vẽ</div>
        <a href={`/product/${props.maSP}`} className="product-name">
          {props.name}
        </a>
        <div className="product-price">{props.gia}</div>
      </div>
    </div>
  );
}

export default ProductItem;
