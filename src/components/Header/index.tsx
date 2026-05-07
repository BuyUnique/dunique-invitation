import React, { memo } from 'react';

import { ArrowDown } from '../ArrowDown';

interface Props {
  onScrollToSectionClick: () => void;
}

const Component: React.FC<Props> = ({ onScrollToSectionClick }) => {
  return (
    <header className="relative w-full h-dvh flex flex-col justify-center items-center z-3">
      <h1 className="text-[100px] font-bold italic text-white text-shadow-1 animate-text-appear [animation-duration:4s] max-[970px]:text-[80px] max-[770px]:text-[60px] max-[580px]:text-[40px] max-[400px]:text-[30px]">Ֆելիքս և Ամալյա</h1>
      <p className="text-[70px] font-medium text-white text-shadow-1 animate-text-appear [animation-duration:4.5s] max-[970px]:text-[50px] max-[770px]:text-[40px] max-[580px]:text-[25px] max-[400px]:text-[20px]">21 Հունիս 2026</p>
      <ArrowDown className="absolute bottom-7.5" onClick={onScrollToSectionClick} />
    </header>
  );
};

export const Header = memo(Component);
