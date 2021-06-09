const initialState = {
    initialized: false,
    loading: true,
    errorApp: false,
    serviceError: false,
    serviceErrorMessage: null,
    showModal: false,
    clearForm: false,
    products: [],
    categoriesList: [],
    activeCategories: [],
    productInCart: [],
    orders: [],
    totalPrice: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INITIALIZED_APP":
            return {
                ...state,
                initialized: true,
                loading: false,
            };
        case "LOADING":
            return {
                ...state,
                loading: action.loading,
            };
        case "SHOW_MODAL":
            return {
                ...state,
                showModal: action.show,
            };

        case "PRODUCTS_LOADED":
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        case "SERVICE_ERROR":
            return {
                ...state,
                serviceError: true,
                loading: false,
                serviceErrorMessage: action.errorMessage,
            };

        case "APP_ERROR":
            return {
                ...state,
                errorApp: true,
            };
        case "CLOSE_ERROR":
            return {
                ...state,
                serviceError: false,
                serviceErrorMessage: null,
            };
        case "SET_CATEGORIES_LIST":
            const categories = [...new Set(state.products.map((i) => i.categories))];

            return {
                ...state,
                categoriesList: categories,
            };
        case "SET_ACTIVE_CATEGORIES":
            return {
                ...state,
                activeCategories: action.categories,
            };
        case "PRODUCT_ADD_TO_CART":
            const id = action.id;

            const itemInd = state.productInCart.findIndex((item) => item.id === id);
            if (itemInd >= 0) {
                const itemInCart = state.productInCart.find((item) => item.id === id);
                const newItem = {
                    ...itemInCart,
                    quantity: ++itemInCart.quantity,
                };
                return {
                    ...state,
                    productInCart: [
                        ...state.productInCart.slice(0, itemInd),
                        newItem,
                        ...state.productInCart.slice(itemInd + 1),
                    ],
                    totalPrice: +(+state.totalPrice.toFixed(2) + +newItem.price.toFixed(2)).toFixed(2),
                };
            }
            const item = state.products.find((item) => item.id === id);
            const newItem = {
                categories: item.categories,
                title: item.title,
                price: +(+item.price).toFixed(2),
                url: item.url,
                id: item.id,
                quantity: 1,
            };
            return {
                ...state,
                productInCart: [...state.productInCart, newItem],
                totalPrice: +(+state.totalPrice.toFixed(2) + +newItem.price.toFixed(2)).toFixed(2),
            };
        case "REMOVE_FROM_CART":
            const removeId = action.id;
            const removeInd = state.productInCart.findIndex((item) => item.id === removeId);
            const price =
                +state.productInCart[removeInd]["price"].toFixed(2) * state.productInCart[removeInd]["quantity"];
            return {
                ...state,
                productInCart: [
                    ...state.productInCart.slice(0, removeInd),
                    ...state.productInCart.slice(removeInd + 1),
                ],
                totalPrice: +(+state.totalPrice.toFixed(2) - +price.toFixed(2)).toFixed(2),
            };
        case "PRODUCT_CART_PLUS":
            const addId = action.id;
            const addIdx = state.productInCart.findIndex((item) => item.id === addId);
            const itemInCart = state.productInCart.find((item) => item.id === addId);
            const itemPlus = {
                ...itemInCart,
                quantity: ++itemInCart.quantity,
            };
            return {
                ...state,
                productInCart: [
                    ...state.productInCart.slice(0, addIdx),
                    itemPlus,
                    ...state.productInCart.slice(addIdx + 1),
                ],
                totalPrice: +(+state.totalPrice.toFixed(2) + +itemPlus.price.toFixed(2)).toFixed(2),
            };
        case "PRODUCT_CART_MINUS":
            const minusId = action.id;
            const minusIdx = state.productInCart.findIndex((item) => item.id === minusId);
            const itemFromCart = state.productInCart.find((item) => item.id === minusId);
            const itemMinus = {
                ...itemFromCart,
                quantity: --itemFromCart.quantity,
            };
            return {
                ...state,
                productInCart: [
                    ...state.productInCart.slice(0, minusIdx),
                    itemMinus,
                    ...state.productInCart.slice(minusIdx + 1),
                ],
                totalPrice: +(+state.totalPrice.toFixed(2) - +itemMinus.price.toFixed(2)).toFixed(2),
            };
        case "NEW_ORDER":
            return {
                ...state,
                orders: [...state.orders, action.newOrder],
            };

        case "CLEAR__CART":
            return {
                ...state,
                productInCart: [],
                totalPrice: 0,
            };
        case "CLEAR__FORM__ORDER":
            return {
                ...state,
                clearForm: action.clear,
            };

        default:
            return state;
    }
};

export default reducer;
