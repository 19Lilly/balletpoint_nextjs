import React from 'react';
import Image from 'next/image';
import poster from '/public/images/zapis.jpg';

export const metadata = {
  title: 'Zápis v školskokm roku 2024/2025',
};

const Registration = () => {
  return (
    <div className='main-container'>
      <h1>Zápis v školskom roku 2024/2025</h1>
      <p className='md:max-w-[80ch] text-pretty'>
        Aktuálne prebieha zápis do baletnej školy pre školský rok 2024/2025. Pre
        viac informácii ohľadne prihlášky nás kontaktujte na emaile
        <a
          href='mailto:info@balletpoint.sk'
          className='underline underline-offset-2 hover:text-fuchsia-600'
        >
          info@balletpoint.sk
        </a>
        alebo na telefónnom čísle
        <a
          href='tel:+421949757911'
          className='hover:text-fuchsia-600 underline underline-offset-2'
        >
          +421 949 757 911
        </a>
      </p>

      <div className='main-container flex items-center justify-center mx-auto'>
        <Image
          src={poster}
          width={700}
          height={500}
          alt='Plagát s informáciami o zápise do baletnej školy pre školský rok 2024/2025'
        />
      </div>
    </div>
  );
};

export default Registration;
