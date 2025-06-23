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
          <div className='bg-white p-10 m-10 rounded-xl shadow-lg w-[min(18rem,90%)] relative text-center text-xl md:text-3xl flex flex-col items-center gap-5'>
            <button
              className='absolute right-6 top-8 hover:text-fuchsia-600'
              onClick={() => setIsOpen(false)}
            >
              <IoClose />
            </button>

            <Logo />

            <div className='my-4 space-y-6'>
              <p>Ballet point vás srdečne pozýva</p>
              <Image
                src={poster}
                width={700}
                height={500}
                alt='Plagát s informáciami o koncerte žiakov Ballet pointu Lamač a Ballet pointu Podunajské Biskupice 29.6.2025'
              />
              <Link
                href={`/events/KoncertZiakovJun2025`}
                className='mt-4 flex items-end hover:text-fuchsia-600'
              >
                <FaArrowRight></FaArrowRight>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
