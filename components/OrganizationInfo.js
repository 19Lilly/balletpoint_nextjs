const OrganizationInfo = () => {
  return (
    <>
      <p className='md:w-[80ch] text-left'>
       Na hodiny si treba priniesť:
        <ul className='ml-20 list-image-[url(/images/ballet.png)] flex flex-col gap-4 my-6'>
          <li>Cvičky bielej farby</li>
          <li>Pančušky bielej farby</li>
          <li>
            Dres 
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
