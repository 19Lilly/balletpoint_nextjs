'use client';

import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const singleGallery = ({ params }) => {
  const galleryData = [
    {
      title: 'Naše hodiny',
      url: 'ourClasses',
      src: '/images/ourClasses',
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      title: 'Záverečný koncert - 30.6.2024',
      url: 'finalConcert_30_6_2024',
      src: '/images/finalConcert_30_6_2024',
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },
    {
      title: 'Ballet point Letný tábor 2024',
      url: 'balletPoint_summerCamp_2024',
      src: '/images/balletPoint_SummerCamp_2024',
      numbers: [],
    },
    {
      title: 'Výlet do SND',
      url: 'tripToSND',
      src: '/public/images/tripToSND',
      numbers: [],
    },
  ];

  const [{ title, url, src, numbers }] = galleryData.filter(
    gallery => gallery.url === params.name
  );

  const imgs = numbers.map(number => ({
    src: `${src}/${url}_${number}.jpg`,
  }));

  return (
    <div className='mx-auto max-w-7xl w-full flex flex-col gap-4 items-center carousel-container text-black '>
      <h1>{title}</h1>
      <div className='w-70 h-[600px] p-6'>
        <Carousel images={imgs} />
      </div>
    </div>
  );
};

export default singleGallery;