import React from 'react';
import Image from 'next/image';
import InstructionsImage from '/public/images/instructionsImage1.jpg';

const dailySchedule = () => {
  return (
    <div className='main-container'>
      <h1>Denný rozvrh - denný tábor</h1>
      <p className='text-pretty'>
        Tu nájdete denný rozvrh aktivít pre Denný letný tábor 2025.
      </p>
      <Image
        src={InstructionsImage}
        width={700}
        height={500}
        alt='Denný rozvrh pre denný letný tábor 2025'
      />
    </div>
  );
}

export default dailySchedule;