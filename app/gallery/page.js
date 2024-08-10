'use client';
import React from 'react';
import Link from 'next/link';

const Gallery = () => {
  const galleryData = [
    {
      name: 'Naše hodiny',
      url: 'ourClasses',
      src: '/public/images/Our classes',
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      name: 'Záverečný koncert - 30.6.2024',
      url: 'finalConcert_30_6_2024',
      src: '/public/images/Final concert - 30.6.2024',
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },
    {
      name: 'Ballet point Letný tábor 2024',
      url: 'balletPoint_summerCamp_2024',
      src: '/public/images/Ballet point summer camp 2024',
      numbers: [],
    },
    {
      name: 'SND',
      url: 'tripToSND',
      src: '/public/images/trip to SND',
      numbers: [],
    },
  ];

  return (
    <div className='max-w-7xl p-4 mx-auto w-full '>
      <ul>
        {galleryData.map(gallery => {
          return (
            <Link href={`/gallery/${gallery.url}`}>
              <h2>{gallery.name}</h2>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Gallery;
