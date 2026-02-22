
import poster from '/public/images/workshop.jpeg';
import poster1 from '/public/images/workshop1.jpeg';
import Image from 'next/image'
import React from 'react'


const Workshop = () => {
  return (
    <div className='main-container'>
      <h1 className=''>Workshop</h1>
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
        src='/images/payBySquareWorkshop.jpeg'
        alt='pay by square image'
        className='aspect-square size-28 mt-4 mx-auto md:mx-0'
      />
      <div className='flex flex-col md:flex-row'>
        <Image
          src={poster}
          width={500}
          height={300}
          alt='Plagát s informáciami o workshope'
        />
        <Image
          src={poster1}
          width={500}
          height={300}
          alt='Plagát s informáciami o workshope'
        />
      </div>
      <video controls autoPlay muted loop height={700}>
        <source src='/videos/workshop.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Workshop;