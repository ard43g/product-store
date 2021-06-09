import React from "react";
import "./app-header.scss";

import cartIcon from "./cart.svg";
import cartIconFull from "./cart-full.svg";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import { onSetActiveCategories } from "../../actions";
import { getTotalPrice } from "../../selectors/main-selector";

const AppHeader = ({ totalPrice, ...props }) => {
    const iconCart = totalPrice > 0 ? cartIconFull : cartIcon;
    const resetCategories = () => {
        props.onSetActiveCategories();
    };
    return (
        <header className="header">
            <Link to={"/product"} className="header__link" onClick={resetCategories}>
                Каталог
            </Link>

            <Link to="/cart" className="header__link">
                <img className="header__cart" src={iconCart} alt="cart"></img>
                Total: {totalPrice} $
            </Link>
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        totalPrice: getTotalPrice(state),
    };
};

const mapDispatchToProps = {
    onSetActiveCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppHeader));
