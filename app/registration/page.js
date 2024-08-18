import React from 'react';
import Image from 'next/image';
import poster from '/public/images/zapis.jpg';

export const metadata = {
  title: 'Zápis - šk.rok 2024/2025',
  description: 'Pozvánka na zápis do baletnej školy v rôznych skupinách.',
};


const Registration = () => {
  return (
    <div className='main-container'>
      <h1>Zápis v školskom roku 2024/2025</h1>
      <div className='main-container flex items-center justify-center'>
        <Image
          src={poster}
          width={700}
          height={500}
          alt='Plagát s informáciami o zápise do baletnej školy pre školský rok 2024/2025'
        />
      </div>
    </div>
  );
};

export default Registration;
