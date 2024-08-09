'use client';

import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const Gallery = () => {
  const gallery = [
    {
      name: 'Naše hodiny',
      src: '',
      numbers: [],
    },
    {
      name: 'Záverečný koncert - 30.6.2024',
      src: '',
      numbers: [],
    },
    {
      name: 'Letný tábor 2024',
      src: '',
      numbers: [],
    },
    {
      name: 'SND',
      src: '',
      numbers: [],
    },
  ];

  const images = [9, 8, 7, 6, 5].map(number => ({
    src: `https://placedog.net/${number}00/${number}00?id=${number}`,
  }));

  return (
    <div className='mx-auto max-w-7xl w-full flex justify-center carousel-container text-black '>
      <Carousel images={images} style={{ height: 472, width: 800 }} />
    </div>
  );
};

export default Gallery;
