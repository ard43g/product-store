import React from "react";
import "./cart-table.scss";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { changeQuantityInCart, removeFromCart } from "../../actions";
import { getProductInCart } from "../../selectors/main-selector";

const CartTable = ({ products, removeFromCart, changeQuantityInCart }) => {
    if (products.length === 0) {
        return (
            <div className="cart__wrapper">
                <div className="cart__title">Ваша корзина пуста</div>
                <div className="cart__back">
                    <Link to={"/product"} className="cart__back_btn">
                        <span>Выбрать что-нибудь</span>
                    </Link>
                </div>
            </div>
        );
    }
    return (
        <div className="cart">
            <div className="cart__title">Ваш заказ:</div>
            <button className="cart__btn-wrapper cart__btn-buy">
                <Link to="/order">Оформить</Link>
            </button>

            <div className="cart__list">
                {products.map((item) => {
                    const { title, price, url, id, quantity, categories } = item;
                    return (
                        <div key={id} className="cart__item">
                            <div className="cart__image">
                                <Link to={`/product/${categories}/${id}`}>
                                    <img src={url} className="cart__item-img" alt="{title}"></img>
                                </Link>
                            </div>

                            <div className="cart__item-title">
                                <Link to={`/product/${categories}/${id}`}>{title}</Link>
                            </div>

                            <div className="cart__btn-wrapper">
                                <button onClick={() => changeQuantityInCart(id, "plus")} className="cart__btn-quantity">
                                    <span>+</span>
                                </button>
                                <button
                                    disabled={quantity <= 1}
                                    onClick={() => changeQuantityInCart(id, "minus")}
                                    className="cart__btn-quantity"
                                >
                                    <span>-</span>
                                </button>
                            </div>
                            <div className="cart__item-price">
                                <span>
                                    {price}$ * {quantity} шт.
                                    <br></br> на сумму <br></br> {(price * quantity).toFixed(2)}$
                                </span>
                            </div>
                            <div onClick={() => removeFromCart(id)} className="cart__close">
                                <span>&times;</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <button className="cart__btn-wrapper cart__btn-main">
                <Link to="/order">Оформить</Link>
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        products: getProductInCart(state),
    };
};
const mapDispatchToProps = {
    removeFromCart,
    changeQuantityInCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
