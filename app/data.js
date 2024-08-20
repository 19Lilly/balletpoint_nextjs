import { v4 as uuid } from 'uuid';

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
    SK: 'Kontakt',
    EN: 'Contact',
    href: '/contact',
  },
];

const quicklinks = [
  {
    id: uuid(),
    title: 'Zápis 2024/2025',
    href: '/registration',
  },
  {
    id: uuid(),
    title: 'Info',
    href: '/trainings',
  },
  {
    id: uuid(),
    title: 'Galéria',
    href: '/gallery',
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
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: uuid(),
    title: 'Záverečný koncert - 30.6.2024',
    url: 'finalConcert_30_6_2024',
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    id: uuid(),
    title: 'Ballet point - Letný tábor 2024',
    url: 'balletPoint_summerCamp2024',
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
];

export { navigation, quicklinks, platby, galleryData };
