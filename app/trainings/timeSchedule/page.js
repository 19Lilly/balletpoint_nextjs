import React from 'react';

const TimeSchedule = () => {
  return (
    <div className='max-w-7xl mx-auto space-y-6'>
      <h1 className='text-5xl text-fuchsia-600 font-bold'>Rozvrh hodín</h1>
      <div className='grid  grid-cols-[auto_1fr_1fr_1fr] border divide-y divide-x'>
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
    </div>
  );
};

export default TimeSchedule;
