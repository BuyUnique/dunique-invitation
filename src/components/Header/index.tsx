import React, { useEffect, useState } from 'react';

import weddingImg from '../../assets/images/wedding-1.jpg';
import curtainWhiteImg from '../../assets/images/curtain-white.png';
import arrowDownIcon from '../../assets/icons/arrow-down.png';

export const Header: React.FC = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsPageLoaded(true);
    };

    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);

      return () => window.removeEventListener('load', handlePageLoad);
    }
  }, []);

  return (
    isPageLoaded && (
      <header style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${weddingImg})` }} className="relative w-full h-dvh flex flex-col justify-center items-center bg-cover bg-center">
        <h1 className="text-shadow-1 text-[100px] italic text-white animate-text-appear [animation-duration:4s] max-[800px]:text-[60px] max-[500px]:text-[40px]">Ֆելիքս և Ամալյա</h1>
        <p className="text-shadow-1 text-[70px] text-white animate-text-appear [animation-duration:4.5s] max-[800px]:text-[40px] max-[500px]:text-[30px]">21 Հունիս 2026</p>
        <div style={{ backgroundImage: `url(${curtainWhiteImg})` }} className="absolute top-0 left-0 w-[50%] h-full bg-cover z-2 animate-curtain-open origin-left" />
        <div style={{ backgroundImage: `url(${curtainWhiteImg})` }} className="absolute top-0 right-0 w-[50%] h-full bg-cover z-2 animate-curtain-open origin-right" />
        <button type="button" className="absolute bottom-7.5 size-17.5 rounded-full cursor-pointer transition-all hover:bg-black/30">
          <img src={arrowDownIcon} alt="Arrow down" className="w-17.5 h-10 object-contain z-1 animate-pulse [animation-duration:2.5s] mt-1.25" />
        </button>
      </header>
    )
  );
};
