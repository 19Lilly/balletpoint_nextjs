import React from 'react';
import Link from 'next/link';

export default function AboutLayout({ children }) {

  return (
    <div className='max-w-7xl mx-auto w-full p-4 space-y-4'>
      <nav className='flex gap-6 text-xl items-center p-4 border-b-2 flex-wrap'>
        <Link href='/about'>Ballet point</Link>
        <Link href='/about/teacher'>Pedagóg</Link>
      </nav>
      {children}
    </div>
  );
}
