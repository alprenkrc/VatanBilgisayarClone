import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselImages from '../assets/CarouselImages';

const MyCarousel = () => {
  return (
    <div className=''>
      <Carousel showArrows={false} infiniteLoop={true} autoPlay={true} showStatus={false} showIndicators={false}>
        {Object.values(CarouselImages).map((imageSrc, index) => (
          <div key={index}>
            <img src={imageSrc} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default MyCarousel;
