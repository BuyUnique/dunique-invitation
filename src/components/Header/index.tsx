import React from 'react';

import arrowDownIcon from '../../assets/icons/arrow-down.png';
import { WEDDING_DATE_SECTION_ID } from '../../constants/sectionIds';

export const Header: React.FC = () => {
  return (
    <header className="relative w-full h-dvh flex flex-col justify-center items-center z-3">
      <h1 className="text-[100px] font-bold italic text-white text-shadow-1 animate-text-appear [animation-duration:4s] max-[970px]:text-[80px] max-[770px]:text-[60px] max-[580px]:text-[40px] max-[400px]:text-[30px]">Ֆելիքս և Ամալյա</h1>
      <p className="text-[70px] font-medium text-white text-shadow-1 animate-text-appear [animation-duration:4.5s] max-[970px]:text-[50px] max-[770px]:text-[40px] max-[580px]:text-[25px] max-[400px]:text-[20px]">21 Հունիս 2026</p>
      <a href={`#${WEDDING_DATE_SECTION_ID}`} className="absolute bottom-7.5 size-17.5 flex justify-center items-center rounded-full transition-all hover:bg-black/30">
        <img src={arrowDownIcon} alt="Arrow down" className="w-17.5 h-10 object-contain mt-1.25" />
      </a>
    </header>
  );
};
