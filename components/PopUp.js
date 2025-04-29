import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import Logo from './Logo';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-10'>
          <div className='bg-white p-10 m-10 rounded-xl shadow-lg w-[min(50rem,90%)] relative text-center text-xl md:text-3xl flex flex-col items-center gap-5'>
            <button
              className='absolute right-6 top-6 hover:text-fuchsia-600'
              onClick={() => setIsOpen(false)}
            >
              <IoClose />
            </button>

            <Logo className='w-1/2 md:w-1/3' />

            <div className='my-4 space-y-8'>
              <p className='text-pretty'>
                Dňa 2.5.2025 sa hodiny Ballet pointu uskutočnia podľa aktuálneho
                <Link
                  href='/trainings/timeSchedule'
                  className='hover:text-fuchsia-600 underline inline-flex items-center gap-2 ml-2'
                >
                  rozvrhu <FaArrowRight className='text-base' />
                </Link>
              </p>

              <p>Dňa 9.5.2025 hodiny baletu nebudú.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
