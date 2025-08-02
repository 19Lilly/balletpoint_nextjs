import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import Logo from './Logo';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import poster from '/public/images/koncert_ziakov_jun2025.jpg';

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-10 h-screen'>
          <div className='bg-white p-10 m-10 rounded-xl shadow-lg w-[min(22rem,90%)] relative text-center text-xl md:text-3xl flex flex-col items-center gap-5'>
            <button
              className='absolute right-6 top-8 hover:text-fuchsia-600'
              onClick={() => setIsOpen(false)}
            >
              <IoClose />
            </button>

            <Logo />

            <div className='my-4 space-y-6'>
              <h1 className='text-2xl md:text-3xl'>Tréningy pred vystúpením</h1>
              <p>
                Tréningy pred vystúpením sa uskutočnia v dňoch 27. a 28. augusta
                2025 v časoch podľa piatkového rozvrhu.
              </p>
              <Link
                href='/trainings/timeSchedule'
                className='flex items-center justify-center gap-2 hover:text-fuchsia-600'
              >
                rozvrh <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
