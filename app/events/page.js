import React from 'react';
import { eventsData } from '@/app/data';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

export const metadata = {
  title: 'Podujatia',
};

const Events = () => {
  return (
    <div className='main-container'>
      <h1>Podujatia</h1>
      <p className='text-pretty md:w-[80ch]'>
        Najbližšie podujatia na ktorých nás môžete vidieť.
      </p>

      {eventsData.map(
        ({ id, date, time, title, place, url, img, participate, active, urlGallery }) => {
          return (
            <div
              key={id}
              className='grid md:grid-cols-[auto_1fr] gap-6 p-4 text-left '
            >
              <Image
                src={img}
                width={200}
                height={300}
                className={`border mx-auto md:mx-0 ${
                  active ? 'opacity-100' : 'opacity-50'
                }`}
              />
              <div className={active ? 'text-black' : 'text-zinc-400'}>
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
                  <span className='font-bold'>Vystupujú: </span>
                  {participate.map(p => p)}
                </p>
                <p>
                  <span className='font-bold'>Miesto konanie:</span> {place}
                </p>
                <a
                  href={active ? url : urlGallery}
                  target='_blank'
                  className=' text-black border border-zinc-500 p-2 rounded-xl flex items-center gap-2 w-fit mt-3 hover:text-fuchsia-600 hover:border-fuchsia-600'
                >
                  {active ? 'Viac o akcii' : 'Pozrieť fotogalériu z akcie'}{' '}
                  <FaArrowRight />
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
