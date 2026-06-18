import { type WeddingData } from '../types/models';

import KaroAndQristine from '../assets/images/KaroAndQristine.jpg';
import brunoMarsSong from '../assets/audios/Bruno Mars - Merry You.mp3';

export const WEDDING_DATAS: WeddingData[] = [
  {
    id: 'KaroAndQristine',
    img: KaroAndQristine,
    song: brunoMarsSong,
    title: 'Կարո և Քրիստինե',
    weddingDateText: '19 Հուլիս 2026',
    weddingDate: new Date(2026, 6, 19),
    programEvents: [
      {
        name: 'brideHouse',
        time: '11:00',
        locationText: 'Սերո Խանզադյան 38 (Մամիկ հյուրատուն)',
        location: '',
      },
      {
        name: 'church',
        time: '',
        place: '',
        locationText: 'Նախատեսված է այլ օր',
        location: '',
      },
      {
        name: 'party',
        time: '17:30',
        place: '«Ոսկե ծիրան Պրեմիում Հոլ»',
        locationText: 'Արարատի մարզ, ք․ Արտաշատ',
        location: 'https://yandex.com/maps/-/CTAZ5AZD',
      },
    ],
    infoMessage: 'Սիրով սպասում ենք ձեզ ',
    dressCodeMessage: 'Հանդիսավոր հագուստ առանց սահմանափակումների',
    phoneNumbers: ['094 025404', '093 170370'],
  },
];
