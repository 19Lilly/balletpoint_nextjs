const OrganizationInfo = () => {
  return (
    <>
      <p className='md:w-[80ch] text-pretty'>
        Nových žiakov zaradíme do vyučovania budúci týždeň. Momentálne
        prebiehajú skúšky choreografií na plánované vystúpenia.
      </p>
      <p className='md:w-[80ch] text-left '>
        Priniesť si treba:
        <ul className='ml-20 list-image-[url(/images/ballet.png)] flex flex-col gap-4 my-6'>
          <li>Cvičky bielej farby</li>
          <li>Pančušky bielej farby</li>
          <li>
            Dres - budeme kupovať spoločne po ustálení zápisov. Zatiaľ stačí
            Legins + krátke tričko
          </li>
          <li>Taška</li>
          <li>Vreckovky</li>
          <li>Voda - fľaška, ktorú vie dieťa samo otvoriť</li>
        </ul>
      </p>
      <p className='md:w-[80ch] text-left'>
        Na hodine je možné sa zúčastniť len s vlasmi učesanými do drdolu!
        Potrebné:
        <ul className='ml-20 list-image-[url(/images/ballet.png)] flex flex-col gap-4 my-6'>
          <li>Gumička</li>
          <li>Vlásenky</li>
          <li>Sponky vo farbe vlasov - tenké</li>
          <li>Sieťka</li>
        </ul>
      </p>
      <p className='md:w-[80ch] text-left'>
        Potrebné veci môžete zakúpiť v obchodoch:
        <ul className='ml-20 list-image-[url(/images/ballet.png)] flex flex-col gap-4 my-6'>
          <li>Solodance - Vyšehradská 6, Petržalka</li>
          <li>Dance wear - Kopčianska 8, Petržalka</li>
        </ul>
      </p>
    </>
  );
};

export default OrganizationInfo;
