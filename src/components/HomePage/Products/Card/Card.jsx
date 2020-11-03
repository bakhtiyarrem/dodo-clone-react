import React, {useState} from 'react';
import classNames from 'classnames';

const Card = ({id, name, ingredient, imgUrl, price, sizes, addToCart}) => {
    const [activeSize, setActiveSize] = useState(sizes[0])
    const toggleActiveSize = (activeSizeIndex) => {
        setActiveSize(activeSizeIndex)
    }
    const aviableSizes = [25, 30]
    const onAddToCart = () => addToCart({id, name, imgUrl, price: price[activeSize] || price[0], size: aviableSizes[activeSize]})

    return (
        <div className="card">
            <div className="card__img">
                <img src={imgUrl}
                alt="product image"/>
            </div>
            <div className="card__title">{name}</div>
            <div className="card__ingredient">{ingredient}</div>
            {
                !sizes.length ||
                <ul className="card__selector">
                    {
                        aviableSizes.map((el, index) => (
                            <li key={el}
                                onClick={() => {
                                    toggleActiveSize(index)
                                }}
                                className={classNames({
                                    'active': index === activeSize,
                                    'disabled': !sizes.includes(index)
                                })}>{el} см.</li>
                        ))
                    }
                </ul>
            }

            <div className="card__bottom-wrapper">
                <div className="card__price">{sizes.length ? price[activeSize] : price[0]} тг.</div>
                {/*{*/}
                {/*    productCount*/}
                {/*        ? <div className="card__qty-wrapper">*/}
                {/*            <div className="card__change-btn">-</div>*/}
                {/*            <div className="card__qty"></div>*/}
                {/*            <div className="card__change-btn">+</div>*/}
                {/*        </div>*/}
                {/*        : */}
                        <button className="card__buy" onClick={ onAddToCart }>Выбрать</button>
                {/*}*/}
            </div>
        </div>
    );
};

export default Card;
