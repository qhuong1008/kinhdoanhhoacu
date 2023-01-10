import Header from "../../components/Header";
import Footer from "../../components/Footer";
import style from "./style.scss";
import $ from "jquery";
import { useEffect, useState } from "react";
import { SanPhamApi } from "../../api/index";
import ProductItem from "../../components/ProductItem";
import { PaginationControl } from "react-bootstrap-pagination-control";
import Loading from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductType,
} from "../../redux/actions/productsActions";
import { productsRemainingSelector } from "../../redux/selectors";
import { allProductTypeSelector } from "../../redux/selectors";

const HomePage = () => {
  const dispatch = useDispatch();

  let initialsanPhamList = useSelector(productsRemainingSelector);
  let sanPhamList = [];
  // let sanPhamList = useSelector(productsRemainingSelector);
  const allProductTypes = useSelector(allProductTypeSelector);
  const isLoading = useSelector((state) => state.allProducts.loading);

  let [checkedState, setCheckedState] = useState(
    Array(allProductTypes.length).fill(false)
  );

  const handleCheckbox = (currentIndex) => {
    let updateCheckState = checkedState.map((item, index) =>
      index === currentIndex ? !item : item
    );
    setCheckedState(updateCheckState);
  };

  // Handle Pagination
  // let currentSanPhamList = [];
  const [page, setPage] = useState(1);
  const ProductPerPage = 9;

  function setProductsByPagination() {
    const indexOfLastProduct = page * ProductPerPage;
    const indexOfFirstProduct = indexOfLastProduct - ProductPerPage;
    sanPhamList = initialsanPhamList.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
  }

  if (!isLoading) {
    setProductsByPagination();
  }

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllProductType());
  }, []);

  useEffect(() => {
    setProductsByPagination();
  }, [page]);
  return (
    <>
      <Header />
      <div className="homepage-container">
        <div className="aside">
          <div className="aside-item">
            <div className="aside-title">CATEGORIES</div>
            <div className="checkbox-filter">
              {allProductTypes.map((type, index) => {
                return (
                  <div
                    key={index}
                    className="checkbox-filter-item"
                    onClick={() => handleCheckbox(index)}
                  >
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={checkedState[index]}
                    />
                    {type.TenLoaiSanPham}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="aside-item">
            <div className="aside-title">TOP SELLING</div>
            <div className="product-widget">
              <div className="product-img">
                <img src="https://bucket.nhanh.vn/store/15668/ps/20210905/Canson_XL_dessin_noir.jpg" />
              </div>
              <div className="product-body">
                <div className="product-category">category</div>
                <div className="product-name">name</div>
                <div className="product-price">
                  440.000
                  <div className="product-old-price">500.000</div>
                </div>
              </div>
            </div>
            <div className="product-widget">
              <div className="product-img">
                <img src="https://bucket.nhanh.vn/store/15668/ps/20210905/Canson_XL_dessin_noir.jpg" />
              </div>
              <div className="product-body">
                <div className="product-category">category</div>
                <div className="product-name">name</div>
                <div className="product-price">
                  440.000
                  <div className="product-old-price">500.000</div>
                </div>
              </div>
            </div>
            <div className="product-widget">
              <div className="product-img">
                <img src="https://bucket.nhanh.vn/store/15668/ps/20210905/Canson_XL_dessin_noir.jpg" />
              </div>
              <div className="product-body">
                <div className="product-category">category</div>
                <div className="product-name">name</div>
                <div className="product-price">
                  440.000
                  <div className="product-old-price">500.000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="store">
          <div className="store-filter">
            Sắp xếp theo
            <select className="combobox-filter">
              <option>Phổ biến</option>
              <option>Mới nhất</option>
              <option>Bán chạy</option>
            </select>
          </div>
          <div className="store-product">
            {isLoading ? (
              <Loading />
            ) : (
              <div className="grid-3">
                {sanPhamList.map((sanpham, index) => {
                  return (
                    <ProductItem
                      name={sanpham.TenSP}
                      loaiSP={sanpham.TenLoaiSanPham}
                      gia={sanpham.Gia}
                      hinh={sanpham.Hinh}
                      key={index}
                      maSP={sanpham.MaSP}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* <Paginate
        ProductPerPage={ProductPerPage}
        tongSP={sanphamlist.length}
        paginate={paginate}
      /> */}
      <PaginationControl
        className="pagination"
        page={page}
        between={4}
        total={initialsanPhamList.length}
        limit={ProductPerPage}
        changePage={(page) => {
          setPage(page);
          console.log(page);
        }}
        ellipsis={1}
      />
      <Footer />
      {/* <Loading /> */}
    </>
  );
};
export default HomePage;
