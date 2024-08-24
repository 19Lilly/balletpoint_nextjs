import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { galleryData } from '../data';

export const metadata = {
  title: 'Galéria',
};

const Gallery = () => {
  return (
    <div className='main-container'>
      <h1>Galéria</h1>
      <ul className='grid md:grid-cols-2'>
        {galleryData.map(({ id, title, url }) => {
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
                  alt={`Zmenšený obrázok z galérie ${title}`}
                />
                <h2 className='text-2xl col-span-2 self-center'>{title}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Gallery;
