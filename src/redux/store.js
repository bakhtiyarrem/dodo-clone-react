import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import productsReduce from "./reducers/productsReduce";
import thunk from "redux-thunk"
import cartReduce from "./reducers/cartReduce";

let reducers = combineReducers(
    {
        productsReduce,
        cartReduce
    }
)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunk))
)

export default store