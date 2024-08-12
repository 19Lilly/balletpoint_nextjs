'use client';
import React from 'react';
import Link from 'next/link';
import { RiFolderImageLine } from 'react-icons/ri';

const Gallery = () => {
  const galleryData = [
    {
      name: 'Naše hodiny',
      url: 'ourClasses',
    },
    {
      name: 'Záverečný koncert - 30.6.2024',
      url: 'finalConcert_30_6_2024',
    },
    {
      name: 'Ballet point - Letný tábor 2024',
      url: 'balletPoint_summerCamp2024',
    },
    {
      name: 'SND - Narodil sa chrobáčik a Rukopisy majstrov galéria',
      url: 'tripToSND',
    },
  ];

  return (
    <div className='main-container'>
      <h1>Galéria</h1>
      <ul className='grid md:grid-cols-2'>
        {galleryData.map(gallery => {
          return (
            <Link href={`/gallery/${gallery.url}`}>
              <li className='grid grid-cols-3 border-b-2 p-4 w-[min(30rem,98%)] hover:text-fuchsia-600'>
                <RiFolderImageLine className='size-20 col-span-1' />
                <h2 className='text-2xl col-span-2 self-center'>
                  {gallery.name}
                </h2>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Gallery;
