import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardCarouselUi = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (
        <div className='w-52 mx-auto'>
            <Slider {...settings}>
                <div className='h-20 bg-red-400'>
                    <h3>1</h3>
                </div>
                <div className='h-20 bg-red-400'>
                    <h3>2</h3>
                </div>
                <div className='h-20 bg-red-400'>
                    <h3>3</h3>
                </div>
                <div className='h-20 bg-red-400}'>
                    <h3>4</h3>
                </div>
                <div className='h-20 bg-red-400'>
                    <h3>5</h3>
                </div>
                <div className='h-20 bg-red-400'>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    );
};

export default CardCarouselUi;
