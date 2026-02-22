import { CiInstagram } from 'react-icons/ci';
import { CiFacebook } from 'react-icons/ci';
import Link from 'next/link';


const SocialMedia = () => {
    return (
      <div className='flex gap-2'>
        <Link
          href='https://www.instagram.com/ballet_point_24/'
          target='target_blank'
        >
          <CiInstagram className='size-12 hover:text-[#cca300]' />
        </Link>
        <Link
          href='https://www.facebook.com/profile.php?id=61550877954654'
          target='target_blank'
        >
          <CiFacebook className='size-12 hover:text-[#cca300]' />
        </Link>
      </div>
    );
}

export default SocialMedia;