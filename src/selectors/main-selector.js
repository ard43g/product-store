import { createSelector } from "reselect";

export const initApp = (state) => {
    return state.main.initialized;
};

export const appError = (state) => {
    return state.main.errorApp;
};

export const errorService = (state) => {
    return state.main.serviceError;
};

export const errorMessageService = (state) => {
    return state.main.serviceErrorMessage;
};

export const isLoading = (state) => {
    return state.main.loading;
};

const getProductsItems = (state) => {
    return state.main.products;
};

export const getProducts = createSelector(getProductsItems, (products) => {
    return products;
});

const getListCategories = (state) => {
    return state.main.categoriesList;
};

export const getCategoriesList = createSelector(getListCategories, (list) => {
    return list;
});

export const getActiveCategories = (state) => {
    return state.main.activeCategories;
};

export const getTotalPrice = (state) => {
    return state.main.totalPrice;
};

export const getProductInCart = (state) => {
    return state.main.productInCart;
};
export const isShowModal = (state) => {
    return state.main.showModal;
};
export const needClearForm = (state) => {
    return state.main.clearForm;
};
