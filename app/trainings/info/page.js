import { infoData } from '@/app/data';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export const metadata = {
  title: 'Informácie',
};

const Informations = () => {
  return (
    <div className='main-container'>
      <h1>Aktuálne oznamy</h1>
      {infoData.map(({ date, title, url }) => {
        return (
          <Link
            href={`/trainings/info/${url}`}
            className='grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] w-[min(30rem,98%)]  gap-y-2 gap-x-6 md:gap-6 border-b border-zinc-500 py-4 hover:text-fuchsia-600 text-left '
          >
            <p className='col-span-2 md:col-span-1'>{date}</p>

            <h2>{title}</h2>
            <FaArrowRight className='self-center ' />
          </Link>
        );
      })}
    </div>
  );
};

export default Informations;
