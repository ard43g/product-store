import React from 'react';
import {MainPage, CartPage, ItemPage, CategoryPage} from '../pages';
import './app.scss'
import AppHeader from '../app-header';
// import WithRestoService from '../hoc';
import Background from './berries-bg.jpg';
import {Route, Switch} from 'react-router-dom';

const App = (/* {RestoService} */) => {
	// console.log(RestoService.getMenuItems());
	// console.log(RestoService.getMenuPizza());
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader /* total={50} *//>
			<Switch>
				<Route 
					path='/' 
					component={MainPage}
					exact/>
				<Route 
					path='/cart' 
					component={CartPage}/>
				<Route 
					path='/:id'
					component={ItemPage}/>
				{/* <Route 
					path='/category'
					component={CategoryPage}/>
 */}
			</Switch>
        </div>
    )
}

// export default WithRestoService()(App);
export default App;