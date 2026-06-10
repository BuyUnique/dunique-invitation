import { type WeddingData } from '../types/models';

import IshxanAndSvetlana from '../assets/images/IshxanAndSvetlana.jpg'
import brunoMarsSong from '../assets/audios/Bruno Mars - Merry You.mp3';

export const WEDDING_DATAS: WeddingData[] = [
  {
    id: 'IshxanAndSvetlana',
    img: IshxanAndSvetlana,
    song: brunoMarsSong,
    title: 'Իշխան և Սվետլանա',
    weddingDateText: '07 Հուլիս 2026',
    weddingDate: new Date(2026, 6, 7),
    programEvents: [
      {
        name: 'brideHouse',
        time: '12:00',
        locationText: 'Նոր Արեշ, 5րդ փողոց, 14/1',
        location: 'https://yandex.com/maps/-/CPh5EE6i',
      },
      {
        name: 'church',
        time: '14:00',
        place: 'Սուրբ Մարիամ Աստվածածին եկեղեցի',
        locationText: 'Երևան, Նորք Մարաշ',
        location: 'https://yandex.com/maps/-/CPh5ET~a',
      },
      {
        name: 'party',
        time: '17:00',
        place: '«Հրաշք Այգի» ռեստորան',
        locationText: 'Արարատի մարզ, գ․ Դիտակ',
        location: 'https://yandex.com/maps/-/CPh5IPzM',
      },
    ],
    infoMessage: 'Սիրով սպասում ենք ձեզ ',
    dressCodeMessage: 'Հանդիսավոր հագուստ առանց սահմանափակումների',
    phoneNumbers: ['098 390509'],
  },
];
