import React, {useEffect} from 'react';
import Card from "./Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {fetcProducts} from "../../../redux/reducers/productsReduce";
import LoadingCard from "./Card/LoadingCard";
import cartReduce, {addItemToCart} from "../../../redux/reducers/cartReduce";


const Products = () => {
    const {products, isLoaded, cartItems} = useSelector(({productsReduce, cartReduce}) => ({
        products: productsReduce.products,
        isLoaded: productsReduce.isLoaded,
        cartItems: cartReduce.items
    }))
    const dispatch = useDispatch()
    useEffect(async () => {
        dispatch(fetcProducts())
    }, []);

    const LoadingCardArr = Array(8).fill("")
    const addToCart = (itemObject) => {
        dispatch(addItemToCart(itemObject))
    }

    return (
        products.map(({id, title, items}) => (
                <article key={id} className="product" id={id}>
                    <div className="container">
                        <h2 className="product__title">{title}</h2>
                        <div className="product__card-wrapper">
                            {isLoaded
                                ? items.map(el =>
                                    <Card
                                        key={el.id}
                                        {...el}
                                        dispatch={dispatch}
                                        addToCart={addToCart}
                                        addedCount={cartItems[el.id] && cartItems[el.id].length}
                                    />)
                                : LoadingCardArr.map((el, index) => <LoadingCard key={index}/>)
                            }
                        </div>
                    </div>
                </article>
            )
        )
    )
};

export default Products;
