import '@fontsource-variable/noto-serif-armenian/wght.css';
import "react-day-picker/style.css";
import React, { useState, useEffect, useRef, useCallback, memo } from 'react';

import weddingImg from '../../assets/images/wedding-1.jpg';
import curtainWhiteImg from '../../assets/images/curtain-white-compressed.jpg';
import playIcon from '../../assets/icons/play.png';
import pauseIcon from '../../assets/icons/pause.png';
import { Header } from '../Header';
import { WeddingDetails } from '../WeddingDetails';
import { Footer } from '../Footer';

const Component: React.FC = () => {
  const [isPageReady, setIsPageReady] = useState(false);
  const weddingDateSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);

    const imagestoLoad = [weddingImg, curtainWhiteImg, playIcon, pauseIcon];
    let loadedCount = 0;

    imagestoLoad.forEach((image) => {
      const img = new Image();

      img.src = image;
      img.onload = () => {
        loadedCount++;

        if (loadedCount === imagestoLoad.length) {
          setIsPageReady(true);
        }
      };
    });
  }, []);

  const handleScrollToSectionClick = useCallback(() => {
    if (weddingDateSectionRef.current) {
      weddingDateSectionRef.current.scrollIntoView();
    }
  }, [weddingDateSectionRef]);

  if (!isPageReady) {
    return null;
  }

  return (
    <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${weddingImg})` }} className="h-dvh bg-cover bg-center overflow-y-auto scroll-smooth scroll-touch">
      <Header onScrollToSectionClick={handleScrollToSectionClick} />
      <div className="relative z-1 after:absolute after:content-[''] after:inset-0 after:bg-black/50 after:rounded-tl-4xl after:rounded-tr-4xl">
        <WeddingDetails weddingDateSectionRef={weddingDateSectionRef}  />
        <Footer />
      </div>
      <div style={{ backgroundImage: `url(${curtainWhiteImg})` }} className="fixed top-0 left-0 w-[50%] h-dvh bg-cover z-3 animate-curtain-open origin-left" />
      <div style={{ backgroundImage: `url(${curtainWhiteImg})` }} className="fixed top-0 right-0 w-[50%] h-dvh bg-cover z-3 animate-curtain-open origin-right" />
    </div>
  );
};

export const Page = memo(Component);
