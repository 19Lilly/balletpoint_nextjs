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
      <h1>Zápis v školskom roku 2026/2027</h1>
      <p className='md:w-[80ch] text-pretty'>
        Zápis do baletnej školy pre školský rok 2026/2027 bude prebiehať od
        prvého septembrového týždňa. Na skúšobnú hodinu je potrebné sa prihlásiť
        na emailovej adrese:
        <a
          href='mailto:info@balletpoint.sk'
          className='font-bold underline underline-offset-2 hover:text-[#cca300] px-2'
        >
          info@balletpoint.sk
        </a>
      </p>
      <p>Tešíme sa na Vás</p>
      <p>Ballet point</p>

      {/* <div className='main-container flex items-center justify-center mx-auto'>
        <Image
          src={poster}
          width={700}
          height={500}
          alt='Plagát s informáciami o zápise do baletnej školy pre školský rok 2025/2026'
        />
      </div> */}
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
