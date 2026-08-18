import React from 'react';
import MobileTimeTable from '@/components/MobileTimeTable';
import DesktopTimeTable from '@/components/DesktopTimeTable';

export const metadata = {
  title: 'Rozvrh hodín',
};

const reharsal = () => {
  return (
    <div className='main-container'>
      <h1>Skúšky - Rozálske hody 2026 a Vodnícke slávnosti</h1>
      <div>
        <p>Utorok - 1.9.2026 :</p>
        <p>
          <span className='font-bold'>C1+C2:</span> 15:30-16:45
        </p>
        <p>
          <span className='font-bold'>C3+C4:</span> podľa rozvrhu
        </p>
        <p>všetci žiaci</p>
      </div>
      <div>
        <p>Streda - 2.9.2026 :</p>
        <p>
          <span className='font-bold'>C1+C2:</span> 15:30-16:30
        </p>
        <p>
          <span className='font-bold'>C3+C4:</span> 16:30-17:30
        </p>
        <p>všetci žiaci</p>
      </div>
      <div>
        <p>Piatok - 4.9.2026 :</p>
        <p>podľa rozvrhu všetci žiaci</p>
      </div>
      <div>
        <p>Sobota - 5.9.2026 :</p>
        <p>
          <span className='font-bold'>Nástup žiakov: </span> 13:00
        </p>
        <p>
          <span className='font-bold'>Vystúpenie:</span> 14:40-15:00{' '}
        </p>
      </div>
      <div>
        <p>Nedeľa - 6.9.2026 :</p>
        <p>
          <span className='font-bold'>Nástup žiakov: </span> upresníme
        </p>
        <p>
          <span className='font-bold'>Vystúpenie:</span> 14:30
        </p>
      </div>
    </div>
  );
};

export default reharsal;
