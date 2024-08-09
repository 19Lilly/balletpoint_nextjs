import React from 'react';
import Image from 'next/image';
import poster from '/public/images/zapis.jpg';

const Registration = () => {
  return (
    <div className='max-w-7xl p-4 space-y-6 mx-auto w-full'>
      <h1 className='text-5xl text-fuchsia-600 font-bold'>
        Zápis v školskom roku 2024/2025
      </h1>
      <div className='max-w-7xl w-fullp-4 flex items-center justify-center'>
        <Image src={poster} width={700} height={500} />
      </div>
    </div>
  );
};

export default Registration;
