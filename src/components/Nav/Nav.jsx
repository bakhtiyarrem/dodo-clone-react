import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav ">
            <div className="container">
                <ul className="nav-list">
                    <li className="nav-list__item"><a href="#pizza">Пицца</a></li>
                    <li className="nav-list__item"><a href="#drink">Напитки</a></li>
                    <li className="nav-list__item"><a href="#">Контакты</a></li>
                </ul>

                <Link to="/cart" href="#" className="cart-button">
                    <div className="cart-button__title">Корзина</div>
                    <div className="cart-button__count">1</div>
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
