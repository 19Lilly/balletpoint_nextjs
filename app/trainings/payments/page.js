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
    <div className='max-w-7xl mx-auto space-y-6'>
      <h1 className='text-5xl text-fuchsia-600 font-bold'>Platby</h1>

      <p>
        <span className='font-bold'>1 hodina/týždeň: </span>
        30€/mesiac
      </p>
      <p>
        <span className='font-bold'>2 hodiny/týždeň: </span>
        60€/mesiac
      </p>
      <p>
        <span className='font-bold'>Zľava súrodenec: </span>
        5€/mesiac
      </p>
      <p>
        <p>
          <span className='font-bold'>IBAN: </span>
          SK5011000000008016153518
        </p>
        <p className='text-pretty'>
          Do poznámky k platbe prosím uviesť meno dieťaťa, skupinu, za ktoré
          mesiace je daná platba napr. Janko Mrkvička, C1, september + október
        </p>
      </p>

      <ul>
        {platby.map(platba => {
          return (
            <li className='flex gap-4 border-b-2 p-2 w-[min(22rem,98%)]'>
              <h3 className='font-bold text-xl'>{platba.name}</h3>
              <div>
                <p>{platba.months}</p>
                <p>
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
