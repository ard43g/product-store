import React from "react";
import "./product-item.scss";

import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import ProductIcon from "../product-icon";

const ProductItem = ({ productItem, onAddToCart, onSetActiveCategories, itemPage }) => {
    if (typeof productItem.price === "boolean") {
        productItem.price = 0;
    }
    const id = productItem.id;
    const title = productItem.title || "Товар без имени";
    const price = +productItem.price || "Товар закончился";
    const url = productItem.url;
    const categories = productItem.categories || "Товар без категории";

    return (
        <div className={`product__item ${itemPage ? "item__page" : ""}`}>
            <div className={`${itemPage ? "item__page_wrapper" : ""}`}>
                <Link to={`/product/${categories}/${id}`}>
                    <div className="product__title">{title}</div>
                    <div className="product__image">
                        <img className="product__img" src={url} alt={title}></img>
                    </div>
                </Link>
                {itemPage && (
                    <Link to="/product" className="item__page_close">
                        <div className="cart__close">
                            <span>&times;</span>
                        </div>
                    </Link>
                )}
                <div className="product__descr">
                    <div className="product__category">
                        Category:
                        <button
                            className="product__btn product__btn_small"
                            onClick={() => onSetActiveCategories(categories)}
                        >
                            {categories}
                        </button>
                        <ProductIcon categories={categories} />
                    </div>

                    <div className="product__price">
                        Price:
                        <span>{Number(price) ? `${+price.toFixed(2)} $` : price}</span>
                    </div>

                    <button onClick={() => onAddToCart(id)} disabled={!price || isNaN(price)} className="product__btn">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default withRouter(ProductItem);
