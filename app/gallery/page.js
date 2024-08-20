'use client';
import React, { useId } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Gallery = () => {
  const galleryData = [
    {
      id: useId(),
      name: 'Naše hodiny',
      url: 'ourClasses',
    },
    {
      id: useId(),
      name: 'Záverečný koncert - 30.6.2024',
      url: 'finalConcert_30_6_2024',
    },
    {
      id: useId(),
      name: 'Ballet point - Letný tábor 2024',
      url: 'balletPoint_summerCamp2024',
    },
    {
      id: useId(),
      name: 'SND - Narodil sa chrobáčik a Rukopisy majstrov galéria',
      url: 'tripToSND',
    },
  ];

  return (
    <div className='main-container'>
      <h1>Galéria</h1>
      <ul className='grid md:grid-cols-2'>
        {galleryData.map(({ id, name, url }) => {
          return (
            <li key={id}>
              <Link
                href={`/gallery/${url}`}
                className='grid grid-cols-3 gap-4 border-b-2 p-4 w-[min(30rem,98%)] hover:text-fuchsia-600'
              >
                <Image
                  src={`/images/${url}/thumbnail.jpg`}
                  width={250}
                  height={250}
                  alt={`Zmenšený obrázok z galérie ${name}`}
                />
                <h2 className='text-2xl col-span-2 self-center'>{name}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Gallery;
