import React from 'react';
import Image from 'next/image';



export const metadata = {
  title: 'Ballet Barre - dospelí',
};

const balletBarre = () => {
  return (
    <div className='main-container'>
      <h1>Ballet barre - dospelí </h1>
        <>
        <p>Prihlasovanie mailom:</p>
        <a
          href='mailto:info@balletpoint.sk'
          className='underline underline-offset-2 hover:text-[#cca300]'
        >
          info@balletpoint.sk
        </a>
      </>
      <p className='md:w-[80ch] text-left'>
             Na hodiny si treba priniesť:
              <ul className='ml-20 list-image-[url(/images/ballet.png)] flex flex-col gap-4 my-6'>
                <li>Ponožky na jogu</li>
                <li>Karimatku</li>
                <li>
                  Pohodlné oblečenie
                </li>
                
              </ul>
            </p>
    </div>
  );
};

export default balletBarre;
