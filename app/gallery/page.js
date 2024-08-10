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
    // {
    //   name: 'Ballet point Letný tábor 2024',
    //   url: 'balletPoint_summerCamp_2024',
    // },
    // {
    //   name: 'SND',
    //   url: 'tripToSND',
    // },
  ];

  return (
    <div className='max-w-7xl p-4 mx-auto w-full '>
      <h1 className='text-5xl font-bold py-4 flex items-center text-fuchsia-600'>
        Galéria
      </h1>
      <ul className='flex flex-col gap-6'>
        {galleryData.map(gallery => {
          return (
            <Link href={`/gallery/${gallery.url}`}>
              <li className='flex items-center gap-6 border-b-2 py-4 w-[min(30rem,98%)] hover:text-fuchsia-600'>
                <RiFolderImageLine className='size-20' />
                <h2 className='text-2xl'>{gallery.name}</h2>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Gallery;
