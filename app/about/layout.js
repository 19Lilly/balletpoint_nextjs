import React from 'react';
import { aboutNavData } from '../data';
import SmallNavbar from '@/components/SmallNavbar';

export default function AboutLayout({ children }) {
  return (
    <div className='max-w-7xl mx-auto w-full p-4 space-y-4'>
      <SmallNavbar data={aboutNavData} />
      {children}
    </div>
  );
}
