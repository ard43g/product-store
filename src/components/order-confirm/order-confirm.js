import React from "react";
import "./order-confirm.scss";

import OrderForm from "../order-form/order-form";
import OrderProducts from "../order-products/order-products";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setNewOrder } from "../../actions";
import Modal from "../modal/modal";
import {
    getProductInCart,
    getTotalPrice,
    isLoading,
    isShowModal,
    errorService,
    needClearForm,
} from "../../selectors/main-selector";

const OrderConfirm = ({ productInCart, totalPrice, loading, setNewOrder, clearForm, ...props }) => {
    const generateOrder = (value) => {
        const generateOrderProducts = productInCart.map((item) => {
            return {
                id: item.id,
                title: item.title,
                quantity: item.quantity,
            };
        });
        const contacts = { ...value, totalPrice: totalPrice };

        const newOrder = {
            ...generateOrderProducts,
            contacts,
        };

        return setNewOrder(newOrder);
    };

    return productInCart.length === 0 ? (
        <Redirect to="/product" />
    ) : (
        <div className="order">
            <div className="order__wrapper">
                <Link to="/cart" className="cart__close">
                    <span>&times;</span>
                </Link>
                <OrderForm onSubmit={generateOrder} clearForm={clearForm} loading={loading} />
                <div className="order__products-wrapper">
                    <div className="order__total-price">
                        Заказ на сумму : <span>{totalPrice} $</span>
                    </div>
                    <OrderProducts productInCart={productInCart} />
                </div>
                {props.showModal && !props.errorService && <Modal type="done" message="Спасибо за заказ!" />}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        productInCart: getProductInCart(state),
        totalPrice: getTotalPrice(state),
        loading: isLoading(state),
        showModal: isShowModal(state),
        errorService: errorService(state),
        clearForm: needClearForm(state),
    };
};

const mapDispatchToProps = {
    setNewOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirm);
