import React, {useEffect, useState} from 'react';
import Slider from "./Slider/Slider";
import Product from "./Product/Product";
import {ProductsApi} from "../../api/api";

const HomePage = ({products}) => {
    return (
        <>
            <Slider/>
            {
                products.map(el =>
                    <Product key={el.id} {...el}/>)
            }
        </>
    );
};

export default HomePage;
