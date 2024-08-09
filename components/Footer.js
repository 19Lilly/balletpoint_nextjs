import React from 'react';
import Link from 'next/link';
import { FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-zinc-950 text-white'>
      <div className='max-w-7xl flex justify-center items-center gap-4  mx-auto p-6'>
        <div className='flex items-center gap-2'>
          <FaRegCopyright />
          {new Date().getFullYear()}
        </div>
        <Link
          href='https://www.linkedin.com/in/rozvita-%C5%A1tiglinc/'
          rel='noopener noreferrer'
          target='_blank'
        >
          Lilly
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
