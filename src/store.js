import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
    main: reducer,
    form: formReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;
