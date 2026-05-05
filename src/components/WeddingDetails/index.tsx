import React from 'react';

import flowerWhiteImg from '../../assets/images/flower-white.png';
import weddingDressImg from '../../assets/images/wedding-dress.png';
import ringImg from '../../assets/images/ring.png';
import champagneGlassesImg from '../../assets/images/champagne-glasses.png';
import { SECTION_IDS } from '../../constants/sectionIds';
import { Calendar } from '../Calendar';
import { ArrowDown } from '../ArrowDown';
import { InfoMessage } from '../InfoMessage';

export const WeddingDetails: React.FC = () => {
  const weddingDate = new Date(2026, 5, 21);

  return (
    <div className="relative inset-0 after:absolute after:content-[''] after:inset-0 after:bg-black/40 after:rounded-tl-4xl after:rounded-tr-4xl z-2">
      <div className="relative z-3 p-[80px_30px] max-[500px]:p-[60px_20px]">
        <div id={SECTION_IDS.WEDDING_DATE} className="flex flex-col items-center mb-22 max-[500px]:mb-17">
          <h2 className="max-w-100 text-[42px] font-medium italic text-white text-shadow-1 animate-text-appear [animation-duration:4s] mb-22 max-[970px]:text-[32px] max-[970px]:max-w-75 max-[770px]:text-[28px] max-[770px]:max-w-65 max-[500px]:mb-17 max-[400px]:text-[22px] max-[400px]:max-w-51.25">Սիրելի՛ ընկերներ և հարազատներ</h2>
          <ArrowDown href={`#${SECTION_IDS.WEDDING_PROGRAM}`} className="mb-22 max-[500px]:mb-17" />
          <Calendar selected={weddingDate} month={weddingDate} className="mb-22 max-[500px]:mb-17" />
          <img src={flowerWhiteImg} alt="Flower" className="size-25 object-contain" />
        </div>
        <div id={SECTION_IDS.WEDDING_PROGRAM} className="flex flex-col items-center mb-22 max-[500px]:mb-17">
          <h2 className="text-[42px] font-medium italic text-white text-shadow-1 animate-text-appear [animation-duration:4s] mb-22 max-[970px]:text-[32px] max-[770px]:text-[28px] max-[500px]:mb-17 max-[400px]:text-[22px]">Օրվա ծրագիրը</h2>
          <div className="w-full flex flex-wrap justify-center gap-16 mb-22 max-[500px]:mb-17">
            <div className="max-w-87.5 min-w-50 flex flex-1/3 flex-col items-center gap-2">
              <img src={weddingDressImg} alt="Wedding Dress" className="size-25 object-contain" />
              <p className="text-[22px] text-white max-[770px]:text-[20px]">Հարսի տուն</p>
              <p className="italic text-[24px] text-white mb-2 max-[770px]:text-[22px]">11:30</p>
              <p className="text-[22px] text-white text-center mb-2 max-[770px]:text-[20px]">Կոմիտաս 51</p>
              <a href="https://yandex.com/maps/10262/yerevan/house/YE0YcwZoSUcBQFpqfX5xdnxnYQ==/?ll=44.518026%2C40.207045&utm_source=share&z=17.05" target="_blank" rel="noopener noreferrer" className="text-[18px] bg-amber-400 text-white rounded-3xl transition-all p-[6px_18px] hover:bg-white hover:text-black">Ինչպես գնալ</a>
            </div>
            <div className="max-w-87.5 min-w-50 flex flex-1/3 flex-col items-center gap-2">
              <img src={ringImg} alt="Ring" className="size-25 object-contain" />
              <p className="text-[22px] text-white max-[770px]:text-[20px]">Պսակադրություն</p>
              <p className="italic text-[24px] text-white mb-2 max-[770px]:text-[22px]">16:00</p>
              <p className="text-[22px] text-white text-center max-[770px]:text-[20px]">Սաղմոսավանք</p>
              <p className="text-[22px] text-white text-center mb-2 max-[770px]:text-[20px]">Արագածոտնի մարզ, գ. Սաղմոսավան</p>
              <a href="https://yandex.com/maps/org/8680895053/?ll=44.394665%2C40.380342&utm_source=share&z=16.87" target="_blank" rel="noopener noreferrer" className="text-[18px] bg-amber-400 text-white rounded-3xl transition-all p-[6px_18px] hover:bg-white hover:text-black">Ինչպես գնալ</a>
            </div>
            <div className="max-w-87.5 min-w-50 flex flex-1/3 flex-col items-center gap-2">
              <img src={champagneGlassesImg} alt="Champagne Glasses" className="size-25 object-contain" />
              <p className="text-[22px] text-white max-[770px]:text-[20px]">Ընթրիք-ընդունելություն</p>
              <p className="italic text-[24px] text-white mb-2 max-[770px]:text-[22px]">17:45</p>
              <p className="text-[22px] text-white text-center max-[770px]:text-[20px]">«Ֆլորենս» ռեստորան</p>
              <p className="text-[22px] text-white text-center mb-2 max-[770px]:text-[20px]">Բարբյուսի փող., 64/2 շենք</p>
              <a href="https://yandex.com/maps/org/46488697731/?ll=44.481653%2C40.194364&utm_source=share&z=17" target="_blank" rel="noopener noreferrer" className="text-[18px] bg-amber-400 text-white rounded-3xl transition-all p-[6px_18px] hover:bg-white hover:text-black">Ինչպես գնալ</a>
            </div>
          </div>
          <InfoMessage className="mb-22 max-[500px]:mb-17" message="Փոքրիկ հյուրերին խնդրում ենք մինչև ժամը 22:30 մնալ ներքևի սրահում՝ անվտանգության նկատառումներից ելնելով: Մենք հոգ ենք տարել մեր փոքրիկ հյուրերի հանգստի մասին․ ներքևի հատուկ սրահում նրանց սպասվում է հետաքրքիր ժամանցային ծրագիր։" />
          <ArrowDown href={`#${SECTION_IDS.DRESS_CODE}`} />
        </div>
        <div id={SECTION_IDS.DRESS_CODE} className="flex flex-col items-center">
          <h2 className="text-[42px] font-medium italic text-white text-shadow-1 animate-text-appear [animation-duration:4s] mb-8 max-[970px]:text-[32px] max-[770px]:text-[28px] max-[400px]:text-[22px]">Դրեսս կոդ</h2>
          <InfoMessage message="Հանդիսավոր հագուստ: Կանանց համար երեկոյան հագուստ։ Տղամարդկանց համար փողկապը պարտադիր չէ։ Խնդրում ենք ընտրել հագուստ՝ բացառելով սպիտակի և բուրգունդիի երանգները։" />
        </div>
      </div>
    </div>
  );
};
