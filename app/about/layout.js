import React from 'react';
import Link from 'next/link';

export default function AboutLayout({ children }) {

  const navData = [
    {
      name: 'Ballet point',
      url: '/about',
    },
    {
      name: 'Pedagóg',
      url: '/about/teacher',
    },
  ];

  return (
    <div className='max-w-7xl mx-auto w-full p-4 space-y-4'>
      <nav className='flex gap-6 text-xl items-center p-4 border-b-2 flex-wrap'>
        {navData.map(nav => {
          return (
            <Link
              href={nav.url}
              className='bg-zinc-700 text-white px-4 py-2 rounded-xl hover:bg-zinc-600'
            >
              {nav.name}
            </Link>
          );
        })}
      </nav>
      {children}
    </div>
  );
}
