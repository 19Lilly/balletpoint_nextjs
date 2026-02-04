import { FaRegFilePdf } from 'react-icons/fa';


const Taxes = () => {
  return (
    <div className='main-container'>
      <h1>2% z dane </h1>
      <div className='w-full flex flex-col gap-8 pt-8'>
        <p className='text-pretty md:w-[80ch] '>
          .. 2% z dane, ktoré venujete Ballet pointu nám pomôžu kúpiť viac
          potrebného vybavenia pre našich žiakov, ako práve zakúpená profi
          baletná tyč.
        </p>
        <p className='text-pretty md:w-[80ch] '>Ďakujeme za Vašu pomoc.</p>
      </div>

      <a
        href='/images/tlacivo_2PercentaZDane_Balletpoint.pdf'
        download='tlacivo_2Percenta_Balletpoint'
        className='hover:text-[#cca300] flex flex-col justify-center items-center gap-2'
      >
        <FaRegFilePdf className='size-20' />
        Stiahnuť tlačivo
      </a>
    </div>
  );
};

export default Taxes;
