'use client';

import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { TiArrowBackOutline } from 'react-icons/ti';
import Link from 'next/link';

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
      url: 'balletPoint_summerCamp2024',
      src: '/images/balletPoint_SummerCamp2024',
      numbers: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
      ],
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
    <div className='main-container relative'>
      <h2 className=' flex justify-between gap-6 flex-wrap'>
        <span className='text-5xl font-bold text-fuchsia-600 py-4'>
          {title}
        </span>
        <Link
          href='/gallery'
          className='hover:text-fuchsia-600 hover:scale-110 flex items-center gap-2'
        >
          <TiArrowBackOutline />
          Späť na zoznam
        </Link>
      </h2>
      <div className='w-[min(70rem,98%)] h-[1000px] mx-auto'>
        <Carousel images={imgs} isMaximized={true} />
      </div>
    </div>
  );
};

export default singleGallery;
