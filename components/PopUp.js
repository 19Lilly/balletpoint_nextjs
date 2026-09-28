import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import Logo from '/public/images/Ballet point.png';
import Poster from '/public/images/balletClass_adults.jpeg';

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

            <div className='text-center md:text-3xl'>
              <Image src={Poster} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
