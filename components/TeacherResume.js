import React from 'react';
import Image from 'next/image';
import ProfilePicture from '/public/images/Resume/resume_images_00.jpg';
import DancingAlone from '/public/images/Resume/resume_images_01.jpg';

const TeacherResume = () => {
  return (
    <div className='main-container relative'>
      <h1 className='m-0 mb-10 mx-auto text-center flex md:mx-0 md:text-left'>
        Petra Babošová
      </h1>
      <Image src={ProfilePicture} className='size-52 flex mx-auto md:mx-0' />
      <ul className='my-6 flex flex-col gap-4 md:w-[80ch]'>
        <li>Narodila sa 27.6.1982 v Bratislave</li>
        <li>
          Ako sedem ročná začala navštevovať Základnú umeleckú školu, odbor
          tanec.
        </li>
        <li>
          V roku 1993 bola prijatá na Tanečné konzervatórium Evy Jaczovej v
          Bratislave.
        </li>
        <li>
          Už počas štúdia sa zúčastňovala medzinárodných súťaží a projektov ako
          Tanec pre Európu. Taktiež účinkovala v predstaveniach Slovenského
          národného divadla ako Luskáčik, Don Quiotte alebo Labutie jazero.
        </li>

        <li>
          V roku 2001 ukončila štúdium s vyznamenaním na Tanečnom konzervatóriu
          Evy Jaczovej a bola prijatá do zboru baletu Slovenského národného
          divadla.
        </li>
        <li>
          Počas ôsmich rokov tancovala v baletoch ako Labutie jazero, Luskáčik,
          Spartakus, Spiaca krásavica, Narodil sa chrobáčik, Don Quiotte, La
          Serenade, Gisele, La Bayadere, La Sylphide, Rómeo a Júlia, Rasputin,
          Warhol..
        </li>
        <li>Už počas pôsobenia v SND sa venovala pedagogickej činnosti..</li>
        <li>
          Základy klasického tanca učila krasokorčuliarov na Zimnom štadióne
          Ondreja Nepelu v Bratislave, neskôr dávala tréningy klasického tanca
          profesionálnym tanečníkom programu Let’s dance.
        </li>
        <li>
          V roku 2009 sa presťahovala do Talianska, kde ďalej pôsobila ako
          pedagóg klasického tanca.
        </li>
        <li>
          Od roku 2009 do roku 2011 spolupracovala s Talianskou gymnastickou
          asociaciou FIGI. Podieľala sa na technickej príprave gymnastiek na
          sútaže rôznych úrovní.
        </li>
        <li>
          V roku 2010 zložila skúšky a stala sa Technickým trénerom rytmickej
          gymnastiky I. stupňa a teda sa začala zúčastňovať na oficiálnych
          súťažiach FIGI a CONI.
        </li>
        <li>
          Od roku 2011 pôsobila ako pedagóg klasického tanca pre súkromnú
          tanečnú školu v meste San Vito al Tagliamento.
        </li>
        <li>
          Jej žiaci vyhrali mnohé ocenenia na tanečných súťažiach v regiónoch
          Veneto a Friuli Venezia Giulia.
        </li>
        <li>
          Od roku 2015 viedla odbor klasického tanca pre školu Ginnastica
          Sanvitese.
        </li>
        <li>
          Jej žiaci boli prijatí na profesionálnu školu Academia di la Scala di
          Milano, Kde úspešne pokračovali v štúdiu a obdržali maturitný diplom.
        </li>
        <li>
          V roku 2022 sa presťahovala na Slovensko, kde začala učiť na Súkromnej
          základnej umeleckej škole v Bratislave.
        </li>
        <li>
          V apríli 2023 otvorila svoju tanečnú školu zameranú na výučbu
          klasického tanca Ballet point v Bratislavskej mestskej časti Lamač,
          odkiaľ pochádza.
        </li>
        <li>
          Od septembra 2023 externe študuje na Vysokej škole Múzickýh umení v
          Bratislave
        </li>
      </ul>
    </div>
  );
};

export default TeacherResume;
