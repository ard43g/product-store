import React from "react";
import "./product-page.scss";

import ProductList from "../product-list";
import CategorySort from "../category-sort";

const ProductPage = () => {
    return (
        <div className="product__page">
            <CategorySort />
            <ProductList />
        </div>
    );
};

export default ProductPage;
