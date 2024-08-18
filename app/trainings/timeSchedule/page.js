import React from 'react';

export const metadata = {
  title: 'Rozvrh hodín',
  descritpion: 'Prehľad rozvrhu hodín pre jednotlivé skupiny baletiek.',
};

const TimeSchedule = () => {
  return (
    <div className='main-container'>
      <h1>Rozvrh hodín</h1>
      <div className='grid  grid-cols-[auto_1fr_1fr_1fr] divide-y divide-x border-b border-r'>
        <div className='p-2'>deň/čas</div>
        <div className='p-2'>15:30-16:45</div>
        <div className='p-2'>16:50-18:05</div>
        <div className='p-2'>18:10-19:25</div>
        <div className='p-2'>Po</div>
        <div className='p-2'></div>
        <div className='p-2'></div>
        <div className='p-2'></div>
        <div className='p-2'>Ut</div>
        <div className='p-2 bg-yellow-400 text-white text-center md:text-left'>
          Classic 1
        </div>
        <div className='p-2 bg-rose-600 text-white text-center md:text-left'>
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
}

export default TimeSchedule;
