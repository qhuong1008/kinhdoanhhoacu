import { createSelector } from "reselect";
export const allProductsSelector = (state) => state.allProducts.products;
export const productFilterSelector = (state) => state.allProducts.productFilter;
export const allProductTypeSelector = (state) => state.allProducts.productTypes;

export const productsRemainingSelector = createSelector(
  allProductsSelector,
  productFilterSelector,
  (productList, typeFilter) => {
    return productList.filter((product) => {
      if (typeFilter == "") {
        return product;
      } else {
        return product.MaLoaiSP === typeFilter;
      }
    });
  }
);
