import QuickLinksSidebar from './QuickLinksSidebar';

const HeroSection = () => {
  return (
    <div
      className="bg-[url('/images/main-picture.jpg')] bg-no-repeat bg-cover"
      fetchpriority='high'
    >
      <div className='flex flex-col max-w-7xl h-full mx-auto relative'>
        <QuickLinksSidebar />
      </div>
    </div>
  );
};

export default HeroSection;
