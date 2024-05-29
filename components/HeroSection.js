import QuickLinksSidebar from "./QuickLinksSidebar"

const HeroSection = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1595348514401-eca68a3bea33?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover h-[700px]  ">
      <div className='flex flex-col max-w-7xl mx-auto h-full'>
        <QuickLinksSidebar />
      </div>
    </div>
  );
};

export default HeroSection;
