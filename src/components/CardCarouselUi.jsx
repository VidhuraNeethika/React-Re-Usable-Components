import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardCarouselUi = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (
        <div className='mt-16'>
            <h2 className='mb-5 font-bold'>Slick Carousel</h2>
            <div className='mx-auto'>
                <Slider {...settings}>
                    <div className='h-20 bg-gray-400 p-5 text-center font-bold h-44'>
                        <h3>1</h3>
                    </div>
                    <div className='h-20 bg-gray-200 p-5 text-center font-bold h-44'>
                        <h3>2</h3>
                    </div>
                    <div className='h-20 bg-gray-400 p-5 text-center font-bold h-44'>
                        <h3>3</h3>
                    </div>
                    <div className='h-20 bg-gray-200 p-5 text-center font-bold h-44'>
                        <h3>4</h3>
                    </div>
                    <div className='h-20 bg-gray-400 p-5 text-center font-bold h-44'>
                        <h3>5</h3>
                    </div>
                    <div className='h-20 bg-gray-200 p-5 text-center font-bold h-44'>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default CardCarouselUi;
