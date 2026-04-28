import React from 'react';

import arrowDownIcon from '../../assets/icons/arrow-down.png';

export const Header: React.FC = () => {
  return (
    <header className="relative w-full h-dvh flex flex-col justify-center items-center z-3">
      <h1 className="text-[100px] italic text-white text-shadow-1 animate-text-appear [animation-duration:4s] max-[800px]:text-[60px] max-[500px]:text-[40px]">Ֆելիքս և Ամալյա</h1>
      <p className="text-[70px] text-white text-shadow-1 animate-text-appear [animation-duration:4.5s] max-[800px]:text-[40px] max-[500px]:text-[30px]">21 Հունիս 2026</p>
      <button type="button" className="absolute bottom-7.5 size-17.5 rounded-full cursor-pointer transition-all hover:bg-black/30">
        <img src={arrowDownIcon} alt="Arrow down" className="w-17.5 h-10 object-contain animate-pulse [animation-duration:2.5s] mt-1.25" />
      </button>
    </header>
  );
};
