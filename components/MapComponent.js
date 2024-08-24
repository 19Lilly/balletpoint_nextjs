'use client';
import React, { Suspense } from 'react';
import { contactData } from '@/app/data';
import Loading from '@/app/contact/loading';

const MapComponent = ({ name }) => {
  const [
    {
      title,
      src,
      adresa: { nazov, ulica, psč, mesto },
    },
  ] = contactData.filter(contact => contact.title === name);

  return (
    <div className='flex flex-col p-4 space-y-4 border-b-2 pb-8 md:border-b-0 md:pb-0 md:p-4 '>
      <h2 className='font-bold text-2xl'>{title}</h2>
      <Suspense fallback={<Loading />}>
        <iframe
          src={src}
          style={{ border: 0 }}
          allowFullScreen='true'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </Suspense>
      <div>
        <span className='font-bold'>Adresa:</span>
        {nazov ? <p>{nazov}</p> : null}
        <p>{ulica}</p>
        <p>
          {psč} {mesto}
        </p>
      </div>
    </div>
  );
};

export default MapComponent;
