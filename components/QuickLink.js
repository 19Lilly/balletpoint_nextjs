import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const QuickLink = ({ title, href }) => {
  return (
    <Link
      href={href}
      className='text-white text-xl p-6 flex justify-center gap-2 rounded-lg bg-black/80 w-full  items-center hover:scale-105 hover:text-[#cca300]'
    >
      {title}
      <FaArrowRight />
    </Link>
  );
};

export default QuickLink;
