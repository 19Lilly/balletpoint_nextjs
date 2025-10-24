import React from 'react';
import Image from 'next/image';
import poster from '/public/images/zapis_25_26.jpg';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Zápis v školskokm roku 2025/2026',
};

const Registration = () => {
  return (
    <div className='main-container'>
      <h1>Zápis v školskom roku 2025/2026</h1>
      <p className='md:w-[80ch] text-pretty'>
        Aktuálne prebieha zápis do baletnej školy pre školský rok 2025/2026. Pre
        viac informácii ohľadne prihlášky alebo skúšobnej hodiny nás kontaktujte
        na emailovej adrese:
        <a
          href='mailto:info@balletpoint.sk'
          className='font-bold underline underline-offset-2 hover:text-[#cca300] px-2'
        >
          info@balletpoint.sk
        </a>
        alebo na telefónnom čísle:
        <a
          href='tel:+421949757911'
          className='hover:text-[#cca300] font-bold underline underline-offset-2 px-2'
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
          alt='Plagát s informáciami o zápise do baletnej školy pre školský rok 2025/2026'
        />
      </div>
      <Link
        href='/trainings'
        className='flex gap-2 items-center justify-center hover:text-[#cca300] hover:border-[#cca300] border-2 rounded-full py-2 px-6'
      >
        Viac info <ArrowRight />
      </Link>
    </div>
  );
};

export default Registration;
