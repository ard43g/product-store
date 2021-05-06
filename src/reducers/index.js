const initialState = {
	menu : [],
	loading : true,
	items : [],
	totalPrice : 0,
	setCategory: false,
	category: []

}

const reducer = (state = initialState, action) => {
	console.log('STARRT REDUCER');
	console.log(state.category);
	switch (action.type) {
		case 'MENU_LOADED':
			console.log(`case MENU Loaded`);
			return {
				...state,
				menu : action.payload,
				loading: false,
				setCategory: false
			} 
		case 'MENU_REQUESTED':
			console.log(`case MENU REQUESTED`);
			return {
				...state,
				menu : state.menu,
				loading: true,
			}
		
		case 'ITEM_ADD_TO_CART' :
			console.log("CASE add to cart");
			const id = action.payload;
			
			const itemInd = state.items.findIndex(item => item.id === id);
			if (itemInd >= 0) {
				const itemInState = state.items.find(item => item.id === id);
                const newItem = {
                    ...itemInState,
                    quantity: ++itemInState.quantity
				}
				return {
					...state,
					items : [
						...state.items.slice(0, itemInd),
						newItem,
						...state.items.slice(itemInd +1)
					],
					totalPrice: state.totalPrice + newItem.price
				}
			}
			// * товара раньше не было в корзине
			const item = state.menu.find(item => item.id=== id);
			const newItem = {
				title: item.title,
				price: item.price,
				url: item.url,
				id: item.id,
				quantity : 1
			};
			return {
				...state,
				items: [
					...state.items,
					newItem
				],
				totalPrice: state.totalPrice + newItem.price
			}
		case 'ITEM_REMOVE_FROM_CART' : 
			const idx = action.payload;
			const itemIndex = state.items.findIndex(item => item.id === idx);
			const price = state.items[itemIndex]['price'] * state.items[itemIndex]['quantity']
			console.log('CASE REMOVE FROM CART');

			return {
				...state,
				items : [
					...state.items.slice(0, itemIndex),
					...state.items.slice(itemIndex + 1)
				],
				totalPrice : state.totalPrice - price
			}
		case 'MENU_CATEGORY' :
			console.log("CASE MENU CATEGORY");
			const newCategory = action.payload;
			const newSet = action.set;
			const itemCategory = state.menu.filter(item => item.category=== newCategory)
			console.log(itemCategory);
			return {
				...state,
				setCategory : newSet,
				category : [
					itemCategory
				]

			}
			

		case 'MENU_ERROR':
			return {
				...state,
				menu : state.menu,
				loading: false,
			}
		default : return state;
	}

}

export default reducer;



/* case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            
            const itemInd = state.items.findIndex(item => item.id === id);
            if (itemInd >= 0){
                const itemInState = state.items.find(item => item.id === id);
                const newItem = {
                    ...itemInState,
                    qtty: ++itemInState.qtty
                }
                return {
                    ...state, 
                    items: [
                        ...state.items.slice(0, itemInd),
                        newItem,
                        ...state.items.slice(itemInd + 1)
                    ],
                    totalPrice: state.totalPrice + newItem.price
                }

            } 
            // товара раньше не было в корзине
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                qtty: 1
            };
            
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                totalPrice: state.totalPrice + newItem.price
            }; */