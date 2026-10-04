import React from 'react';

const DesktopTimeTable = ({ className }) => {
  return (
    <div
      className={`${className} md:grid-cols-[auto_1fr_1fr_1fr_1fr_1fr] divide-y divide-x border-b border-r text-center`}
    >
      <div className='p-2  font-bold'>Po</div>
      <div className='p-2'></div>
      <div className='p-2'></div>
      <div className='p-2'></div>
      <div className='p-2'></div>
      <div className='p-2'></div>
      <div className='p-2 flex flex-col items-center justify-center '>
        <p className='font-bold'>Ut</p>
      </div>
      <div className='p-2'></div>
      <div className='p-2'></div>
      <div className='p-2 bg-gradient-to-b from-yellow-400 to-fuchsia-600 text-white  flex flex-col items-center justify-center'>
        <p>15:30 - 16:45</p>
        <p>Lamač</p>
        <p>Classic 1 + Classic 2</p>
        <p className='text-sm'>Klasický tanec + Gymnastika</p>
      </div>
      <div className='p-2 bg-gradient-to-b from-blue-600 to-rose-600 text-white  flex flex-col items-center justify-center'>
        <p>16:50 - 18:05</p>
        <p>Lamač</p>
        <p>Classic 3 + Classic 4</p>
        <p>Klasický tanec</p>
      </div>
      <div className='p-2 bg-gradient-to-b from-blue-600 to-rose-600 text-white  flex flex-col items-center justify-center'>
        <p>18:10 - 19:25</p>
        <p>Lamač</p>
        <p>Classic 3 + Classic 4</p>
        <p>Contemporary class</p>
      </div>

      <div className='p-2  font-bold'>Str</div>
      <div className='p-2'></div>
      <div className='p-2'></div>
      <div className='p-2 bg-fuchsia-600 text-white flex flex-col items-center justify-center '>
        <p>15:30-16:30</p>
        <p>Lamač</p>
        <p>Classic 1</p>
        <p>Tanečná príprava</p>
      </div>
      <div className='p-2'></div>
      <div className='p-2'></div>
      <div className='p-2 flex flex-col items-center '>
        <p className='font-bold'>Št</p>
      </div>
      <div className='p-2 bg-lime-600  text-white flex flex-col items-center '>
        <p>13:45-15:00</p>
        <p>P. Biskupice</p>
        <p>Classic 2</p>
        <p>Klasický tanec</p>
      </div>
      <div className='p-2'></div>
      <div className='p-2'></div>
      <div className='p-2 bg-indigo-400 text-white'>
        <p>17:30-18:25</p>
        <p>Lamač</p>
        <p className='text-sm'>Technická príprava - Gymnastika</p>
        <p>súťažné tímy</p>
      </div>
      <div className='p-2 bg-teal-500 text-white'>
        <p>18:30-19:25</p>
        <p>Lamač</p>
        <p>Ballet barre</p>
        <p>Dospelí</p>
      </div>
      <div className='p-2 flex flex-col items-center '>
        <p className='font-bold'>Pia</p>
      </div>
      <div className='p-2'></div>
      <div className='p-2'></div>
      <div className='p-2 bg-yellow-400 text-white  flex flex-col items-center'>
        <p>15:30 - 16:45</p>
        <p>Lamač</p>
        <p>Classic 2</p>
        <p>Klasický tanec</p>
      </div>
      <div className='p-2 bg-blue-600 text-white  flex flex-col items-center'>
        <p>16:50 - 18:05</p>
        <p>Lamač</p>
        <p>Classic 3</p>
        <p>Klasický tanec</p>
      </div>
      <div className='p-2 bg-rose-600 text-white  flex flex-col items-center'>
        <p>18:10 - 19:25</p>
        <p>Lamač</p>
        <p>Classic 4</p>
        <p>Klasický tanec</p>
      </div>
    </div>
  );
};

export default DesktopTimeTable;
