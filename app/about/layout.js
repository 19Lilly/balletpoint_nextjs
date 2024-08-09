import React from 'react';
import Link from 'next/link';

export default function AboutLayout({ children }) {

  return (
    <div className='max-w-7xl mx-auto border w-full'>
      <nav className='flex gap-2 items-center justify-center'>
        <Link
          href='/about'>
          Balletpoint
        </Link>
        <Link
          href='/about/teacher'>
          Pedagóg
        </Link>
      </nav>
      {children}
    </div>
  );
}
