import React from 'react';
import './menu-list-item.scss';
import {Link} from 'react-router-dom';


const MenuListItem = ({menuItem, onAddToCart, onCategory}) => {
	const {title, price, url, category} = menuItem
    return (
            <li className="menu__item">
                <Link to={`/${menuItem.id}`}>
				<div className="menu__title">{title}</div>
				<div className='menu__image'>
					<img className="menu__img" src={url} alt={title}></img>
				</div>
                
				</Link>
                <div className="menu__category">Category: 
					
						<button 
							className="menu__category"
							onClick={(e) => {
								onCategory(category)}
						}>{category}
						</button>
				</div>
                <div className="menu__price">Price: <span>{price}$</span></div>
				
                <button onClick={() => onAddToCart()} className="menu__btn">Add to cart</button>
				
            </li>
          
    )
}

export default MenuListItem;