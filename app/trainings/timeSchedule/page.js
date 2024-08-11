import React from 'react';

const TimeSchedule = () => {
  return (
    <div className='main-container'>
      <h1>Rozvrh hodín</h1>
      <div className='grid  grid-cols-[auto_1fr_1fr_1fr] divide-y divide-x border-b border-r'>
        <div className='p-2'>deň/čas</div>
        <div className='p-2'>15:30-16:45</div>
        <div className='p-2'>16:50-18:05</div>
        <div className='p-2'>18:05-19:20</div>
        <div className='p-2'>Po</div>
        <div className='p-2'></div>
        <div className='p-2'></div>
        <div className='p-2'></div>
        <div className='p-2'>Ut</div>
        <div className='p-2 bg-yellow-400 text-white text-center md:text-left'>
          {' '}
          Classic 1
        </div>
        <div className='p-2 bg-rose-600 text-white text-center md:text-left'>
          {' '}
          Classic 3
        </div>
        <div className='p-2'></div>
        <div className='p-2'>Str</div>
        <div className='p-2'></div>
        <div className='p-2'></div>
        <div className='p-2'></div>
        <div className='p-2'>Št</div>
        <div className='p-2'></div>
        <div className='p-2'></div>
        <div className='p-2'></div>
        <div className='p-2'>Pia</div>
        <div className='p-2 bg-yellow-400 text-white text-center md:text-left'>
          Classic 1
        </div>
        <div className='p-2 bg-purple-600 text-white text-center md:text-left'>
          Classic 2
        </div>
        <div className='p-2 bg-rose-600 text-white text-center md:text-left'>
          Classic 3
        </div>
      </div>

      <div className='flex flex-col'>
        <p className='flex gap-4 py-4 md:w-[80ch]'>
          <span className='font-bold'>Classic 1: </span> tanečná príprava
        </p>
        <p className='flex gap-4 py-4 md:w-[80ch]'>
          <span className='font-bold'>Classic 2: </span> základy klasického
          tanca
        </p>
        <p className='flex gap-4 py-4 md:w-[80ch]'>
          <span className='font-bold'>Classic 3: </span> Contemporary class,
          klasický tanec
        </p>
      </div>
    </div>
  );
};

export default TimeSchedule;
