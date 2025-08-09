import React from 'react';
import MobileTimeTable from '@/components/MobileTimeTable';
import DesktopTimeTable from '@/components/DesktopTimeTable';

export const metadata = {
  title: 'Rozvrh hodín',
};

const TimeSchedule = () => {
  return (
    <div className='main-container'>
      <h1>Rozvrh hodín</h1>
      <p className='md:w-[80ch]'>
        V prípade skupín s dvoma hodinami za týždeň je hlavný deň tréningov
        <span className='font-bold'> piatok</span>. Na utorkové hodiny je možné
        sa prihlásiť len v prípade, že dieťa bude navštevovať aj piatkové
        hodiny.
      </p>
      <MobileTimeTable className='md:hidden' />
      <DesktopTimeTable className='hidden md:grid' />
      <div className='grid grid-cols-[auto_1fr] gap-3 py-2 text-left self-start'>
        <span className='font-bold'>Classic 1: </span>
        <p>tanečná príprava</p>

        <span className='font-bold'>Classic 2: </span>
        <p>Contemporary class, klasický tanec</p>

        <span className='font-bold '>Classic 3: </span>
        <p>Contemporary class, klasický tanec</p>
      </div>
    </div>
  );
};

export default TimeSchedule;
