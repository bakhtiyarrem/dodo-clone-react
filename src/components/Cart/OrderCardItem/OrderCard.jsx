import React from 'react';

const OrderCard = () => {
    return (
        <div className="order-card__item">
            <div className="order-card__img-wrapper">
                <img
                    src="https://cdn.dodostatic.net/static/Img/Products/2e8c610d59ce49fbae8f8909b2940343_292x292.jpeg"
                    alt="product image" className="order-card__img" />
            </div>

            <div className="order-card__text">
                <div className="order-card__title">Аррива</div>
                <div className="order-card__info">Размер: 30 см.</div>
            </div>

            <div className="order-card__qty-wrapper">
                <div className="order-card__change-btn">-</div>
                <div className="order-card__qty">1</div>
                <div className="order-card__change-btn">+</div>
            </div>


            <div className="order-card__price">1 990тг</div>

            <div className="order-card__remove"><img src="img/icons/delete.svg" alt="delete icon" /></div>
        </div>
    );
};

export default OrderCard;
