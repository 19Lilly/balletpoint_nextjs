import React, { useId } from 'react';
import SmallNavbar from '@/components/SmallNavbar';
import { summerCamp2025Data } from '@/app/data';

export const metadata = {
  title: {
    template: 'Ballet point: Letný tábor 2025 - %s',
  },
};

const SummerCamp2025Layout = ({ children }) => {
  return (
    <div className='max-w-7xl mx-auto w-full p-4 space-y-4'>
      <SmallNavbar data={summerCamp2025Data} />
      {children}
    </div>
  );
};

export default SummerCamp2025Layout;
