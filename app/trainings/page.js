import React, { useId } from 'react';

import OrganizationInfo from '@/components/OrganizationInfo';

export const metadata = {
  title: 'Tréningy - informácie šk.rok 2025/2026',
};

const Trainings = () => {
  return (
    <div className='main-container'>
      <h1>Info - školský rok 2025/2026</h1>

      {/* <p className='md:w-[80ch] text-pretty'>
        Aktuálne prebieha zápis do baletnej školy pre školský rok 2025/2026.
        Noví žiaci budú prijímaní od 2.9.2025. Pre viac informácii ohľadne
        prihlášky nás kontaktujte na emailovej adrese:
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
      </p> */}

      <p className='font-bold'>Začiatok šk. roka: </p>
      <ul>
        <li>Lamač - september 2025</li>
        <li>ZŠ Podzáhradná - október 2025</li>
      </ul>

      <OrganizationInfo />
    </div>
  );
};

export default Trainings;
