import React from 'react';
import Image from 'next/image';
import poster from '/public/images/zapis.jpg';

const Registration = () => {
  return (
    <div className='main-container'>
      <h1>Zápis v školskom roku 2024/2025</h1>
      <div className='main-container flex items-center justify-center'>
        <Image src={poster} width={700} height={500} />
      </div>
    </div>
  );
};

export default Registration;
