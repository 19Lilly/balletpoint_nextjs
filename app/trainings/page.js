import React, { useId } from 'react';
import { groupsData } from '../data';

export const metadata = {
  title: 'Tréningy - rozdelenie do skupín',
};

const Trainings = () => {
  return (
    <div className='main-container'>
      <h1>Skupiny</h1>
      <p className='text-pretty md:w-[80ch]'>
        Rozdelenie do skupín má len informačný charakter. Zápis do jednotlivých
        skupín prebieha po konzultácii s pedagógom.
      </p>
      <div className='w-fit'>
        {groupsData.map(({ id, name, age }) => {
          return (
            <div className='flex gap-6 p-4 items-center border-b-2' key={id}>
              <h2 className='text-2xl font-bold'>{name}</h2>
              <p className='self-end'>
                <span className='font-bold'>Vek: </span> {age}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trainings;
