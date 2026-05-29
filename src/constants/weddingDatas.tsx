import { type WeddingData } from '../types/models';

import felixAndAmalyaImg from '../assets/images/wedding-1.jpg';
import brunoMarsSong from '../assets/audios/Bruno Mars - Merry You.mp3';

export const WEDDING_DATAS: WeddingData[] = [
  {
    id: 'DavidAndHasmik',
    img: felixAndAmalyaImg,
    song: brunoMarsSong,
    title: 'Դավիթ և Հասմիկ',
    weddingDateText: '14 Հունիս 2026',
    weddingDate: new Date(2026, 5, 14),
    programEvents: [
      {
        name: 'brideHouse',
        time: '11:30',
        locationText: 'Կոմիտաս 12',
        location: 'https://yandex.com/maps/-/CPwXr-kX',
      },
      {
        name: 'church',
        time: '16:00',
        place: 'Խոր Վիրապ վանք',
        locationText: 'Արարատի մարզ, գ. Խոր Վիրապ',
        location: 'https://yandex.com/maps/-/CPwXvW-s',
      },
      {
        name: 'party',
        time: '17:30',
        place: '«Ֆլորենս» ռեստորան',
        locationText: 'Բարբյուսի փող., 64/2 շենք',
        location: 'https://yandex.com/maps/org/46488697731/?ll=44.481653%2C40.194364&utm_source=share&z=17',
      },
    ],
    infoMessage: 'Փոքրիկ հյուրերին խնդրում ենք մինչև ժամը 22:30 մնալ ներքևի սրահում՝ անվտանգության նկատառումներից ելնելով: Մենք հոգ ենք տարել մեր փոքրիկ հյուրերի հանգստի մասին․ ներքևի հատուկ սրահում նրանց սպասվում է հետաքրքիր ժամանցային ծրագիր։',
    dressCodeMessage: 'Խնդրում ենք ընտրել հանդիսավոր հագուստ շագանակագույնի կամ կանաչ երագների մեջ ՝ բացառելով սպիտակ գույնի օգտագործումը։',
    phoneNumbers: ['098 123 456', '077 123 456'],
  },
];
