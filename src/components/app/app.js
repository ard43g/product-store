import React from "react";
import { ProductPage, CartPage, ItemPage, StartPage, OrderPage } from "../pages";
import "./app.scss";
import AppHeader from "../app-header";

import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";

const App = () => {
    return (
        <div>
            <AppHeader />
            <Switch>
                <Route path="/product/:category/:id" render={() => <ItemPage />} />
                <Route path="/product/:category?" render={() => <ProductPage />} />
                <Route path="/order" render={() => <OrderPage />} />
                <Route path="/cart" render={() => <CartPage />} />
                <Route path="/" render={() => <StartPage />} exact />
            </Switch>
        </div>
    );
};

export default withRouter(App);
