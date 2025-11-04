import React from 'react';
import Image from 'next/image';
import poster from '/public/images/BalletPointXmasConcert2025.jpg';

export const metadata = {
  title:
    'Vianočný koncert Ballet pointu Lamač 19.12.2025',
};

const VianocnyKoncert2025 = () => {
  return (
    <div className='main-container'>
      <h1>Vianočný Koncert Ballet pointu - 19.12.2025</h1>
   
      <div className='main-container flex items-center justify-center mx-auto'>
        <p className='text-2xl'><span className='font-bold'>Vstupné:</span> 4€</p>
        <Image
          src={poster}
          width={700}
          height={500}
          alt='Plagát s informáciami o vianočnom koncerte žiakov Ballet pointu Lamač 19.12.2025'
        />
        
      </div>
    </div>
  );
};

export default VianocnyKoncert2025;