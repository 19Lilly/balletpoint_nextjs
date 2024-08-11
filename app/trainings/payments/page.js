import React from 'react';

const Payments = () => {
  const platby = [
    {
      name: '1.platba',
      months: 'September + Október',
      dueDate: '3.9.2024',
    },
    {
      name: '2.platba',
      months: 'November + December + Január',
      dueDate: '5.11.2024',
    },
    {
      name: '3.platba',
      months: 'Február + Marec + Apríl',
      dueDate: '4.2.2025',
    },
    {
      name: '4.platba',
      months: 'Máj + Jún',
      dueDate: '2.5.2025',
    },
  ];
  return (
    <div className='main-container'>
      <h1>Platby</h1>

      <p className='md:w-[80ch]'>
        <span className='font-bold'>1 hodina/týždeň: </span>
        30€/mesiac
      </p>
      <p className='md:w-[80ch]'>
        <span className='font-bold'>2 hodiny/týždeň: </span>
        60€/mesiac
      </p>
      <p className='md:w-[80ch]'>
        <span className='font-bold'>Zľava súrodenec: </span>
        5€/mesiac
      </p>
      <div>
        <p className='md:w-[80ch]'>
          <span className='font-bold'>IBAN: </span>
          SK23 0900 0000 0052 1937 5395
        </p>
        <p className='text-pretty md:w-[80ch] mt-4'>
          Do poznámky k platbe prosím uviesť meno a priezvisko dieťaťa, skupinu
          a za ktoré mesiace je daná platba napr. Janko Mrkvička, C1, september
          + október
        </p>
      </div>

      <ul>
        {platby.map(platba => {
          return (
            <li className='flex gap-4 border-b-2 p-2 w-[min(25rem,98%)]'>
              <h3 className='font-bold text-xl'>{platba.name}</h3>
              <div>
                <p className='md:w-[80ch]'>{platba.months}</p>
                <p className='md:w-[80ch]'>
                  <span className='font-bold'>Splatnosť:</span> {platba.dueDate}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Payments;
