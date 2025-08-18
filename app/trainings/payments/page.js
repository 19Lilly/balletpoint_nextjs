import React from 'react';
import { platby } from '@/app/data';
import CopyToClipboard from '@/components/CopyToClipboard';
import { v4 as uuid } from 'uuid';

export const metadata = {
  title: 'Platby',
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
      <p className=' self-start md:w-[80ch]'>
        <span className='font-bold'>3 hodiny/týždeň: </span>
        75€/mesiac
      </p>

      <p className='self-start md:w-[80ch]'>
        <span className='font-bold'>Zľava súrodenec: </span>
        5€/mesiac
      </p>
      <div>
        <p className='text-left md:w-[80ch] flex flex-col md:flex-row gap-2'>
          <span className='font-bold'>IBAN: </span>
          <span className='flex gap-2'>
            SK23 0900 0000 0052 1937 5395
            <CopyToClipboard />
          </span>
        </p>
        <img
          src='/images/payBySquare.jpg'
          alt='pay by square image'
          className='aspect-square size-28 mt-4 mx-auto md:mx-0'
        />
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

              <ul className='md:w-[80ch]text-left flex flex-col '>
                {months.map(month => {
                  return <li key={uuid()}>{month}</li>;
                })}

                <span className='font-bold'>Splatnosť:</span>

                {dueDate.map(item => {
                  return <li key={uuid()}>{item}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Payments;
