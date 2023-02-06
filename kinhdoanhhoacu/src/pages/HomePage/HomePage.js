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
  getListTypeCheckBox,
  updateProductTypeCheckBox,
  TypeListFilterChange,
} from "../../redux/actions/productsActions";
import { productsRemainingSelector } from "../../redux/selectors";
import {
  allProductTypeSelector,
  filterTypeListIndexSelector,
  userSelector,
} from "../../redux/selectors";

const HomePage = () => {
  const filterTypeListIndex = useSelector(filterTypeListIndexSelector);
  const dispatch = useDispatch();
  const nguoidung = useSelector(userSelector);
  console.log(nguoidung);
  let zinitialsanPhamList = useSelector(productsRemainingSelector);
  let initialsanPhamList = zinitialsanPhamList.filter((sp) => {
    return sp.DaXoa === false;
  });
  let sanPhamList = [];
  const zallProductTypes = useSelector(allProductTypeSelector);
  let allProductTypes = zallProductTypes.filter((type) => {
    return type.DaXoa === false;
  });
  const isLoading = useSelector((state) => state.allProducts.loading);
  const [index, setIndex] = useState(-1);
  let filterTypeList = [];
  const [lspList, setLspList] = useState([]);
  const handleCheckbox = (e) => {
    // filterTypeList[currentIndex] = !filterTypeList[currentIndex];
    let value = e.target.value;
    if (e.target.checked) {
      setLspList([...lspList, e.target.value]);
    } else {
      setLspList(lspList.filter((e) => e !== value));
    }
    dispatch(TypeListFilterChange(lspList));
    console.log(lspList);
  };

  // Handle Pagination
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
  function getFilterTypeList() {
    for (let i = 0; i < allProductTypes.length; i++) {
      filterTypeList.push(false);
    }
  }

  if (!isLoading) {
    setProductsByPagination();
    getFilterTypeList();
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
                  <div key={index} className="checkbox-filter-item">
                    <input
                      type="checkbox"
                      className="checkbox"
                      value={type.MaLoaiSP}
                      // checked={filterTypeList[index]}
                      onChange={(e) => handleCheckbox(e)}
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
