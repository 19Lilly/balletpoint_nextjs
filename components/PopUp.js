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

            <div className='my-4 space-y-4 text-xl md:text-3xl text-left'>
              <div>
                <p className='font-bold mb-2 '> 6.6.2026 - kostýmová skúška </p>
                <p>C1+C2: 11:00-12:00</p>
                <p>C3: 12:00-13:00</p>
                <p>C4: 13:00-14:00</p>
              </div>
              <div>
                <p className='font-bold mb-2'> 13.6.2026</p>
                <p>C1 až C4: hodiny podľa potreby</p>
              </div>

              {/* <p>
                C1 a C2 hodina sa utorok 12.5.2026 ruší. Náhradná hodina bude v
                pondelok 18.5.2026 v čase 17:00 - 18:10
              </p>
              <p>Ďakujeme za pochopenie</p> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
