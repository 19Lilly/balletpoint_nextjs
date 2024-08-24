import React, { useId } from 'react';
import SmallNavbar from '@/components/SmallNavbar';
import { trainingsNavData } from '@/app/data';

export const metadata = {
  title: {
    template: 'Ballet point: Tréningy - %s',
  },
};

const TrainingLayout = ({ children }) => {
  return (
    <div className='max-w-7xl mx-auto w-full p-4 space-y-4'>
      <SmallNavbar data={trainingsNavData} />
      {children}
    </div>
  );
};

export default TrainingLayout;
