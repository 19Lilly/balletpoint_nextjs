'use client';

import React, { useId, useState } from 'react';
import Link from 'next/link';
import { MdMenu } from 'react-icons/md';
import { LiaTimesSolid } from 'react-icons/lia';
import Logo from './Logo';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navigation = [
    {
      id: useId(),
      SK: 'Domov',
      EN: 'Home',
      href: '/',
    },
    {
      id: useId(),
      SK: 'O nás',
      EN: 'About us',
      href: '/about',
    },

    {
      id: useId(),
      SK: 'Tréningy',
      EN: 'Trainings',
      href: '/trainings',
    },
    {
      id: useId(),
      SK: 'Galéria',
      EN: 'Gallery',
      href: '/gallery',
    },
    {
      id: useId(),
      SK: 'Podujatia',
      EN: 'Events',
      href: '/events',
    },
    {
      id: useId(),
      SK: 'Kontakt',
      EN: 'Contact',
      href: '/contact',
    },
  ];

  const pathName = usePathname();


  return (
    <nav className='bg-zinc-950 text-white text-xl'>
      <div className='flex justify-between items-center p-4 md:p-2  gap-4  max-w-7xl mx-auto w-full relative '>
        <Link href='/' className='flex flex-col items-start'>
          <Logo />
        </Link>
        <ul className='hidden lg:flex p-2 gap-4 '>
          {navigation.map(item => {
            return (
              <li key={item.id} className='p-2 hover:bg-fuchsia-600 rounded-lg'>
                <Link
                  href={item.href}
                  className={
                    pathName.substring(0, 7) === item.href.substring(0, 7)
                      ? 'underline underline-offset-4 text-fuchsia-600 hover:text-white'
                      : null
                  }
                >
                  {item.SK}
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className='lg:hidden ml-auto text-5xl relative'
        >
          {nav ? <LiaTimesSolid /> : <MdMenu />}
          {nav && (
            <ul className='flex flex-col p-4 w-44 items-start bg-zinc-800 rounded-xl absolute z-30 -left-44 top-8 '>
              {navigation.map(item => (
                <li
                  key={item.id}
                  className='p-2 cursor-pointer text-xl w-full rounded-lg hover:bg-fuchsia-600'
                >
                  <Link
                    onClick={() => setNav(!nav)}
                    href={item.href}
                    className={
                      pathName.substring(0, 7) === item.href.substring(0, 7)
                        ? 'underline underline-offset-4 text-fuchsia-600 hover:text-white'
                        : null
                    }
                  >
                    {item.SK}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className='text-4xl hidden'>SK</div>{' '}
        {/*dropdown menu pre vyber jazyka */}
      </div>
    </nav>
  );
};

export default Navbar;
