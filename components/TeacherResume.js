'use client';
import React from 'react';
import Image from 'next/image';
import ProfilePicture from '/public/images/Resume/resume_1.jpg';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const TeacherResume = () => {
  const resumeImg = [
    {
      src: '/images/Resume',
      url: 'resume',
      numbers: [2, 3, 4, 5, 6, 7],
    },
  ];

  const [{ src, url, numbers }] = resumeImg;

  const imgs = numbers.map(number => ({
    src: `${src}/${url}_${number}.jpg`,
  }));

  return (
    <div className='main-container relative'>
      <h1>Petra Babošová</h1>
      <Image src={ProfilePicture} className='size-52 flex mx-auto md:mx-0' />
      <div className='my-6 flex flex-col gap-4 md:w-[80ch]'>
        <p>Narodila sa 27.6.1982 v Bratislave</p>
        <p>
          Ako sedem ročná začala navštevovať Základnú umeleckú školu, odbor
          tanec.
        </p>
        <p>
          V roku 1993 bola prijatá na Tanečné konzervatórium Evy Jaczovej v
          Bratislave.
        </p>
        <p>
          Už počas štúdia sa zúčastňovala medzinárodných súťaží a projektov ako
          Tanec pre Európu. Taktiež účinkovala v predstaveniach Slovenského
          národného divadla ako Luskáčik, Don Quiotte alebo Labutie jazero.
        </p>

        <p>
          V roku 2001 ukončila štúdium s vyznamenaním na Tanečnom konzervatóriu
          Evy Jaczovej a bola prijatá do zboru baletu Slovenského národného
          divadla.
        </p>
        <p>
          Počas ôsmich rokov tancovala v baletoch ako Labutie jazero, Luskáčik,
          Spartakus, Spiaca krásavica, Narodil sa chrobáčik, Don Quiotte, La
          Serenade, Gisele, La Bayadere, La Sylphide, Rómeo a Júlia, Rasputin,
          Warhol..
        </p>
        <p>Už počas pôsobenia v SND sa venovala pedagogickej činnosti..</p>
        <p>
          Základy klasického tanca učila krasokorčuliarov na Zimnom štadióne
          Ondreja Nepelu v Bratislave, neskôr dávala tréningy klasického tanca
          profesionálnym tanečníkom programu Let’s dance.
        </p>
        <p>
          V roku 2009 sa presťahovala do Talianska, kde ďalej pôsobila ako
          pedagóg klasického tanca.
        </p>
        <p>
          Od roku 2009 do roku 2011 spolupracovala s Talianskou gymnastickou
          asociaciou FIGI. Podieľala sa na technickej príprave gymnastiek na
          sútaže rôznych úrovní.
        </p>
        <p>
          V roku 2010 zložila skúšky a stala sa Technickým trénerom rytmickej
          gymnastiky I. stupňa a teda sa začala zúčastňovať na oficiálnych
          súťažiach FIGI a CONI.
        </p>
        <p>
          Od roku 2011 pôsobila ako pedagóg klasického tanca pre súkromnú
          tanečnú školu v meste San Vito al Tagliamento.
        </p>
        <p>
          Jej žiaci vyhrali mnohé ocenenia na tanečných súťažiach v regiónoch
          Veneto a Friuli Venezia Giulia.
        </p>
        <p>
          Od roku 2015 viedla odbor klasického tanca pre školu Ginnastica
          Sanvitese.
        </p>
        <p>
          Jej žiaci boli prijatí na profesionálnu školu Academia di la Scala di
          Milano, Kde úspešne pokračovali v štúdiu a obdržali maturitný diplom.
        </p>
        <p>
          V roku 2022 sa presťahovala na Slovensko, kde začala učiť na Súkromnej
          základnej umeleckej škole v Bratislave.
        </p>
        <p>
          V apríli 2023 otvorila svoju tanečnú školu zameranú na výučbu
          klasického tanca Ballet point v Bratislavskej mestskej časti Lamač,
          odkiaľ pochádza.
        </p>
        <p>
          Od septembra 2023 externe študuje na Vysokej škole Múzickýh umení v
          Bratislave
        </p>
      </div>
      <div className='flex gap-4 flex-wrap md:w-[80ch] items-center justify-center md:justify-normal'>
        Pre viac informáci si môžete prečítať rozhovor s pani učiteľkou v
        Lamačanovi
        <Link
          href='https://lamacan.sk/rozhovory/petra-babosova-baletka-ktorej-studenti-uspeli-v-la-scale'
          className=' hover:text-[#cca300] hover:border-[#cca300] flex items-center gap-4 border p-2 rounded-xl w-fit border-zinc-500'
          target='_blank'
        >
          prečítať <FaArrowRight />
        </Link>
      </div>
      <div className='h-[700px]'>
        <Carousel images={imgs} />
      </div>
    </div>
  );
};

export default TeacherResume;
