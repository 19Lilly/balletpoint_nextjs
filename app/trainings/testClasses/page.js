import React from 'react';
import OrganizationInfoTestClasses from '@/components/OrganizationInfoTestClasses';


export const metadata = {
  title: 'Skušobné hodiny - september 2026',
};

const testClasses= () => {
  return (
    <div className='main-container'>
      <h1>Skúšobné hodiny</h1>

      <p>Skúšobné hodiny nových žiakov: </p>

      <ul className='my-4'>
        <li>C1+C2: 1.9.2026, 4.9.2026</li>
        <li>C1: 2.9.2026: 15:30-16:30</li>
        <li>C3+C4: 8.9.2026, 11.9.2026</li>
      </ul>
      <>
        <p>Prihlasovanie mailom:</p>
        <a
          href='mailto:info@balletpoint.sk'
          className='underline underline-offset-2 hover:text-[#cca300]'
        >
          info@balletpoint.sk
        </a>
      </>

      <OrganizationInfoTestClasses />
    </div>
  );
};

export default testClasses;
