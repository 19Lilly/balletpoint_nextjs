import React from 'react';
import Link from 'next/link';

const TrainingLayout = ({ children }) => {
  return (
    <div className='max-w-7xl mx-auto w-full p-4 space-y-4'>
      <nav className='flex gap-6 text-xl items-center p-4 border-b-2'>
        <Link href='/trainings'>Zápis 2024/2025</Link>
        <Link href='/trainings/info'>Info</Link>
        <Link href='/trainings/timeSchedule'>Rozvrh hodín</Link>
        <Link href='/trainings/groups'>Skupiny</Link>
      </nav>
      {children}
    </div>
  );
};

export default TrainingLayout;
