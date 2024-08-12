import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const QuickLink = ({ title, href, id }) => {
  return (
    <li key={id}>
      <Link
        href={href}
        className='text-white text-xl p-6 flex justify-center gap-2 rounded-lg bg-black/80 w-full  items-center hover:scale-105 hover:text-fuchsia-600'
      >
        {title}
        <FaArrowRight />
      </Link>
    </li>
  );
};

export default QuickLink;
