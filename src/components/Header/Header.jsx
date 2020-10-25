import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
            <header className="header">
                <div className="container">
                    <div className="header-logo">
                        <Link to="/" href="#">
                            <img className="header-logo__img"
                                 src="https://upload.wikimedia.org/wikipedia/ru/4/4c/%D0%94%D0%9E%D0%94%D0%9E-%D0%9F%D0%B8%D1%86%D1%86%D0%B0.jpg"
                                 alt="logo"/>
                        </Link></div>

                    <div className="delivery-info">
                        <div className="delivery-info__title">Доставка пиццы в <a className="city" href="#">Павлодар</a>
                        </div>
                        <div className="delivery-info__subtitle">Стоимость доставки: бесплатно</div>
                    </div>

                    <div className="header-phone">
                        <div className="header-phone__title">заказ по телефону</div>
                        <div className="header-phone__number"><a href="#">+7 (776) 726 15 49</a></div>
                    </div>
                </div>
            </header>
    );
};

export default Header;
