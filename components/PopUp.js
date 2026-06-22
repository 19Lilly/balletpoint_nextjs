import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import Logo from '/public/images/Ballet point.png';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-10 h-screen'>
          <div className='bg-white p-6 md:p-10 m-10 rounded-xl shadow-lg w-[min(30rem,98%)] relative text-center flex flex-col items-center gap-3'>
            <button
              className='absolute right-6 top-8 hover:text-[#cca300]'
              onClick={() => setIsOpen(false)}
            >
              <IoClose />
            </button>

            <Image src={Logo} className='size-[150px] ' />

            <div className='my-4 space-y-6 text-lg text-left md:text-3xl'>
              <p>Koniec školského roku 2025/2026 v Balletpointe</p>
              <div>
                <p>
                  <span className='font-bold'>Lamač:</span> 23.6.2026
                </p>
                <p>
                  <span className='font-bold'>Pod. Biskupice:</span> 25.6.2026
                </p>
              </div>
              <p>Skúšky terajších žiakov začnú v týždni od 24.8.2026</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
