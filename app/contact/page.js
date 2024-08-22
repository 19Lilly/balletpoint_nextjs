'use client';
import React, { Suspense } from 'react';
import Loading from './loading';


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
              <div className='flex flex-col p-4 space-y-4 border-b-2 pb-8 md:border-b-0 md:pb-0 md:p-4 '>
                <h2 className='font-bold text-2xl'>Lamač</h2>
                <Suspense fallback={<Loading />}>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5319.241521892788!2d17.05248!3d48.194658000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8d5fd4469fbf%3A0xa57bfaef1346bc5b!2zVGFuZcSNbsOhIMWha29sYSBEYW5jZXJz!5e0!3m2!1sen!2ssk!4v1724357424517!5m2!1sen!2ssk'
                    style={{ border: 0 }}
                    allowfullscreen='true'
                    loading='lazy'
                    referrerpolicy='no-referrer-when-downgrade'
                  ></iframe>
                </Suspense>
                <div>
                  <span className='font-bold'>Adresa:</span>
                  <p>Malokarpatské námestie 3</p>
                  <p>841 03 Bratislava</p>
                </div>
              </div>
              <div className='flex flex-col p-4 space-y-4'>
                <h2 className='font-bold text-2xl'>Podunajské Biskupice</h2>
                <Suspense fallback={<Loading />}>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.872579860212!2d17.206595999999998!3d48.1319806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c861c325668af%3A0xdd1ad1e520abab40!2zWsOha2xhZG7DoSDFoWtvbGEgUG9kesOhaHJhZG7DoQ!5e0!3m2!1ssk!2ssk!4v1724357744984!5m2!1ssk!2ssk'
                    style={{ border: 0 }}
                    allowfullscreen=''
                    loading='lazy'
                    referrerpolicy='no-referrer-when-downgrade'
                  ></iframe>
                </Suspense>
                <div>
                  <span className='font-bold'>Adresa:</span>
                  <p>ZŠ Podzáhradná</p>
                  <p>Podzáhradná 5233/51</p>
                  <p>821 06 Bratislava</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
