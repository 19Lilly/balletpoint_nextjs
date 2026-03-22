
import poster from '/public/images/summerCamp2026.jpeg';
import poster1 from '/public/images/summerCamp2026_1.jpeg';
import Image from 'next/image'
import React from 'react'
// import summerCamp2026 from './page';

const summerCamp2026 = () => {

return (
  <div className='main-container'>
    <h1 className=''>Letný tábor 2026</h1>
    <p>
      Prihlasovanie:
      <a
        href='mailto:info@balletpoint.sk'
        className='underline underline-offset-2 hover:text-[#cca300] px-2'
      >
        info@balletpoint.sk
      </a>
    </p>
    <img
      src='/images/payBySquareSummerCamp2026.jpeg'
      alt='pay by square image'
      className='aspect-square size-28 mt-4 mx-auto md:mx-0'
    />
    <div className='flex flex-col md:flex-row'>
      <Image
        src={poster}
        width={500}
        height={300}
        alt='Plagát s informáciami o letnom tábore'
      />
      <Image
        src={poster1}
        width={500}
        height={300}
        alt='Plagát s informáciami o letnom tábore'
      />
    </div>
  </div>
);

}


export default summerCamp2026