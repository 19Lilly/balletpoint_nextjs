import { v4 as uuid } from 'uuid';
import OrganizationInfo from '@/components/OrganizationInfo';

const navigation = [
  {
    id: uuid(),
    SK: 'Domov',
    EN: 'Home',
    href: '/',
  },
  {
    id: uuid(),
    SK: 'O nás',
    EN: 'About us',
    href: '/about',
  },

  {
    id: uuid(),
    SK: 'Tréningy',
    EN: 'Trainings',
    href: '/trainings',
  },
  {
    id: uuid(),
    SK: 'Galéria',
    EN: 'Gallery',
    href: '/gallery',
  },
  {
    id: uuid(),
    SK: 'Podujatia',
    EN: 'Events',
    href: '/events',
  },
  {
    id: uuid(),
    SK: 'Kontakt',
    EN: 'Contact',
    href: '/contact',
  },
];

const aboutNavData = [
  {
    id: uuid(),
    name: 'Ballet point',
    url: '/about',
  },
  {
    id: uuid(),
    name: 'Pedagóg',
    url: '/about/teacher',
  },
];

const trainingsNavData = [
  {
    id: uuid(),
    name: 'Skupiny',
    url: '/trainings',
  },
  {
    id: uuid(),
    name: 'Rozvrh hodín',
    url: '/trainings/timeSchedule',
  },
  {
    id: uuid(),
    name: 'Platby',
    url: '/trainings/payments',
  },
  {
    id: uuid(),
    name: 'Info',
    url: '/trainings/info',
  },
];

const summerCamp2025Data = [
  {
    id: uuid(),
    name: 'Denný letný tábor 2025',
    url: '/summerCamp2025',
  },
  {
    id: uuid(),
    name: 'Inštrukcie',
    url: '/summerCamp2025/instructions',
  },
  {
    id: uuid(),
    name: 'Denný rozvrh',
    url: '/summerCamp2025/dailySchedule',
  },
];

const infoData = [
  {
    id: uuid(),
    date: '6.9.2024',
    title: 'Organizácia hodín Ballet pointu',
    url: 'organization-info-ballet-point',
    component: <OrganizationInfo />,
  },
];

const quicklinks = [
  {
    id: uuid(),
    title: 'Denný letný tábor 2025',
    href: '/summerCamp2025',
  },
  {
    id: uuid(),
    title: 'Info',
    href: '/trainings/info',
  },
  {
    id: uuid(),
    title: 'Galéria',
    href: '/gallery',
  },
];

const groupsData = [
  {
    id: uuid(),
    name: 'Classic 1',
    age: '4-6 rokov',
  },
  {
    id: uuid(),
    name: 'Classic 2',
    age: '6-7 rokov',
  },
  {
    id: uuid(),
    name: 'Classic 3',
    age: '8-12 rokov',
  },
];

const platby = [
  {
    id: uuid(),
    name: '1.platba',
    months: 'September + Október',
    dueDate: '3.9.2024',
  },
  {
    id: uuid(),
    name: '2.platba',
    months: 'November + December + Január',
    dueDate: '5.11.2024',
  },
  {
    id: uuid(),
    name: '3.platba',
    months: 'Február + Marec + Apríl',
    dueDate: '4.2.2025',
  },
  {
    id: uuid(),
    name: '4.platba',
    months: 'Máj + Jún',
    dueDate: '2.5.2025',
  },
];

const galleryData = [
  {
    id: uuid(),
    title: 'Naše hodiny',
    url: 'ourClasses',
    numbers: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23,
    ],
  },
  {
    id: uuid(),
    title: 'Záverečný koncert - 30.6.2024',
    url: 'finalConcert_june2024',
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    id: uuid(),
    title: 'Ballet point - Letný tábor 2024',
    url: 'balletPoint_SummerCamp2024',
    numbers: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
    ],
  },
  {
    id: uuid(),
    title: 'SND - Narodil sa chrobáčik a Rukopisy majstrov galéria',
    url: 'tripToSND',
    numbers: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  },
  {
    id: uuid(),
    title: 'Rozálske hody',
    url: 'RozalskeHody',
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  },
  {
    id: uuid(),
    title: 'Prespávačka 2024',
    url: 'sleepoverAutumn2024',
    numbers: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: uuid(),
    title: 'DOD 2025 - Tanečné konzervatórium Evy Jaczovej',
    url: 'DOD_TKEJ_2025',
    numbers: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: uuid(),
    title: 'Koncert Ballet point - marec 2025',
    url: 'concertBalletPoint_March2025',
    numbers: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22,
    ],
  },
  {
    id: uuid(),
    title: 'Koncert Ballet point - jún 2025',
    url: 'concertBalletPoint_June2025',
    numbers: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24,
    ],
  },
  {
    id: uuid(),
    title: 'Ballet point - Letný tábor 2025',
    url: 'balletPoint_SummerCamp2025',
    numbers: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ],
  },
];

