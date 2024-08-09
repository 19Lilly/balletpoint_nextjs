'use client';

import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const Gallery = () => {
  const galleryData = [
    {
      name: 'Naše hodiny',
      src: '/src/',
      numbers: [],
    },
    {
      name: 'Záverečný koncert - 30.6.2024',
      src: '',
      numbers: [],
    },
    {
      name: 'Ballet point Letný tábor 2024',
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

  // return (
  //   <div>
  //     <ul>
  //       {galleryData.map(gallery => {
  //         return (
  //           <Link>
  //             <h2>{gallery.name}</h2>
  //           </Link>
  //         );
  //       })}
  //     </ul>
  //   </div>
  // );

  return (
    <div className='mx-auto max-w-7xl w-full flex justify-center carousel-container text-black '>
      <Carousel images={images} className='size-cover' />
    </div>
  );
};

export default Gallery;
