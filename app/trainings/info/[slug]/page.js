import { infoData } from '@/app/data';
import React from 'react';
import { TiArrowBackOutline } from 'react-icons/ti';
import Link from 'next/link';
import { Divide } from 'lucide-react';

const SingleInfo = ({ params }) => {
  const [{ title, date, component, url }] = infoData.filter(
    info => info.url === params.slug
  );

  return (
    <div className='main-container'>
      <h1>{title}</h1>
      <Link
        href='/trainings/info'
        className='hover:text-fuchsia-600 hover:scale-110 flex items-center gap-2 '
      >
        <TiArrowBackOutline />
        Späť na zoznam
      </Link>

      {component}
    </div>
  );
};

export default SingleInfo;
