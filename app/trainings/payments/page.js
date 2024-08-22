import React from 'react';
import { platby } from '@/app/data';
import CopyToClipboard from '@/components/CopyToClipboard';

export const metadata = {
  title: 'Platby',
  description: 'Rozpis jednotlivých platieb za kurzy baletu.',
};

const Payments = () => {
  return (
    <div className='main-container '>
      <h1>Platby</h1>

      <p className='self-start md:w-[80ch]'>
        <span className='font-bold'>1 hodina/týždeň: </span>
        30€/mesiac
      </p>
      <p className=' self-start md:w-[80ch]'>
        <span className='font-bold'>2 hodiny/týždeň: </span>
        60€/mesiac
      </p>
      <p className='self-start md:w-[80ch]'>
        <span className='font-bold'>Zľava súrodenec: </span>
        5€/mesiac
      </p>
      <div>
        <p className='text-left md:w-[80ch] flex gap-2'>
          <span className='font-bold'>IBAN: </span>
          SK23 0900 0000 0052 1937 5395
          <CopyToClipboard />
        </p>
        <p className='text-pretty md:w-[80ch] mt-4'>
          Do poznámky k platbe prosím uviesť meno a priezvisko dieťaťa, skupinu
          a za ktoré mesiace je daná platba napr. Janko Mrkvička, C1, september
          + október
        </p>
      </div>

      <ul className='self-start w-[min(30rem,98%)]'>
        {platby.map(({ id, name, months, dueDate }) => {
          return (
            <li className='flex gap-4 border-b-2 p-2' key={id}>
              <h3 className='font-bold text-xl'>{name}</h3>
              <div className='text-left'>
                <p className='md:w-[80ch]'>{months}</p>
                <p className='md:w-[80ch]'>
                  <span className='font-bold'>Splatnosť:</span> {dueDate}
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
