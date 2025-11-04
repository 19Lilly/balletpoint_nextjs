import React from 'react';

import 'react-gallery-carousel/dist/index.css';
import { TiArrowBackOutline } from 'react-icons/ti';
import Link from 'next/link';
import { galleryData } from '@/app/data';
import CarouselComponent from '@/components/CarouselComponent';



const SingleGallery = ({ params }) => {
  const [{ title, url, numbers }] = galleryData.filter(
    gallery => gallery.url === params.name
  );

  const imgs = numbers.map(number => ({
    src: `/images/${url}/${url}_${number}.jpg`,
  }));

  return (
    <div className='main-container relative'>
      <h2 className='flex flex-wrap justify-between w-full'>
        <span className='text-5xl font-bold text-[#cca300] py-4'>{title}</span>
        <Link
          href='/gallery'
          className='hover:text-[#cca300] hover:scale-110 flex items-center gap-2 '
        >
          <TiArrowBackOutline />
          Späť na zoznam
        </Link>
      </h2>
      <div className='w-[min(70rem,98%)] h-[1000px] mx-auto'>
        {imgs.length > 0 ? (
          <CarouselComponent images={imgs} />
        ) : (
          <h2>Pripravujeme...</h2>
        )}
      </div>
    </div>
  );
};

export default SingleGallery;
