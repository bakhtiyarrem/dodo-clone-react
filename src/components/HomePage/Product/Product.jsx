import React, {useEffect, useState} from 'react';
import Card from "./Card";
import axios from 'axios'


// Переминовать в "products"
const Product = ({title, id, items}) => {
    return (
            <article className="product" id={id}>
                <div className="container">
                    <h2 className="product__title">{title}</h2>
                    <div className="product__card-wrapper">
                        {
                            items.map(el =>
                                <Card key={el.id} {...el} />)
                        }
                    </div>
                </div>
            </article>
    );
};

export default Product;
