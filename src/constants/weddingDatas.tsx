import { type WeddingData } from '../types/models';

import felixAndAmalyaImg from '../assets/images/wedding-1.jpg';
import brunoMarsSong from '../assets/audios/Bruno Mars - Merry You.mp3';

export const WEDDING_DATAS: WeddingData[] = [
  {
    id: 'FelixAndAmalya',
    img: felixAndAmalyaImg,
    song: brunoMarsSong,
    title: 'Ֆելիքս և Ամալյա',
    weddingDateText: '21 Հունիս 2026',
    weddingDate: new Date(2026, 5, 21),
    programEvents: [
      {
        name: 'brideHouse',
        time: '11:30',
        locationText: 'Կոմիտաս 51',
        location: 'https://yandex.com/maps/10262/yerevan/house/YE0YcwZoSUcBQFpqfX5xdnxnYQ==/?ll=44.518026%2C40.207045&utm_source=share&z=17.05',
      },
      {
        name: 'church',
        time: '16:00',
        place: 'Սաղմոսավանք',
        locationText: 'Արագածոտնի մարզ, գ. Սաղմոսավան',
        location: 'https://yandex.com/maps/org/8680895053/?ll=44.394665%2C40.380342&utm_source=share&z=16.87',
      },
      {
        name: 'party',
        time: '17:45',
        place: '«Ֆլորենս» ռեստորան',
        locationText: 'Բարբյուսի փող., 64/2 շենք',
        location: 'https://yandex.com/maps/org/46488697731/?ll=44.481653%2C40.194364&utm_source=share&z=17',
      },
    ],
    infoMessage: 'Փոքրիկ հյուրերին խնդրում ենք մինչև ժամը 22:30 մնալ ներքևի սրահում՝ անվտանգության նկատառումներից ելնելով: Մենք հոգ ենք տարել մեր փոքրիկ հյուրերի հանգստի մասին․ ներքևի հատուկ սրահում նրանց սպասվում է հետաքրքիր ժամանցային ծրագիր։',
    dressCodeMessage: 'Հանդիսավոր հագուստ: Կանանց համար երեկոյան հագուստ։ Տղամարդկանց համար փողկապը պարտադիր չէ։ Խնդրում ենք ընտրել հագուստ՝ բացառելով սպիտակի և բուրգունդիի երանգները։',
    phoneNumbers: ['098 123 456', '077 123 456'],
  },
];
