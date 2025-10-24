'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MdMenu } from 'react-icons/md';
import { LiaTimesSolid } from 'react-icons/lia';
// import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { navigation } from '@/app/data';
import Image from 'next/image';
import Logo from '/public/images/Ballet point.png'


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const pathName = usePathname();

  return (
    <div className='bg-zinc-950 text-white text-xl'>
      <nav className=' flex justify-between items-center p-4 md:p-0  gap-4  max-w-7xl mx-auto w-full relative'>
        <Link href='/' className='flex flex-col items-start'>
          {/* <Logo /> */}
          <Image src={Logo} className='size-[100px]' />
        </Link>
        <div className='hidden lg:flex gap-4 '>
          {navigation.map(({ id, href, SK }) => {
            return (
              <Link
                key={id}
                href={href}
                className={`p-4 hover:bg-[#cca300] rounded-lg 
                    ${
                      pathName.substring(0, 7) === href.substring(0, 7)
                        ? 'underline underline-offset-4 text-[#cca300] hover:text-white'
                        : null
                    }`}
              >
                {SK}
              </Link>
            );
          })}
        </div>
        <div
          onClick={() => setNav(!nav)}
          className='lg:hidden ml-auto text-5xl relative'
        >
          {nav ? <LiaTimesSolid /> : <MdMenu />}
          {nav && (
            <div className='flex flex-col p-4 w-44 items-start bg-zinc-800 rounded-xl absolute z-30 -left-44 top-8 '>
              {navigation.map(({ id, href, SK }) => (
                <Link
                  key={id}
                  onClick={() => setNav(!nav)}
                  href={href}
                  className={`p-2 cursor-pointer text-xl w-full rounded-lg hover:bg-[#cca300 ]
                    ${
                      pathName.substring(0, 7) === href.substring(0, 7)
                        ? 'underline underline-offset-4 text-[#cca300 ] hover:text-white'
                        : null
                    }`}
                >
                  {SK}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
