import React from 'react';
import './cart-table.scss';
import WithRestoService from '../hoc';
import {connect} from 'react-redux';
import {deleteFromCart} from '../../actions';


const CartTable = ({items, deleteFromCart, RestoService}) => {
	if (items.length === 0) {
	return (
			<div className="cart__title">Ваша корзина пуста</div>
		)
	}
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
				{
					items.map(item => {
						const{title, price, url, id, quantity} = item;
						return (
							<div key={id} className="cart__item">
								<div className='cart__image'>
									<img src={url} className="cart__item-img" alt="{title}"></img>
								</div>
								<div className="cart__item-title">{title}</div>
								<div className="cart__item-price">{price}$ * {quantity}</div>
								<div onClick={()=> deleteFromCart(id)}className="cart__close">&times;</div>
								
                			</div>
						)
					})
				}
                
            </div>
			<button 
				onClick = { () => {RestoService.setOrder( generateOrder(items))} }
				className='order'> Оформить заказ</button>
        </>
    );
};

const generateOrder = (items) => {
	const newOrder = items.map(item => {
		return {
			id : item.id,
			quantity: item.quantity
		}
	})
	console.log(newOrder);
	return newOrder;
}




const mapStateToProps = (state) => {  // *можно сразу деструктуризировать {items}
	return {
		items : state.items
	}
}
const mapDispatchToProps = {
	
		deleteFromCart : deleteFromCart
	
		/* onDelete : (id) => {
			console.log(`delete : ${id}`);
		}
	    */
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));