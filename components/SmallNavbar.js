'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SmallNavbar = ({ data }) => {
  return (
    <nav className='flex gap-6 text-xl items-center p-4 border-b-2 flex-wrap'>
      {data.map(({ id, url, name }) => {
        const pathName = usePathname();

        return (
          <Link
            key={id}
            href={url}
            className={`bg-zinc-700 text-white px-4 py-2 rounded-xl hover:bg-zinc-600 ${
              pathName === url ? 'underline underline-offset-4' : null
            }`}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
};

export default SmallNavbar;
