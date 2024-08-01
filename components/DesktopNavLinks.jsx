import Link from 'next/link'

import React from 'react'

const DesktopNavLinks = () => {

     const navigation = [
    {
      SK: 'Domov',
      EN: 'Home',
    },
    {
      SK: 'O nás',
      EN: 'About us',
    },
    {
      SK: 'Pedagóg',
      EN: 'Teacher',
    },
    {
      SK: 'Skupiny',
      EN: 'Groups',
    },
    {
      SK: 'Podujatia',
      EN: 'Events',
    },
    {
      SK: 'Pripravujeme',
      EN: 'Coming up',
    },
    {
      SK: 'Kde nás nájdete',
      EN: 'Where to find us',
    },
  ];

  return (
      <ul className="flex justify-between gap-4 p-2 mx-auto border " >
          {navigation.map((item, index) => {
           return (<li className="p-2">
               <Link key={index} href={item}>{item.SK} </Link>
            </li>)
          })} 
     
    </ul>
  )
}

export default DesktopNavLinks