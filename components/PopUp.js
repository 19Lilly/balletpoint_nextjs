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
          <div className='bg-white p-6 md:p-10 m-10 rounded-xl shadow-lg w-[min(30rem,90%)] relative text-center flex flex-col items-center gap-5'>
            <button
              className='absolute right-6 top-8 hover:text-fuchsia-600'
              onClick={() => setIsOpen(false)}
            >
              <IoClose />
            </button>

            <Logo />

            <div className='my-4 space-y-6 text-2xl md:text-3xl'>
              <h1 className='text-2xl md:text-4xl'>Tréningy pred vystúpením</h1>
              <p>
                Skúšky pred vystúpením na hody v Lamači 31.8.2025 a Festival
                vodníkov 7.9.2025 sa uskutočnia v dňoch 27. a 28. augusta 2025 v
                časoch:
                <ul className='pt-4 space-y-4 '>
                  <li>
                    <span className='font-bold'>C1: </span> tréningy zrušené
                  </li>
                  <li>
                    <span className='font-bold'>C2: </span>16:40 - 17:40
                  </li>
                  <li>
                    <span className='font-bold'>Contemporary:</span> 17:30 -
                    17:50
                  </li>
                  <li>
                    <span className='font-bold'>C3: </span>17:45 - 18:45
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
