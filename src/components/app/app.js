import React from "react";
import { ProductPage, CartPage, ItemPage, StartPage, OrderPage } from "../pages";
import "./app.scss";
import AppHeader from "../app-header";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect, withRouter } from "react-router";
import Spinner from "../spinner";
const App = () => {
    return (
        <div>
            <AppHeader />

            <Switch>
                {/* <Route path="/product/:category/:id" render={() => <ItemPage />} /> */}
                <Route path="/product/:category/:id" render={() => <ItemPage />} />
                <Route path="/product/:category?" render={() => <ProductPage />} />
                <Route path="/order" render={() => <OrderPage />} />
                <Route path="/cart" render={() => <CartPage />} />

                <Route path="/" render={() => <StartPage />} exact />
                {/* <Route path="/" render={() => <Spinner size="small" />} exact /> */}
            </Switch>
        </div>
    );
};

// export default WithRestoService()(App);
export default withRouter(App);
