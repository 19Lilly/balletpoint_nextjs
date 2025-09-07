import React from 'react';

const MobileTimeTable = ({ className }) => {
  return (
    <div className={`${className} text-center space-y-4 w-full`}>
      <div>
        <div className='border p-4 '>
          <p className='text-3xl font-bold'>Pondelok</p>
        </div>
        <div className='grid grid-cols-[auto_1fr] border divide-x'>
          <div className='grid grid-rows-5 divide-y'>
            <div className='p-2 place-content-center'>13:45 - 15:00</div>
            <div className='p-2 place-content-center'>15:00 - 16:15</div>
            <div className='p-2 place-content-center'>15:30 - 16:45</div>
            <div className='p-2 place-content-center'>16:50 - 18:05</div>
            <div className='p-2 place-content-center'>18:10 - 19:25</div>
          </div>
          <div className='grid grid-rows-5 divide-y'>
            <div className='p-2'></div>
            <div className='p-2'></div>
            <div className='p-2'></div>
            <div className='p-2'></div>
            <div className='p-2'></div>
          </div>
        </div>
      </div>
      <div>
        <div className='border p-2 '>
          <p className='text-3xl font-bold'>Utorok</p>
          <p>Lamač</p>
        </div>
        <div className='grid grid-cols-[auto_1fr] border divide-x'>
          <div className='grid grid-rows-5 divide-y'>
            <div className='p-2 place-content-center'>13:45 - 15:00</div>
            <div className='p-2 place-content-center'>15:00 - 16:15</div>
            <div className='p-2 place-content-center'>15:30 - 16:45</div>
            <div className='p-2 place-content-center'>16:50 - 18:05</div>
            <div className='p-2 place-content-center'>18:10 - 19:25</div>
          </div>
          <div className='grid grid-rows-5 divide-y'>
            <div className='p-2'></div>
            <div className='p-2'></div>
            <div className='p-2 flex flex-col items-center bg-yellow-400 text-white'>
              <p>Classic 1</p>
              <p>Klasický tanec + Gymnastika</p>
            </div>
            <div className='p-2 flex flex-col items-center bg-gradient-to-b from-blue-600 to-rose-600 text-white'>
              <p>Classic 2 + Classic 3</p>
              <p>Klasický tanec</p>
            </div>
            <div className='p-2 flex flex-col items-center bg-gradient-to-b from-blue-600 to-rose-600 text-white'>
              <p>Classic 2 + Classic 3</p>
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
          <div className='grid grid-rows-4 divide-y'>
            <div className='p-2 place-content-center'>13:45 - 15:00</div>
            <div className='p-2 place-content-center'>15:00 - 16:15</div>
            <div className='p-2 place-content-center'>15:30 - 16:45</div>
            <div className='p-2 place-content-center'>16:50 - 18:05</div>
            <div className='p-2 place-content-center'>18:10 - 19:25</div>
          </div>
          <div className='grid grid-rows-5 divide-y'>
            <div className='p-2'></div>
            <div className='p-2'></div>
            <div className='p-2'></div>
            <div className='p-2'></div>
            <div className='p-2'></div>
          </div>
        </div>
      </div>
      <div>
        <div className=' border p-2'>
          <p className='font-bold text-3xl'>Štvrtok</p>
          <p>Podunajské Biskupice</p>
        </div>
        <div className='grid grid-cols-[auto_1fr] border divide-x'>
          <div className='grid grid-rows-5 divide-y'>
            <div className='p-2 place-content-center'>13:45 - 15:00</div>
            <div className='p-2 place-content-center'>15:00 - 16:15</div>
            <div className='p-2 place-content-center'>15:30 - 16:45</div>
            <div className='p-2 place-content-center'>16:50 - 18:05</div>
            <div className='p-2 place-content-center'>18:10 - 19:25</div>
          </div>
          <div className='grid grid-rows-5 divide-y'>
            <div className='p-2 flex flex-col items-center bg-gradient-to-b from-lime-600 to-violet-600 text-white'>
              <p>Classic 1 + Classic 2</p>
              <p>Klasický tanec</p>
            </div>
            <div className='p-2'></div>
            <div className='p-2'></div>
            <div className='p-2'></div>
            <div className='p-2'></div>
          </div>
        </div>
      </div>
      <div>
        <div className=' border p-2'>
          <p className='font-bold text-3xl'>Piatok</p>
          <p>Lamač</p>
        </div>
        <div className='grid grid-cols-[auto_1fr] border divide-x'>
          <div className='grid grid-rows-5 divide-y'>
            <div className='p-2 place-content-center'>13:45 - 15:00</div>
            <div className='p-2 place-content-center'>15:00 - 16:15</div>
            <div className='p-2 place-content-center'>15:30 - 16:45</div>
            <div className='p-2 place-content-center'>16:50 - 18:05</div>
            <div className='p-2 place-content-center'>18:10 - 19:25</div>
          </div>
          <div className='grid grid-rows-5 divide-y'>
            <div className='p-2'></div>
            <div className='p-2'></div>
            <div className='p-2 flex flex-col items-center bg-yellow-400 text-white'>
              <p>Classic 1</p>
              <p>Klasický tanec</p>
            </div>
            <div className='p-2 flex flex-col items-center bg-blue-600 text-white'>
              <p>Classic 2</p>
              <p>Klasický tanec</p>
            </div>
            <div className='p-2 flex flex-col items-center bg-rose-600 text-white'>
              <p>Classic 3</p>
              <p>Klasický tanec</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTimeTable;
