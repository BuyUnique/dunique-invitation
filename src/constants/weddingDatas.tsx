import { type WeddingData } from '../types/models';

import LiannaAndDavit from '../assets/images/LiannaAndDavit.jpg';
import brunoMarsSong from '../assets/audios/Bruno Mars - Merry You.mp3';

export const WEDDING_DATAS: WeddingData[] = [
  {
    id: 'LiannaAndDavit',
    img: LiannaAndDavit,
    imgPosition: '50% 50%',
    song: brunoMarsSong,
    primaryColor: '#00a63d',
    title: 'Լիաննա և Դավիթ',
    weddingDateText: '16 հոկտեմբեր 2026',
    weddingDate: new Date(2026, 9, 16),
    programEvents: [
      {
        name: 'brideHouse',
        time: '11:00',
        locationText: 'Սերո Խանզադյան 38 (Մամիկ հյուրատուն)',
      },
      {
        name: 'church',
        locationText: 'Նախատեսված է այլ օր',
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
    telegramGroupLink: 'https://web.telegram.org/a/',
    phoneNumbers: ['094 025404', '093 170370'],
  },
];
