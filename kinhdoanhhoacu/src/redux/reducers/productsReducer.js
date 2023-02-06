import {
  GET_ALL_PRODUCTS_BEGIN,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  GET_ALL_PRODUCT_TYPE_BEGIN,
  GET_ALL_PRODUCT_TYPE_SUCCESS,
  GET_ALL_PRODUCT_TYPE_FAIL,
  GET_PRODUCT_BEGIN,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  FILTER_PRODUCT_TYPE,
  FILTER_LIST_PRODUCT_TYPE,
  FILTER_LIST_PRODUCT_TYPE_CHANGE,
  SEARCH_FILTER,
} from "../actions/productsActions";

const intialState = {
  products: [],
  productTypes: [],
  product: {},
  productFilter: "",
  listTypeFilter: [],
  searchFilter: "",
  loading: false,
  error: null,
};

export const productsReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case GET_ALL_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case GET_ALL_PRODUCT_TYPE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PRODUCT_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        productTypes: action.payload,
      };
    case GET_ALL_PRODUCT_TYPE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case FILTER_PRODUCT_TYPE:
      return {
        ...state,
        productFilter: action.payload,
      };
    case FILTER_LIST_PRODUCT_TYPE:
      return {
        ...state,
        listTypeFilter: action.payload,
      };
    case FILTER_LIST_PRODUCT_TYPE_CHANGE:
      return {
        ...state,
        listTypeFilter: action.payload,
      };
    case SEARCH_FILTER:
      return {
        ...state,
        searchFilter: action.payload,
      };
    default:
      return state;
  }
};

export const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case GET_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
