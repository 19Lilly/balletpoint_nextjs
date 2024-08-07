import QuickLink from './QuickLink';
import { useId } from 'react';

const QuickLinksSidebar = () => {
  const quicklinks = [
    {
      id: useId(),
      title: 'Zápis 2024/2025',
      href: '/registration',
    },
    {
      id: useId(),
      title: 'Info',
      href: '/trainings',
    },
    {
      id: useId(),
      title: 'SND',
      href: '',
    },
  ];

  return (
    <div className='flex flex-col justify-between w-fit gap-6 absolute bottom-4 right-4'>
      {quicklinks.map(({ title, href, id }) => {
        return <QuickLink title={title} href={href} key={id} />;
      })}
    </div>
  );
};

export default QuickLinksSidebar;
