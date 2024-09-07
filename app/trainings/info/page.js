import { infoData } from '@/app/data';
import Link from 'next/link';

import { FaArrowRight } from 'react-icons/fa';

const Informations = () => {
  return (
    <div className='main-container'>
      <h1>Aktuálne oznamy</h1>
      {infoData.map(({ date, title, url }) => {
        return (
          <Link
            href={`/trainings/info/${url}`}
            className='grid grid-cols-[auto_1fr] w-[min(30rem,98%)] gap-6 border-b border-zinc-500 p-4 hover:text-fuchsia-600 '
          >
            <p>{date}</p>
            <div className='flex gap-2 items-center'>
              <h2>{title}</h2>
              <FaArrowRight />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Informations;
