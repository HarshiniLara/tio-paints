import React from 'react';
import {Carousel} from 'react-bootstrap';
import { Slides } from '../config/slideImages';

const Slider = () => {
    return (
        <>
            <Carousel className="carousel">
                {Slides.map((slide) => (
                    <Carousel.Item interval={3000}>
                        <img src={slide.img}
                            // className='sliderimg'
                            // height="500px"
                            // width="1000px"
                        />
                        {/* <Carousel.Caption>
                            <h3>{slide.desc}</h3>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                ))}  
            </Carousel>
        </>
    )
}

export default Slider;