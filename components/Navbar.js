'use client';

import React, { useId, useState } from 'react';
import Link from 'next/link';
import { MdMenu } from 'react-icons/md';
import { LiaTimesSolid } from 'react-icons/lia';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navigation = [
    {
      id: useId(),
      SK: 'Domov',
      EN: 'Home',
      href: '/'
    },
    {
      id: useId(),
      SK: 'O nás',
      EN: 'About us',
      href: '/about'
    },
    {
      id: useId(),
      SK: 'Pedagóg',
      EN: 'Teacher',
      href: '/teacher'
    },
    {
      id: useId(),
      SK: 'Tréningy',
      EN: 'Trainings',
      href: '/trainings'
    },
    {
      id: useId(),
      SK: 'Podujatia',
      EN: 'Events',
      href: '/events'
    },
     {
      id: useId(),
      SK: 'Galéria',
      EN: 'Gallery',
      href: '/gallery'
    },
    {
      id: useId(),
      SK: 'Pripravujeme',
      EN: 'Coming up',
      href: '/comingUp'
    },
    {
      id: useId(),
      SK: 'Kontakt',
      EN: 'Contact',
      href: '/contact'
    },
  ];


  return (
    <div className='flex justify-between items-center p-6  gap-4  max-w-7xl mx-auto w-full'>
      <Link href='/' className="flex flex-col items-start">
       <p>Ballet Point</p>
       <p className="self-center">Lamač</p>
      </Link>
      <ul className='hidden lg:flex p-2 gap-4 '>
        {navigation.map((item) => {
          return (
            <li key={item.id} className='p-2 hover:bg-fuchsia-600 rounded-lg'>
              <Link  href={item.href}>
                {item.SK}{' '}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className='lg:hidden ml-auto text-2xl relative'
      >
        {nav ?  <LiaTimesSolid /> : <MdMenu /> }
          {nav && (
        <ul className='flex flex-col w-max p-2  items-start bg-zinc-600 absolute  -left-44 top-8 '>
          {navigation.map((item) => (
            <li
              key={item.id}
              className='p-2 cursor-pointer text-xl w-full rounded-lg hover:bg-fuchsia-600'
            >
              <Link onClick={() => setNav(!nav)} href={item.href}>
                {item.SK}
              </Link>
            </li>
          ))}
        </ul>
      )}

      </div>
     
      
      <div className='text-xl'>SK</div> {/*dropdown menu pre vyber jazyka */}
    </div>
  );
};

export default Navbar;
