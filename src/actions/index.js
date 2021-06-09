import ProductService from "../services/product-service";

const INITIALIZED_APP = "INITIALIZED_APP";
const PRODUCTS_LOADED = "PRODUCTS_LOADED";
const LOADING = "LOADING";
const APP_ERROR = "APP_ERROR";
const SERVICE_ERROR = "SERVICE_ERROR";
const CLOSE_ERROR = "CLOSE_ERROR";
const SET_CATEGORIES_LIST = "SET_CATEGORIES_LIST";
const SET_ACTIVE_CATEGORIES = "SET_ACTIVE_CATEGORIES";
const PRODUCT_ADD_TO_CART = "PRODUCT_ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const PRODUCT_CART_PLUS = "PRODUCT_CART_PLUS";
const PRODUCT_CART_MINUS = "PRODUCT_CART_MINUS";
const NEW_ORDER = "NEW_ORDER";
const SHOW_MODAL = "SHOW_MODAL";
const CLEAR__CART = "CLEAR__CART";
const CLEAR__FORM__ORDER = "CLEAR__FORM__ORDER";

export const initializedApp = () => {
    return {
        type: INITIALIZED_APP,
    };
};

export const loading = (loading) => {
    return {
        type: LOADING,
        loading,
    };
};

export const productsLoaded = (resultData) => {
    return {
        type: PRODUCTS_LOADED,
        payload: resultData,
    };
};

export const serviceError = (status, statusText) => {
    return {
        type: SERVICE_ERROR,
        errorMessage: { status, statusText },
    };
};
export const errorApp = () => {
    return {
        type: APP_ERROR,
    };
};

export const closeError = () => {
    return {
        type: CLOSE_ERROR,
    };
};

export const setCategoriesList = () => {
    return {
        type: SET_CATEGORIES_LIST,
    };
};
export const setActiveCategories = (categories) => {
    return {
        type: SET_ACTIVE_CATEGORIES,
        categories: categories,
    };
};

export const addToCart = (id) => {
    return {
        type: PRODUCT_ADD_TO_CART,
        id,
    };
};
export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        id,
    };
};
export const productPlusOneInCart = (id) => {
    return {
        type: PRODUCT_CART_PLUS,
        id,
    };
};
export const productMinusOneInCart = (id) => {
    return {
        type: PRODUCT_CART_MINUS,
        id,
    };
};

const newOrder = (data) => {
    return {
        type: NEW_ORDER,
        newOrder: data,
    };
};

export const showModal = (show) => {
    return {
        type: SHOW_MODAL,
        show,
    };
};

export const onCloseServiceError = () => {
    return (dispatch) => {
        dispatch(closeError());
    };
};

export const clearCart = () => {
    return {
        type: CLEAR__CART,
    };
};
export const clearOrderForm = (clear) => {
    return {
        type: CLEAR__FORM__ORDER,
        clear,
    };
};

export const onInitializedApp = () => {
    return async (dispatch) => {
        await ProductService.getResource()
            .then(async (response) => {
                if (!response.ok) {
                    dispatch(serviceError(response.status, response.statusText));
                }
                const resultData = await response.json();

                dispatch(productsLoaded(resultData));
                dispatch(setCategoriesList());
                dispatch(initializedApp());
            })
            .catch(() => {
                debugger;
                dispatch(errorApp());
                console.log("CATCH");
            });
    };
};

export const onSetActiveCategories = (categories = []) => {
    return (dispatch) => {
        dispatch(setActiveCategories(categories));
    };
};

export const onAddToCart = (id) => {
    return (dispatch) => {
        dispatch(addToCart(id));
    };
};

export const changeQuantityInCart = (id, action) => {
    return (dispatch) => {
        switch (action) {
            case "plus":
                return dispatch(productPlusOneInCart(id));
            case "minus":
                return dispatch(productMinusOneInCart(id));

            default:
                return action;
        }
    };
};

export const setNewOrder = (data) => {
    return async (dispatch) => {
        dispatch(loading(true));

        await ProductService.sendNewOrder(data)
            .then((response) => {
                if (!response.ok) {
                    const { status, statusText } = response;
                    dispatch(serviceError(status, statusText));
                } else {
                    dispatch(newOrder(data));
                    dispatch(showModal(true));
                }
            })
            .catch(() => {
                dispatch(errorApp());
            })
            .finally(
                setTimeout(() => {
                    dispatch(loading(false));
                    dispatch(showModal(false));
                    dispatch(clearOrderForm(true));
                    dispatch(clearOrderForm(false));
                    dispatch(clearCart());
                }, 5000)
            );
    };
};
