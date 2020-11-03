import React from 'react';

const Slider = () => {
    return (
        <article className="slider">
            <div className="container">
                <div className="slider__wrapper">
                    <div className="item">
                        <img
                            src="https://cdn.dodostatic.net/static/Img/Banners/g_1591703510_348d606bc795452c80df0d0ea2860970.jpeg"
                            alt="Первый слайд"/>
                    </div>

                    <div className="item">
                        <img
                            src="https://cdn.dodostatic.net/static/Img/Banners/g_1587815178_aa292ff43dea4b8dac3fc32ef46e4c51.jpeg"
                            alt="Второй слайд"/>
                    </div>

                    <div className="item">
                        <img
                            src="https://cdn.dodostatic.net/static/Img/Banners/g_1596185903_06d59f84fa3443e3ae3cf44d4e86a573.jpeg"
                            alt="Третий слайд"/>
                    </div>

                    <a className="prev" >&#10094;</a>
                    <a className="next" >&#10095;</a>
                </div>

                <div className="slider-dots">
                    <span className="slider-dots_item"></span>
                    <span className="slider-dots_item"></span>
                    <span className="slider-dots_item"></span>
                    {/*<span className="slider-dots_item" onclick="currentSlide(1)"></span>*/}
                    {/*<span className="slider-dots_item" onclick="currentSlide(2)"></span>*/}
                    {/*<span className="slider-dots_item" onclick="currentSlide(3)"></span>*/}
                </div>
            </div>
        </article>
    );
};

export default Slider;
