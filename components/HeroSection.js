'use client';
import QuickLinksSidebar from './QuickLinksSidebar';
import Snowfall from 'react-snowfall';

const HeroSection = () => {
  return (
    <div
      className="bg-[url('/images/main-picture1.jpg')] bg-no-repeat  bg-contain bg-center xl:bg-left relative bg-slate-200"
      fetchPriority='high'
    >
      <Snowfall color='white' snowflakeCount={100} />
      <div className='absolute bottom-0  w-full  bg-slate-200 xl:top-1/5 xl:right-1/4 xl:w-[25rem] xl:h-full text-center text-3xl xl:text-6xl p-4 pt-0 xl:pt-14 '>
        <p>
          Pokojné Vianočné sviatky Vám želá <br />
          Ballet point
        </p>
      </div>
      <div className='main-container flex flex-col h-full  relative invisible xl:visible'>
        <QuickLinksSidebar />
      </div>
    </div>
  );
};

export default HeroSection;
