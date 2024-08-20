import React from 'react';
import MobileTimeTable from '@/components/MobileTimeTable';
import DesktopTimeTable from '@/components/DesktopTimeTable';

export const metadata = {
  title: 'Rozvrh hodín',
  descritpion: 'Prehľad rozvrhu hodín pre jednotlivé skupiny baletiek.',
};

const TimeSchedule = () => {
  return (
    <div className='main-container'>
      <h1>Rozvrh hodín</h1>
      <MobileTimeTable className='md:hidden' />
      <DesktopTimeTable className='hidden md:grid' />
      <div className='grid grid-cols-[auto_1fr] gap-3 py-2'>
        <span className='font-bold'>Classic 1: </span>
        <p>tanečná príprava</p>

        <span className='font-bold'>Classic 2: </span>
        <p>základy klasického tanca</p>

        <span className='font-bold '>Classic 3: </span>
        <p>Contemporary class, klasický tanec</p>
      </div>
    </div>
  );
};

export default TimeSchedule;
