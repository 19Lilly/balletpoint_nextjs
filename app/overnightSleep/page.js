
import poster from '/public/images/overnightSleep.jpeg';
import Image from 'next/image'
import React from 'react'

const OvernightSleep = () => {
    return (
      <div className='main-container'>
        <h1>Prespávačka</h1>
        <p>
          <span className='font-bold'>Prihlasovanie:</span>
          <a
            href='mailto:info@balletpoint.sk'
            className='underline underline-offset-2 hover:text-[#cca300] px-2'
          >
            info@balletpoint.sk
          </a>
        </p>
            <div className='flex flex-col md:flex-row gap-4 '>
                
          <div className='flex flex-col gap-2 items-center'>
            <h2 className='font-bold'> Platba s prespatím:</h2>
            <img
              src='/images/QR_overnightSleep_yes.jpeg'
              alt='pay by square image'
              className='aspect-square size-28 mt-4 mx-auto md:mx-0'
            />
          </div>
          <div className='flex flex-col gap-2 items-center'>
            <h2 className='font-bold'>Platba bez prespatia:</h2>
            <img
              src='/images/QR_overnightSleep_no.jpeg'
              alt='pay by square image'
              className='aspect-square size-28 mt-4 mx-auto md:mx-0'
            />
          </div>
        </div>
      
        <div>
          <Image
            src={poster}
            width={500}
            height={300}
            alt='Plagát s informáciami o letnom tábore'
          />
        </div>
      </div>
    );
}

export default OvernightSleep;