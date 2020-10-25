import React, {useEffect} from 'react';
import {ProductsApi} from "../../api/api";
import {connect} from "react-redux";
import {setProducts} from "../../redux/productsReduce";
import HomePage from "./HomePage";

const HomePageContainer = (props) => {

    useEffect(async () => {
        let response = await ProductsApi.getProducts()
        props.setProducts(response)
    }, []);

    return (
        <HomePage products={props.products}/>
    );
};

let mapStateToProps = state => ({
    products: state.productsReduce.products
})

export default connect(mapStateToProps, {setProducts})(HomePageContainer);
