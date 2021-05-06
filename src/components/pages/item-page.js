import React,{Component} from 'react';
import './item-page.scss';
import Spinner from '../spinner';
import WithRestoService from '../hoc/';
import {connect} from 'react-redux';
import {menuLoaded, menuRequested, menuError, addedToCart} from '../../actions';
// import {Link} from 'react-router-dom'; //? NO USE



class ItemPage extends Component {
	componentDidMount() { 
		if (this.props.menuItems.length === 0) {
			this.props.menuRequested();
		}
		
		const{RestoService} = this.props;


		RestoService.getMenuItems()
                .then(res => this.props.menuLoaded(res))
                .catch(error => this.props.menuError());
		
	}
	



	render() {
		if(this.props.loading) {
            return (
                <div className = "item_page">
                    <Spinner/>
                </div>
            )
        }
		const UpCategory = this.props.setCategory;
		console.log(UpCategory);

		const item = this.props.menuItems.find(el => +el.id === +this.props.match.params.id)
		const {title, price, url, category, id} = item;
		console.log(`item on item-page : ${{item}}`);
		console.log(item);

		

		return (
				<div className='item__page'>
					<li className="menu__item item__block">
					<div className="menu__title">{title}</div>
					<img className="menu__img" src={url} alt={title}></img>
					<div className="menu__category">Category: <span>{category}</span></div>
					<div className="menu__price">Price: <span>{price}$</span></div>
					<button onClick={() => this.props.addedToCart(id)} className="menu__btn">Add to cart</button>
					<span className = {`menu__category_Img ${category}`}></span> 
				</li>
				</div>
			
		)
		
	}
}

const mapStateToProps = (state) => {


	return {
		menuItems : state.menu,
		loading : state.loading,
		error : state.error,
		setCategory : state.setCategory
	}
	;
}


const mapDispatchToProps= {
	menuLoaded,
	menuRequested,
	menuError,
	addedToCart
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(ItemPage));