const eventsData = [
  {
    id: uuid(),
    date: '7.september 2025',
    time: '14:30',
    title: 'Festival vodníkov',
    place: 'Vodárenská záhrada, Karlova ves',
    url: 'https://www.karlovaves.sk/kulturne-leto-festival-vodnikov-2025/',
    img: '/images/festival_vodnikov_09_2025.png',
    participate: ['Classic 3'],
    active: true,
    targetBlank: true,
  },
  {
    id: uuid(),
    date: '31.august 2025',
    time: '17:00 - 17:15',
    title: 'Rozálske hody 2025',
    place: 'Malokarpatské námestie, Lamač',
    url: 'https://www.lamac.sk/novinky/rozalske-hody-2025',
    // urlGallery: '/gallery/RozalskeHody',
    img: '/images/rozalske-hody-2025.jpg',
    participate: ['Classic 1, Classic 2, Classic 3'],
    active: true,
    targetBlank: true,
  },
  {
    id: uuid(),
    date: '29.6.2025',
    time: '17:00',
    title: 'Koncert žiakov Ballet pointu',
    place: 'Kino Lamač, Malokarpatské námestie3',
    url: 'events/KoncertZiakovMarec2025',
    urlGallery: '/gallery/concertBalletPoint_June2025',
    img: '/images/koncert_ziakov_jun2025.jpg',
    participate: ['MČ Podunajské Biskupice, MČ Lamač'],
    active: false,
    targetBlank: false,
  },
  {
    id: uuid(),
    date: '9.3.2025',
    time: '17:00',
    title: 'Koncert žiakov Ballet pointu',
    place: 'Kino Lamač, Malokarpatské námestie3',
    url: 'events/KoncertZiakovMarec2025',
    urlGallery: '/gallery/concertBalletPoint_March2025',
    img: '/images/koncert_ziakov_marec2025.jpg',
    participate: ['MČ Podunajské Biskupice, MČ Lamač'],
    active: false,
    targetBlank: false,
  },

  {
    id: uuid(),
    date: '8.septembra 2024',
    time: '16:50 - 17:05',
    title: 'Rozálske hody 2024',
    place: 'Malokarpatské námestie, Lamač',
    url: 'https://www.lamac.sk/novinky/rozalske-hody-2024',
    urlGallery: '/gallery/RozalskeHody',
    img: '/images/rozalske-hody-2024.webp',
    participate: ['Classic 1, Classic 2, Classic 3'],
    active: false,
    targetBlank: false,
  },
];

const contactData = [
  {
    title: 'Lamač',
    adresa: {
      ulica: 'Malokarpatské námestie 3',
      psč: '841 03',
      mesto: 'Bratislava',
    },
    src: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5319.241521892788!2d17.05248!3d48.194658000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8d5fd4469fbf%3A0xa57bfaef1346bc5b!2zVGFuZcSNbsOhIMWha29sYSBEYW5jZXJz!5e0!3m2!1sen!2ssk!4v1724357424517!5m2!1sen!2ssk',
  },
  {
    title: 'Podunajské Biskupice',
    adresa: {
      nazov: 'ZŠ Podzáhradná',
      ulica: 'Podzáhradná 5233/51',
      psč: '821 06',
      mesto: 'Bratislava',
    },
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.872579860212!2d17.206595999999998!3d48.1319806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c861c325668af%3A0xdd1ad1e520abab40!2zWsOha2xhZG7DoSDFoWtvbGEgUG9kesOhaHJhZG7DoQ!5e0!3m2!1ssk!2ssk!4v1724357744984!5m2!1ssk!2ssk',
  },
];

export {
  navigation,
  aboutNavData,
  trainingsNavData,
  summerCamp2025Data,
  quicklinks,
  groupsData,
  infoData,
  platby,
  galleryData,
  eventsData,
  contactData,
};
