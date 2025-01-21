'use client';
import QuickLinksSidebar from './QuickLinksSidebar';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div
      className="bg-[url('/images/main-picture.jpg')] bg-no-repeat  bg-cover  
      h-100vh w-full relative"
      fetchPriority='high'
    >
      {modalOpen && (
        <div className='bg-white w-[min(750px,98%)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-10 py-4 rounded-lg z-20 flex flex-col justify-between items-center text-3xl lg:text-4xl text-center gap-10'>
          <button
            className='self-end hover:text-fuchsia-600'
            onClick={() => setModalOpen(false)}
          >
            <AiOutlineClose />
          </button>
          <p className='text-center'>
            Dňa 24.1.2025 sa hodiny Ballet pointu neuskutočnia z dôvodu dňa
            otvorených dverí na tanečnom konzervatóriu Evy Jaczovej
          </p>
          <a
            href='https://www.tankonba.sk/'
            target='_blank'
            className='flex gap-4 hover:text-fuchsia-600 hover:underline items-center justify-center '
          >
            viac info o dni otvorených dverí
            <FaLongArrowAltRight className='self-center mt-3' />
          </a>
        </div>
      )}
      <div className='main-container flex flex-col h-full  relative '>
        <QuickLinksSidebar />
      </div>
    </div>
  );
};

export default HeroSection;
