'use client';
import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { TiArrowBackOutline } from 'react-icons/ti';
import Link from 'next/link';
import { galleryData } from '@/app/data';

const SingleGallery = ({ params }) => {
  const [{ title, url, numbers }] = galleryData.filter(
    gallery => gallery.url === params.name
  );

  const imgs = numbers.map(number => ({
    src: `/images/${url}/${url}_${number}.jpg`,
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

export default SingleGallery;
