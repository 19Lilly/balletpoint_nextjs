import React from 'react';
import Link from 'next/link';

const TrainingLayout = ({ children }) => {
  return (
    <div className='max-w-7xl mx-auto border w-full'>
      <nav className='flex gap-2 items-center justify-center'>
        <Link href='/trainings'>Rozvrh hodín</Link>
        <Link href='/trainings/groups'>Skupiny</Link>
        <Link href='/trainings/registration'>Zápis 2024/2025</Link>

      </nav>
      {children}
    </div>
  );
};

export default TrainingLayout;
