import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pic1 from '../../../pics/carousel/s1.jpg';
import pic2 from '../../../pics/carousel/s2.jpg';
import pic3 from '../../../pics/carousel/s3.jpg';
import pic4 from '../../../pics/carousel/s4.jpg';
import pic5 from '../../../pics/carousel/s5.jpg';
import pic6 from '../../../pics/carousel/s6.jpg';

export default class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            className: 'carousel',
            adaptiveHeight: true
        };
        return (
                <Slider {...settings}>
                    <div className='slide'>
                        <img src={pic1}/>
                    </div>
                    <div className='slide'>
                        <img src={pic2}/>
                    </div>
                    <div className='slide'>
                        <img src={pic3}/>
                    </div>
                    <div className='slide'>
                        <img src={pic4}/>
                    </div>
                    <div className='slide'>
                        <img src={pic5}/>
                    </div>
                    <div className='slide'>
                        <img src={pic6}/>
                    </div>
                </Slider>
        );
    }
}
