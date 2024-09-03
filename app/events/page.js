import React from 'react';
import { eventsData } from '@/app/data';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

export const metadata = {
  title: 'Podujatia',
};

const Events = () => {
  return (
    <div className='main-container '>
      <h1>Podujatia</h1>
      <p className='w-[80ch]'>
        Ballent point Vás srdečne pozýva na vystúpenia naších baletiek.
        Najbližšie podujatia na ktorých vystúpime môžete nájsť nižšie.{' '}
      </p>

      {eventsData.map(
        ({ id, date, time, title, place, url, img, participate }) => {
          return (
            <div
              key={id}
              className='grid md:grid-cols-[auto_1fr] gap-6 p-4 text-left '
            >
              <Image src={img} width={200} height={300} className='border ' />
              <div className=''>
                <p>
                  <span className='font-bold'>Názov:</span> {title}
                </p>
                <p>
                  <span className='font-bold'>Dátum:</span> {date}
                </p>
                <p>
                  <span className='font-bold'>Čas konania:</span> {time}
                </p>
                <p>
                  <span className='font-bold'>Vystupujú:</span>
                  {participate.map(p => p)}
                </p>
                <p>
                  <span className='font-bold'>Miesto konanie:</span> {place}
                </p>
                <a
                  href={url}
                  target='_blank'
                  className='border border-zinc-500 p-2 rounded-xl flex items-center gap-2 w-fit mt-3 hover:text-fuchsia-600 hover:border-fuchsia-600'
                >
                  Viac o akcii <FaArrowRight />
                </a>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Events;
