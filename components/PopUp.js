import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

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

            <img
              src='/images/happyEaster.jpg'
              alt='ballet point happy easter'
              className='rounded-xl md:w-[min(20rem,90%)]'
            />

            <div className='my-4'>
              <p>Ballet point praje krásne Veľkonočné sviatky.</p>
              <p>Tešíme sa na Vás zas od 23.4.2025</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
