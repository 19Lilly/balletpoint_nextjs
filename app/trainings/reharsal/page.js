import React from 'react';
import Image from 'next/image';



export const metadata = {
  title: 'Skúšky pred vystúpením',
};

const reharsal = () => {
  return (
    <div className='main-container'>
      <h1>Skúšky - Karloveské hody hody 2026</h1>
      <div>
        <p>Utorok - 22.9.2026 :</p>
        <p>
          <span className='font-bold'>C1+C2:</span> 15:30-16:45
        </p>
        <p>
          <span className='font-bold'>C3+C4:</span> podľa rozvrhu
        </p>
        <p>všetci žiaci</p>
      </div>
      <div>
        <p>Streda - 23.9.2026 :</p>
        <p>
          <span className='font-bold'>C1:</span> podľa rozvrhu
        </p>
        <p>
          <span className='font-bold'>C3+C4:</span> 16:30-17:30
        </p>
        <p>všetci žiaci</p>
      </div>
      <div>
        <p>Piatok - 25.9.2026 :</p>
        <p>podľa rozvrhu všetci žiaci</p>
      </div>
      <div>
        <p>Sobota - 26.9.2026 - Karloveské hody:</p>
        <p>
          <span className='font-bold'>Nástup žiakov: </span> 15:00
        </p>
        <p>Stretnutie pri rampe od Iuventy </p>
        <img className='py-4' src='/images/mapa_aral_hody_KV.jpeg' />

        <p>
          <span className='font-bold'>Vystúpenie:</span> 16:30{' '}
        </p>
      </div>
    </div>
  );
};

export default reharsal;
