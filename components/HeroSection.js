'use client';
import QuickLinksSidebar from './QuickLinksSidebar';
import Snowfall from 'react-snowfall';

const HeroSection = () => {
  return (
    <div
      className="bg-[url('/images/main-picture.jpg')] bg-no-repeat  bg-cover  
      h-100vh w-full relative"
      fetchPriority='high'
    >
      <div className='main-container flex flex-col h-full  relative '>
        <QuickLinksSidebar />
      </div>
    </div>
  );
};

export default HeroSection;
