import {combineReducers, createStore} from "redux";
import productsReduce from "./productsReduce";

let reducers = combineReducers(
    {
        productsReduce: productsReduce
    }
)

const store = createStore(reducers)

export default store