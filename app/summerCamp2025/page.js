import React from 'react';
import Image from 'next/image';
import poster from '/public/images/dennyLetnyTabor2025.jpg';

export const metadata = {
  title: 'Denný letný tábor 2025',
};

const SummerCamp2025 = () => {
  return (
    <div className='main-container'>
      <h1>Ballet point - denný letný tábor 2025</h1>
      <p className='md:w-[80ch] text-pretty'>
       Formulár pre zápis do denného letného tábora na vyžiadanie na emailovej adrese:
        <a
          href='mailto:info@balletpoint.sk'
          className='font-bold underline underline-offset-2 hover:text-fuchsia-600 px-2'
        >
          info@balletpoint.sk
        </a>
        alebo na telefónnom čísle:
        <a
          href='tel:+421949757911'
          className='hover:text-fuchsia-600 font-bold underline underline-offset-2 px-2'
        >
          +421 949 757 911
        </a>
        .
      </p>

      <div className='main-container flex items-center justify-center mx-auto'>
        <Image
          src={poster}
          width={700}
          height={500}
          alt='Plagát s informáciami o dennom letnom tábore 2025'
        />
      </div>
    </div>
  );
};

export default SummerCamp2025;
