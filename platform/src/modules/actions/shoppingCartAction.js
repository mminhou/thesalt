export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART"
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART"
export const CATEGORIES_IS_LOADING = "CATEGORIES_IS_LOADING"
export const CATEGORIES_FETCH_DATA_SUCCESS = "CATEGORIES_FETCH_DATA_SUCCESS"

export const addProductToCart = product => {
  return {
    type: ADD_PRODUCT_TO_CART,
    product
  };
};

export const removeProductFromCart = index => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    index
  };
};

export const categoriesIsLoading = bool => {
  return {
    type: CATEGORIES_IS_LOADING,
    isLoading: bool
  };
};

export const categoriesFetchDataSuccess = categories => {
  return {
    type: CATEGORIES_FETCH_DATA_SUCCESS,
    categories
  };
};

export const fetchCategories = url => {
  return fetch(url)
    .then(response => response)
    .then(response => response.json());
};

export const categoriesFetchData = url => {
  return async dispatch => {
    dispatch(categoriesIsLoading(true));
    const categories = await fetchCategories(url);
    dispatch(categoriesFetchDataSuccess(categories));
    dispatch(categoriesIsLoading(false));
  };
};
