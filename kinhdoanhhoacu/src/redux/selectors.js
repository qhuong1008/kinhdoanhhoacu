import { createSelector } from "reselect";
export const allProductsSelector = (state) => state.allProducts.products;
export const productFilterSelector = (state) => state.allProducts.productFilter;
export const allProductTypeSelector = (state) => state.allProducts.productTypes;
export const searchFilterSelector = (state) => state.allProducts.searchFilter;
export const filterTypeListIndexSelector = (state) =>
  state.allProducts.listTypeFilter;
export const userSelector = (state) => state.nguoidung.nguoidung;

export const productsRemainingSelector = createSelector(
  allProductsSelector,
  productFilterSelector,
  searchFilterSelector,
  filterTypeListIndexSelector,
  (productList, typeFilter, searchFilter, filterTypeList) => {
    return productList.filter((product) => {
      if (typeFilter == "") {
        return (
          product &&
          product.TenSP.toLowerCase().includes(searchFilter.toLowerCase()) &&
          filterTypeList
            .map((type) => product.MaLoaiSP.includes(type))
            .every((u) => u == true)
        );
      } else {
        return (
          product.MaLoaiSP === typeFilter &&
          product.TenSP.toLowerCase().includes(searchFilter.toLowerCase())
          // &&
          // filterTypeList.forEach((type) => {
          //   product.MaLoaiSP.includes(type);
          // })
        );
      }
    });
  }
);
