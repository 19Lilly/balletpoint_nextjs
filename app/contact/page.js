import React from 'react';
import MapComponent from '@/components/MapComponent';

export const metadata = {
  title: 'Kontakt',
};

const Contact = () => {
  return (
    <div className=' main-container'>
      <h1>Kontakt</h1>
      <div className='p-4 w-full'>
        <div>
          <div className='flex flex-col text-xl justify-center'>
            <div className='flex gap-4 p-4 border-b-2 md:w-[25rem]'>
              <span className='font-bold'>Prevádzkovateľ:</span>
              <p>Ballet point o.z.</p>
            </div>
            <div className='flex gap-4 p-4 border-b-2 md:w-[25rem]'>
              <span className='font-bold'>IČO: </span>
              <p>56307446</p>
            </div>
            <div className='flex gap-4 p-4 border-b-2 md:w-[25rem]'>
              <span className='font-bold'>Mobil: </span>
              <a
                href='tel:+421949757911'
                className='hover:text-fuchsia-600 underline underline-offset-2'
              >
                +421 949 757 911
              </a>
            </div>
            <div className='flex gap-4 p-4 border-b-2 md:w-[25rem]'>
              <span className='font-bold'>Email: </span>
              <a
                href='mailto:info@balletpoint.sk'
                className='underline underline-offset-2 hover:text-fuchsia-600'
              >
                info@balletpoint.sk
              </a>
            </div>
            <div className='grid md:grid-cols-2 gap-4 p-4 border-b-2'>
              <MapComponent name='Lamač' />
              <MapComponent name='Podunajské Biskupice' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
