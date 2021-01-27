import React from 'react';

const OrderCardItem = ({id, imgUrl, name, price, size}) => {
    return (
        <div className="order-card__item">
            <div className="order-card__img-wrapper">
                <img
                    src={imgUrl}
                    alt="product image" className="order-card__img" />
            </div>

            <div className="order-card__text">
                <div className="order-card__title">{name}</div>
                <div className="order-card__info">Размер: {size} см.</div>
            </div>

            <div className="order-card__qty-wrapper">
                <div className="order-card__change-btn">-</div>
                <div className="order-card__qty">1</div>
                <div className="order-card__change-btn">+</div>
            </div>


            <div className="order-card__price">{price}</div>

            <div className="order-card__remove">
                <img src="https://www.flaticon.com/svg/static/icons/svg/2716/2716333.svg" alt="delete icon" />
            </div>
        </div>
    );
};

export default OrderCardItem;
