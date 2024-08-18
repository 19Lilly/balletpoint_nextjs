import React, { useId } from 'react';

export const metadata = {
  title: 'Rozdelenie do skupín - tréningy',
};

const Trainings = () => {
  const groupsData = [
    {
      id: useId(),
      name: 'Classic 1',
      age: '4-6 rokov',
    },
    {
      id: useId(),
      name: 'Classic 2',
      age: '6-7 rokov',
    },
    {
      id: useId(),
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
