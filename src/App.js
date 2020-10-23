import React from 'react';


function App() {
    return (
        <div className="App">
            <header className="header">
                <div className="container">
                    <div className="header-logo">
                        <a href="#">
                            <img className="header-logo__img"
                                 src="https://upload.wikimedia.org/wikipedia/ru/4/4c/%D0%94%D0%9E%D0%94%D0%9E-%D0%9F%D0%B8%D1%86%D1%86%D0%B0.jpg"
                                 alt="logo"/>
                        </a></div>

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


            <nav className="nav ">
                <div className="container">
                    <ul className="nav-list">
                        <li className="nav-list__item"><a href="#">Пицца</a></li>
                        <li className="nav-list__item"><a href="#">Суши</a></li>
                        <li className="nav-list__item"><a href="#">Напитки</a></li>
                        <li className="nav-list__item"><a href="#">Закуски</a></li>
                        <li className="nav-list__item"><a href="#">Контакты</a></li>

                    </ul>

                    <a href="#" className="cart-button">
                        <div className="cart-button__title">Корзина</div>
                        <div className="cart-button__count">1</div>
                    </a>
                </div>
            </nav>

            <main>
                <article class="slider">
                    <div class="container">
                        <div class="slider__wrapper">
                            <div class="item">
                                <img
                                    src="https://cdn.dodostatic.net/static/Img/Banners/g_1591703510_348d606bc795452c80df0d0ea2860970.jpeg"
                                    alt="Первый слайд"/>
                            </div>

                            <div class="item">
                                <img
                                    src="https://cdn.dodostatic.net/static/Img/Banners/g_1587815178_aa292ff43dea4b8dac3fc32ef46e4c51.jpeg"
                                    alt="Второй слайд"/>
                            </div>

                            <div class="item">
                                <img
                                    src="https://cdn.dodostatic.net/static/Img/Banners/g_1596185903_06d59f84fa3443e3ae3cf44d4e86a573.jpeg"
                                    alt="Третий слайд"/>
                            </div>

                            <a class="prev" onclick="minusSlide()">&#10094;</a>
                            <a class="next" onclick="plusSlide()">&#10095;</a>
                        </div>

                        <div class="slider-dots">
                            <span class="slider-dots_item" onclick="currentSlide(1)"></span>
                            <span class="slider-dots_item" onclick="currentSlide(2)"></span>
                            <span class="slider-dots_item" onclick="currentSlide(3)"></span>
                        </div>
                    </div>

                </article>

                <article class="product">
                    <div class="container">
                        <h2 class="product__title">Пицца</h2>

                        <div class="product__card-wrapper">

                            <div class="card">
                                <div class="card__img"><img
                                    src="https://cdn.dodostatic.net/static/Img/Products/2e8c610d59ce49fbae8f8909b2940343_292x292.jpeg"
                                    alt="pizza" />
                                </div>
                                <div class="card__title">Аррива</div>
                                <div class="card__ingredient">Соус бургер, цыпленок, соус ранч, чоризо из цыпленка,
                                    сладкий перец,
                                    красный лук, моцарелла, томаты, чеснок
                                </div>
                                <ul class="card__selector">
                                    <li class="active">30 см.</li>
                                    <li>25 см.</li>
                                </ul>
                                <div class="card__bottom-wrapper">
                                    <div class="card__price">1 990 тг</div>
                                    <button class="card__buy">Выбрать</button>
                                </div>
                            </div>

                            <div class="card">
                                <div class="card__img"><img
                                    src="https://cdn.dodostatic.net/static/Img/Products/2e8c610d59ce49fbae8f8909b2940343_292x292.jpeg"
                                    alt="pizza" />
                                </div>
                                <div class="card__title">Аррива</div>
                                <div class="card__ingredient"> сладкий перец, красный лук, моцарелла, томаты, чеснок
                                </div>
                                <ul class="card__selector">
                                    <li class="active">30 см.</li>
                                    <li>25 см.</li>
                                </ul>
                                <div class="card__bottom-wrapper">
                                    <div class="card__price">1 990 тг</div>
                                    <div class="card__qty-wrapper">
                                        <div class="card__change-btn">-</div>
                                        <div class="card__qty">1</div>
                                        <div class="card__change-btn">+</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    );
}

export default App;
