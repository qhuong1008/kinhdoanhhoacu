import Header from "../../components/Header";
import Footer from "../../components/Footer";
import style from "./style.scss";
import $ from "jquery";
import { useEffect, useState } from "react";
import { SanPhamApi } from "../../api/index";
import ProductItem from "../../components/ProductItem";
import Loading from "../../components/Loading";
import Pagination from "@mui/material/Pagination";
import Paginate from "../../components/Paginate";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sanphamlist, setSanphamlist] = useState([]);
  const [currentSanPhamList, setCurrentSanPhamList] = useState([]);
  const [page, setPage] = useState(1);

  const ProductPerPage = 9;

  const paginate = (page) => {
    setIsLoading(true);
    setPage(page);
    loadAllSanPham();
  };
  const loadAllSanPham = () => {
    const indexOfLastProduct = page * ProductPerPage;
    const indexOfFirstProduct = indexOfLastProduct - ProductPerPage;
    SanPhamApi.getSanPham()
      .then((response) => {
        setSanphamlist(response.data);
        setCurrentSanPhamList(
          response.data.slice(indexOfFirstProduct, indexOfLastProduct)
        );
      })

      .then(() => setIsLoading(false))
      .catch((error) => {});
  };
  const handleCheckbox = () => {
    let isChecked = $(".checkbox").is(":checked");
    $(".checkbox").each(() => {
      if (isChecked == false) {
        $(".checkbox").prop("checked", true);
      } else {
        $(".checkbox").prop("checked", false);
      }
    });
  };
  useEffect(() => {
    loadAllSanPham();
  }, []);

  return (
    <>
      <Header />
      <div className="homepage-container">
        <div className="aside">
          <div className="aside-item">
            <div className="aside-title">CATEGORIES</div>
            <div className="checkbox-filter">
              <div className="checkbox-filter-item" onClick={handleCheckbox}>
                <input type="checkbox" className="checkbox" />
                Màu vẽ
              </div>
              <div className="checkbox-filter-item" onClick={handleCheckbox}>
                <input type="checkbox" className="checkbox" />
                Giấy vẽ
              </div>
              <div className="checkbox-filter-item" onClick={handleCheckbox}>
                <input type="checkbox" className="checkbox" />
                Bút vẽ
              </div>
              <div className="checkbox-filter-item" onClick={handleCheckbox}>
                <input type="checkbox" className="checkbox" />
                Phác thảo
              </div>
              <div className="checkbox-filter-item" onClick={handleCheckbox}>
                <input type="checkbox" className="checkbox" />
                Dụng cụ bổ trợ
              </div>
              <div className="checkbox-filter-item" onClick={handleCheckbox}>
                <input type="checkbox" className="checkbox" />
                Văn phòng phẩm
              </div>
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
                {currentSanPhamList.map((sanpham, index) => {
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

      <Paginate
        ProductPerPage={ProductPerPage}
        tongSP={sanphamlist.length}
        paginate={paginate}
      />
      <Footer />
      {/* <Loading /> */}
    </>
  );
};
export default HomePage;
