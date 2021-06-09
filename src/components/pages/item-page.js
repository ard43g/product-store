import React, { useState, useEffect } from "react";
import "./item-page.scss";

import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";

import { onAddToCart, onSetActiveCategories } from "../../actions";
import ProductItem from "../product-item";
import { getProducts, isLoading } from "../../selectors/main-selector";

const ItemPage = (props) => {
    const [redirectFlag, setRedirectFlag] = useState(false);
    const [currentId, setCurrentId] = useState(props.match.params.id);
    const currentCat = props.match.params.category;

    let correctId = +props.match.params.id;
    if (isNaN(props.match.params.id) || props.match.params.id > props.productsItems.length) {
        correctId = props.productsItems.length;
    }

    let item = props.productsItems.find((el) => +el.id === +correctId);
    if (item.id === currentId && item.categories === currentCat && redirectFlag) {
        setRedirectFlag(() => false);
    }

    useEffect(() => {
        if (props.match.params.id !== item.id && props.match.params.category !== item.categories) {
            let item = props.productsItems.find((el) => el.categories === props.match.params.category);
            setRedirectFlag(() => true);
            setCurrentId(() => +item.id);
        }
    }, [currentId]);

    return redirectFlag ? (
        <Redirect to={`/product/${currentCat}/${currentId}`} />
    ) : (
        <ProductItem
            key={item.id}
            productItem={item}
            onAddToCart={props.onAddToCart}
            onSetActiveCategories={props.onSetActiveCategories}
            itemPage
        />
    );
};

const mapStateToProps = (state) => {
    return {
        productsItems: getProducts(state),
        loading: isLoading(state),
    };
};

const mapDispatchToProps = {
    onAddToCart,
    onSetActiveCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ItemPage));
