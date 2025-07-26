import React from 'react';
import Image from 'next/image';
import InstructionsImage from '/public/images/instructionsImage.jpg';

export const metadata = {
  title: 'Inštrukcie - Denný letný tábor 2025',
};

const Instructions = () => { 
    return (
        <div className='main-container'>
        <h1>Inštrukcie - denný tábor</h1>
        
         <Image
                  src={InstructionsImage}
                  width={700}
                  height={500}
                  alt='Plagát s inštrukciami pre denný letný tábor 2025'
                />
        </div>
    );
}

export default Instructions;