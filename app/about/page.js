import Signature from '@/components/Signature';

export const metadata = {
  title: 'O nás',
};

const About = () => {
  return (
    <div className='main-container select-none'>
      <h1 className=''>Ballet Point</h1>

      <p className='text-pretty md:w-[80ch] '>
        Ballet point som založila v apríli 2023 pretože verím, že tak ako som ja
        začala moju tanečnú kariéru v Lamači, aj ďalšie talentované deti musia
        dostať túto príležitosť.
      </p>
      <p className='text-pretty md:w-[80ch]'>
        V Ballet point máme dôležité predsavzatie.. ukázať klasický tanec-balet
        ľuďom tak, ako ho ešte nepoznajú a priblížiť techniky moderného tanca
        ktorý má obrovský výrazový potenciál.
      </p>
      <p className='text-pretty md:w-[80ch]'>
        Tanec je súčasťou života človeka od nepamäti. Bol s nami dokonca skôr
        ako hovorené slovo. Často vieme pohybom-tancom vyjadriť emócie, na ktoré
        slová nestačia.
      </p>
      <p className='text-pretty md:w-[80ch]'>
        V Ballet point robíme presne toto-rozprávame pohybom tvoríme umenie.{' '}
      </p>
      <div className='md:w-[80ch] flex flex-col gap-2 '>
        <Signature className='md:-ml-6' />
        <p>Petra Babošová</p>
      </div>
    </div>
  );
};

export default About;
