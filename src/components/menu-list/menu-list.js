import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, addedToCart, menuCategory} from '../../actions';
import Spinner from '../spinner';
// import Error from '../error';

import './menu-list.scss';

class MenuList extends Component {
	componentDidMount() {
		this.props.menuRequested();

		const {RestoService} = this.props;
		RestoService.getMenuItems()
		.then(res => this.props.menuLoaded(res))
		.catch(error => this.props.menuError());
	}
	


	


    render() {
		const {menuItems, loading, addedToCart, setCategory, menuCategory, itemsCategory} = this.props;
		console.log(setCategory);
		console.log(itemsCategory);
		if (loading) {
			return (
				<Spinner/>
			)
		} 
		/* if (error) {
			return (
				<Error/>	
			)
		} */
		//
		const items = setCategory? renderItems(itemsCategory) : renderItems(menuItems)
		console.log(items);
		console.log(itemsCategory);
		console.log(menuItems);
		function renderItems (arr) {
			return arr.map(menuItem => {
				console.log(menuItem.id);
				console.log(menuItem.category);
				return (
					<MenuListItem 
						key={menuItem.id} 
						menuItem={menuItem}
						onAddToCart={() => addedToCart(menuItem.id)}
						onCategory={() => menuCategory(menuItem.category)}/>
				)
			});
		}
		//

		/* const items = menuItems.map(menuItem => {
			return (
				<MenuListItem 
					key={menuItem.id} 
					menuItem={menuItem}
					onAddToCart={() => addedToCart(menuItem.id)}
					onCategory={() => menuCategory(menuItem.category)}/>
			)
		});
		console.log(items);

		
			const itemsCat = itemsCategory.map(categoryItem => {
				return (
					<MenuListItem 
						key={categoryItem.id} 
						menuItem={categoryItem}
						onAddToCart={() => addedToCart(categoryItem.id)}
						onCategory={() => menuCategory(categoryItem.category)}/>
				)
			})
			console.log(itemsCat); */
		

		

		return (
			<View items = {items}/>
		)
        
    }
};




const mapStateToProps= (state) => {
	return {
		menuItems : state.menu,
		loading : state.loading,
		setCategory : state.setCategory,
		itemsCategory : state.category
	}
}

const mapDispatchToProps = {
	menuLoaded : menuLoaded,
	menuRequested : menuRequested,
	addedToCart : addedToCart,
	menuCategory: menuCategory,
	

}

const View =({items}) => {
	return (
			<ul className="menu__list">
				{items}
			</ul>
	)
}
//* функция bindActionCreator из пакета redux

/* const mapDispatchToProps = (dispatch) => {
	return {
		menuLoaded : (newMenu) => {
			dispatch(menuLoaded(newMenu)) - //!!добавили функцию из action, сократили запись.
			/* dispatch({					//* иногда приходится передавать так, что бы гибко настраивать
				type: 'MENU_LOADED',
				payload: newMenu
			}) 
		}
	}
} */

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));