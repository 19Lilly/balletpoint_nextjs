'use client';
import React, { Suspense } from 'react';
import Loading from './loading';


const Contact = () => {
  return (
    <div className=' main-container'>
      <h1>Kontakt</h1>
      <div className='grid md:grid-cols-2 md:gap-6 p-4 w-full'>
        <Suspense fallback={<Loading />}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.620582012551!2d17.04990547702154!3d48.19466144718453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8d5fd4469fbf%3A0xa57bfaef1346bc5b!2zVGFuZcSNbsOhIMWha29sYSBEYW5jZXJz!5e0!3m2!1sen!2ssk!4v1717015128744!5m2!1sen!2ssk'
            style={{ border: 0 }}
            allowFullScreen='true'
            className='border size-full'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </Suspense>
        <div>
          <div className='flex flex-col text-xl justify-center'>
            <div className='flex gap-4 p-4 border-b-2 flex-wrap'>
              <span className='font-bold'>Prevádzkovateľ:</span>
              <p>Ballet point o.z.</p>
            </div>
            <div className='flex flex-wrap gap-4 p-4 border-b-2'>
              <span className='font-bold'>Adresa:</span>
              <div>
                <p>Malokarpatské námestie 3</p>
                <p>Bratislava</p>
              </div>
            </div>

            <div className='flex gap-4 p-4 border-b-2'>
              <span className='font-bold'>IČO: </span>
              <p>56307446</p>
            </div>
            <div className='space-x-4 p-4 border-b-2'>
              <span className='font-bold'>Mobil: </span>
              <a
                href='tel:+421949757911'
                className='hover:text-fuchsia-600 underline underline-offset-2'
              >
                +421 949 757 911
              </a>
            </div>
            <div className='space-x-4 p-4 border-b-2'>
              <span className='font-bold'>Email: </span>
              <a
                href='mailto:info@balletpoint.sk'
                className='underline underline-offset-2 hover:text-fuchsia-600'
              >
                info@balletpoint.sk
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
