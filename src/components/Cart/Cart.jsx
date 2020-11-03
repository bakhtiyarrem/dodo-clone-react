import React from 'react';
import OrderCardItem from "./OrderCardItem/OrderCard";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";


const Cart = () => {
    const {totalPrice, itemsCount, items} = useSelector(({cartReduce}) => ({
        totalPrice: cartReduce.totalPrice,
        itemsCount: cartReduce.itemsCount,
        items: cartReduce.items,
    }))
    debugger

    return (
        <article className="cart">
            <div className="container">
                <h1 className="cart__title">Корзина</h1>

                <div className="order-card">
                    <OrderCardItem />
                </div>

                <h2 className="cart__total-price">Сумма заказа: <span>{totalPrice}</span>тг</h2>

                <div className="cart__bottom">
                    <Link to="/" className="cart__back-btn">Вернуться назад</Link>
                    <a href="#" className="cart__buy">Оформить заказ</a>
                </div>

            </div>
        </article>
    );
};

export default Cart;
