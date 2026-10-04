import React from 'react';

const MobileTimeTable = ({ className }) => {
  return (
    <div className={`${className} text-center space-y-4 w-full`}>
      {/* <div>
        <div className='border p-4 '>
          <p className='text-3xl font-bold'>Pondelok</p>
        </div>
        <div className='grid grid-cols-[auto_1fr] border divide-x'>
          <div className='grid grid-rows-5 divide-y'></div>
          <div className='grid grid-rows-5 divide-y'>
            <div className='p-2'></div>
            <div className='p-2'></div>
            <div className='p-2'></div>
            <div className='p-2'></div>
            <div className='p-2'></div>
          </div>
        </div>
      </div> */}
      <div>
        <div className='border p-2 '>
          <p className='text-3xl font-bold'>Utorok</p>
        </div>
        <div className='grid grid-cols-[auto_1fr] border divide-x'>
          <div className='grid grid-rows-3 divide-y'></div>
          <div className='grid grid-rows-3 divide-y'>
            <div className='p-2 flex flex-col items-center bg-gradient-to-b from-yellow-400 to-fuchsia-600 text-white'>
              <p>15:30 - 16:45</p>
              <p>Lamač</p>
              <p>Classic 1 + Classic 2</p>
              <p>Klasický tanec + Gymnastika</p>
            </div>
            <div className='p-2 flex flex-col items-center bg-gradient-to-b from-blue-600 to-rose-600 text-white'>
              <p>16:50 - 18:05</p>
              <p>Lamač</p>
              <p>Classic 3 + Classic 4</p>
              <p>Klasický tanec</p>
            </div>
            <div className='p-2 flex flex-col items-center bg-gradient-to-b from-blue-600 to-rose-600 text-white'>
              <p>18:10 - 19:25</p>
              <p>Lamač</p>
              <p>Classic 3 + Classic 4</p>
              <p>Contemporary class</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='border p-4'>
          <p className='font-bold text-3xl'>Streda</p>
        </div>
        <div className='grid grid-cols-[auto_1fr] border divide-x '>
          <div className='grid grid-rows-1 divide-y'></div>
          <div className='grid grid-rows-1 divide-y'>
            <div className='p-2 flex flex-col items-center text-white bg-fuchsia-600'>
              <p>15:30 - 16:30</p>
              <p>Lamač</p>
              <p>Classic 1</p>
              <p>Tanečná príprava</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=' border p-2'>
          <p className='font-bold text-3xl'>Štvrtok</p>
        </div>
        <div className='grid grid-cols-[auto_1fr] border divide-x'>
          <div className='grid grid-rows-3 divide-y'></div>
          <div className='grid grid-rows-3 divide-y'>
            <div className='p-2 flex flex-col items-center bg-lime-600 text-white'>
              <p>13:45 - 15:00</p>
              <p>Podunajské Biskupice</p>
              <p>Classic 2</p>
              <p>Klasický tanec</p>
            </div>
            <div className='p-2 bg-indigo-400 text-white'>
              <p>17:30-18:25</p>
              <p>Lamač</p>
              <p>Technická príprava - Gymnastika</p>
              <p>súťažné tímy</p>
            </div>
            <div className='p-2 bg-teal-500 text-white'>
              <p>18:30-19:25</p>
              <p>Lamač</p>
              <p>Ballet barre</p>
              <p>Dospelí</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=' border p-2'>
          <p className='font-bold text-3xl'>Piatok</p>
        </div>
        <div className='grid grid-cols-[auto_1fr] border divide-x'>
          <div className='grid grid-rows-3 divide-y'></div>
          <div className='grid grid-rows-3 divide-y'>
            <div className='p-2 flex flex-col items-center bg-yellow-400 text-white'>
              <p>15:30 - 16:45</p>
              <p>Lamač</p>
              <p>Classic 2</p>
              <p>Klasický tanec</p>
            </div>
            <div className='p-2 flex flex-col items-center bg-blue-600 text-white'>
              <p>16:50 - 18:05</p>
              <p>Lamač</p>
              <p>Classic 3</p>
              <p>Klasický tanec</p>
            </div>
            <div className='p-2 flex flex-col items-center bg-rose-600 text-white'>
              <p>18:10 - 19:25</p>
              <p>Lamač</p>
              <p>Classic 4</p>
              <p>Klasický tanec</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTimeTable;
