import { Divide } from 'lucide-react';
import React from 'react';

const Trainings = () => {
  const groupsData = [
    {
      name: 'Classic 1',
      age: '4-6 rokov',
    },
    {
      name: 'Classic 2',
      age: '6-7 rokov',
    },
    {
      name: 'Classic 3',
      age: '8-12 rokov',
    },
  ];
  return (
    <div className='main-container'>
      <h1>Skupiny</h1>
      <p className='text-pretty md:w-[80ch]'>
        Rozdelenie do skupín má len informačný charakter. Zápis do jednotlivých
        skupín prebieha po konzultácii s pedagógom.
      </p>
      <ul className='w-fit'>
        {groupsData.map(group => {
          return (
            <li className='flex gap-6 p-4 items-center border-b-2'>
              <h2 className='text-2xl font-bold'>{group.name}</h2>
              <p className='self-end'>
                <span className='font-bold'>Vek: </span> {group.age}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Trainings;
