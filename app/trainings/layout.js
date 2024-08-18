'use client';
import React, { useId } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TrainingLayout = ({ children }) => {
  const navData = [
    {
      id: useId(),
      name: 'Skupiny',
      url: '/trainings',
    },
    {
      id: useId(),
      name: 'Rozvrh hodín',
      url: '/trainings/timeSchedule',
    },
    {
      id: useId(),
      name: 'Platby',
      url: '/trainings/payments',
    },
  ];

  return (
    <div className='max-w-7xl mx-auto w-full p-4 space-y-4'>
      <nav className='flex gap-6 text-xl items-center p-4 border-b-2 flex-wrap'>
        {navData.map(({id, url, name}) => {
          const pathName = usePathname();

          return (
            <Link
              key={id}
              href={url}
              className={`bg-zinc-700 text-white px-4 py-2 rounded-xl hover:bg-zinc-600 ${
                pathName === url ? 'underline underline-offset-4' : null
              }`}
            >
              {name}
            </Link>
          );
        })}
      </nav>
      {children}
    </div>
  );
};

export default TrainingLayout;
