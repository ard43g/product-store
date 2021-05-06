const menuLoaded = (newMenu) => {
	return {
		type : 'MENU_LOADED',
		payload : newMenu
	};
};

const menuRequested = () => {
	return {
		type : 'MENU_REQUESTED',
		
	};
};
const addedToCart = (id) => {
	console.log("aDD to cart");
	return {
		type : 'ITEM_ADD_TO_CART',
		payload : id
		
	};
};

const deleteFromCart = (id) => {
	console.log(id);
	return {
		type : 'ITEM_REMOVE_FROM_CART',
		payload : id
		
	};
};

const menuError = () => {
	return {
		type : 'MENU_ERROR',
		
	};
};

const menuCategory = (category) => {
	console.log(`action: ${category}`);
	return {
		type : 'MENU_CATEGORY',
		payload : category,
		set : true
	}
}



export {
	menuLoaded,
	menuRequested,
	menuError,
	addedToCart,
	deleteFromCart,
	menuCategory

};