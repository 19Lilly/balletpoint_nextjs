import QuickLink from './QuickLink';
import { useId } from 'react';

const QuickLinksSidebar = () => {
  const quicklinks = [
    {
      id: useId(),
      title: 'Tréningy',
      href: '/trainings',
    },
    {
      id: useId(),
      title: 'Koncoročné vystúpenie',
      href: '/events',
    },
    {
      id: useId(),
      title: 'Letný tábor',
      href: '/comingUp',
    },
  ];

  return (
    <div className='flex flex-col justify-between w-fit gap-6 self-end  md:mt-auto mt-[55%] p-2 '>
      {quicklinks.map(({ title, href, id }) => {
        return <QuickLink title={title} href={href} key={id} />;
      })}
    </div>
  );
};

export default QuickLinksSidebar;
