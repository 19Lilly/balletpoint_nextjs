'use client';
import React from 'react';
import Carousel from 'react-gallery-carousel';

const CarouselComponent = ({ images }) => {
  return <Carousel images={images} isMaximized={true} />;
};

export default CarouselComponent;
