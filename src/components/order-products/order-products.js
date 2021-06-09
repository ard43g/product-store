import React from "react";
import "./order-products.scss";

const OrderProducts = ({ productInCart }) => {
    return productInCart.map((item) => {
        const { title, url, id, quantity } = item;
        return (
            <div key={id} className="order__product">
                <div className="order__product-image">
                    <img src={url} alt="title" />
                </div>
                <div className="order__product-title">{title}</div>

                <div className="order__product-quantity">
                    x <span>{quantity}</span>
                </div>
            </div>
        );
    });
};

export default OrderProducts;
