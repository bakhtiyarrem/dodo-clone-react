import React, {useEffect} from 'react';
import Card from "./Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {fetcProducts} from "../../../redux/reducers/productsReduce";
import LoadingCard from "./Card/LoadingCard";


const Products = () => {
    const {products, isLoaded} = useSelector(({productsReduce}) => ({
        products: productsReduce.products,
        isLoaded: productsReduce.isLoaded
    }))
    const dispatch = useDispatch()

    useEffect(async () => {
        dispatch(fetcProducts())
    }, []);

    const LoadingCardArr = Array(8).fill(<LoadingCard/>)

    return (
        products.map(({id, title, items}) => (
                <article className="product" id={id} key={id}>
                    <div className="container">
                        <h2 className="product__title">{title}</h2>
                        <div className="product__card-wrapper">
                            {isLoaded
                                ? items.map(el =>
                                    <Card key={el.id} {...el} />)
                                : LoadingCardArr.map(el=>
                                    el
                                )
                            }
                        </div>
                    </div>
                </article>
            )
        )
    )
};

export default Products;
