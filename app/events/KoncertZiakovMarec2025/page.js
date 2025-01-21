import React from 'react';
import Image from 'next/image';
import poster from '/public/images/koncert_ziakov_marec2025.jpg';
// import poster from 'images/koncert_ziakov_marec2025.jpg';

export const metadata = {
  title:
    'Koncer žiakov Ballet pointu Lamač a Ballet pointu Podunajské Biskupice 9.3.2025',
};

const koncertZiakovMarec2025 = () => {
  return (
    <div className='main-container'>
      <h1>Koncert žiakov Ballet pointu - 9.3.2025</h1>
      <p className='md:w-[80ch] text-pretty'>
        V rámci koncertu vystúpia žiaci z Lamača a Podunajských Biskupíc.
      </p>

      <div className='main-container flex items-center justify-center mx-auto'>
        <Image
          src={poster}
          width={700}
          height={500}
          alt='Plagát s informáciami o koncerte žiakov Ballet pointu Lamač a Ballet pointu Podunajské Biskupice 9.3.2025'
        />
      </div>
    </div>
  );
};

export default koncertZiakovMarec2025;
