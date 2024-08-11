import QuickLinksSidebar from './QuickLinksSidebar';

const HeroSection = () => {
  return (
    <div
      className="bg-[url('/images/main-picture.jpg')] bg-no-repeat bg-cover"
      fetchPriority='high'
    >
      <div className='main-container flex flex-col h-full  relative'>
        <QuickLinksSidebar />
      </div>
    </div>
  );
};

export default HeroSection;
