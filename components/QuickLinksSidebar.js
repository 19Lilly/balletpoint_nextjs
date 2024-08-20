import QuickLink from './QuickLink';
import { quicklinks } from '@/app/data';


const QuickLinksSidebar = () => {
  return (
    <div className='flex flex-col justify-between w-fit gap-6 absolute bottom-4 right-4'>
      {quicklinks.map(({ title, href, id }) => {
        return <QuickLink title={title} href={href} key={id} />;
      })}
    </div>
  );
};

export default QuickLinksSidebar;
