import React, { useEffect, useState } from "react";
import "./product-list.scss";
import ProductItem from "../product-item";

import { connect } from "react-redux";
import { withRouter } from "react-router";
import { onAddToCart, onSetActiveCategories } from "../../actions";
import { getActiveCategories, getProducts, isLoading } from "../../selectors/main-selector";

const ProductList = ({ productItems, activeCategories, loading, onAddToCart, onSetActiveCategories, ...props }) => {
    const [act, setAct] = useState(activeCategories);

    useEffect(() => {
        if (act !== activeCategories) {
            setAct(activeCategories);
        }
    }, [activeCategories]);

    useEffect(() => {
        if (props.match.params.category && props.match.params.category !== activeCategories) {
            setAct(props.match.params.category);
        }
    }, [props.match.params.category]);

    const product = act && act.length > 0 ? productItems.filter((i) => i.categories === act) : productItems;

    const productItemList = product.map((productItem) => {
        return (
            <ProductItem
                key={productItem.id}
                productItem={productItem}
                onAddToCart={onAddToCart}
                onSetActiveCategories={onSetActiveCategories}
            />
        );
    });
    return <div className="product__list">{productItemList}</div>;
};
const mapStateToProps = (state) => {
    return {
        productItems: getProducts(state),
        activeCategories: getActiveCategories(state),
        loading: isLoading(state),
    };
};

const mapDispatchToProps = {
    onAddToCart: onAddToCart,
    onSetActiveCategories: onSetActiveCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductList));
