import React from 'react';

const DesktopTimeTable = ({ className }) => {
  return (
    <div
      className={`${className} md:grid-cols-[auto_1fr_1fr_1fr_1fr_1fr] divide-y divide-x border-b border-r text-center`}
    >
      <div className='p-2'>deň/čas</div>
      <div className='p-2'>13:45-15:00</div>
      <div className='p-2'>15:00-16:15</div>
      <div className='p-2'>15:30-16:45</div>
      <div className='p-2'>16:50-18:05</div>
      <div className='p-2'>18:10-19:25</div>
      <div className='p-2  font-bold'>Po</div>
      <div className='p-2'></div>
      <div className='p-2'></div>
      <div className='p-2'></div>
      <div className='p-2'></div>
      <div className='p-2'></div>
      <div className='p-2 flex flex-col items-center justify-center '>
        <p className='font-bold'>Ut</p>
        <p>Lamač</p>
      </div>
      <div className='p-2'></div>
      <div className='p-2'></div>
      <div className='p-2 bg-yellow-400 text-white  flex flex-col items-cente justify-center'>
        <p>Classic 1 + Classic 2</p>
        <p>Klasický tanec + Gymnastika</p>
      </div>
      <div className='p-2 bg-gradient-to-b from-blue-600 to-rose-600 text-white  flex flex-col items-center justify-center'>
        <p>Classic 3 + Classic 4</p>
        <p>Klasický tanec</p>
      </div>
      <div className='p-2 bg-gradient-to-b from-blue-600 to-rose-600 text-white  flex flex-col items-center justify-center'>
        <p>Classic 3 + Classic 4</p>
        <p>Contemporary class</p>
      </div>

      <div className='p-2  font-bold'>Str</div>
      <div className='p-2'></div>
      <div className='p-2'></div>
      <div className='p-2'></div>
      <div className='p-2'></div>
      <div className='p-2'></div>
      <div className='p-2 flex flex-col items-center '>
        <p className='font-bold'>Št</p>
        <p>P. Biskupice</p>
      </div>
      <div className='p-2 bg-gradient-to-b from-lime-600 to-violet-600 text-white flex flex-col items-center '>
        <p>Classic 1 + Classic 2</p>
        <p>Klasický tanec</p>
      </div>
      <div className='p-2'></div>
      <div className='p-2'></div>
      <div className='p-2'></div>
      <div className='p-2'></div>
      <div className='p-2 flex flex-col items-center '>
        <p className='font-bold'>Pia</p>
        <p>Lamač</p>
      </div>
      <div className='p-2'></div>
      <div className='p-2'></div>
      <div className='p-2 bg-yellow-400 text-white  flex flex-col items-center'>
        <p>Classic 1 + Classic 2</p>
        <p>Klasický tanec</p>
      </div>
      <div className='p-2 bg-blue-600 text-white  flex flex-col items-center'>
        <p>Classic 3</p>
        <p>Klasický tanec</p>
      </div>
      <div className='p-2 bg-rose-600 text-white  flex flex-col items-center'>
        <p>Classic 4</p>
        <p>Klasický tanec</p>
      </div>
    </div>
  );
};

export default DesktopTimeTable;
