import QuickLinksSidebar from "./QuickLinksSidebar"

const HeroSection = () => {
  return (
    <div className="bg-[url('/images/main-picture.jpg')] bg-no-repeat bg-cover h-[700px]  ">
      <div className='flex flex-col max-w-7xl mx-auto h-full'>
        <QuickLinksSidebar />
      </div>
    </div>
  );
};

export default HeroSection;
