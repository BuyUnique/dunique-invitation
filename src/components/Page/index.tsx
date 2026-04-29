import '@fontsource-variable/noto-serif-armenian/wght.css';
import "react-day-picker/style.css";
import React, { useState, useEffect } from 'react';

import weddingImg from '../../assets/images/wedding-1.jpg';
import curtainWhiteImg from '../../assets/images/curtain-white-compressed.jpg';
import { Header } from '../Header';
import { WeddingDetails } from '../WeddingDetails';

export const Page: React.FC = () => {
  const [isPageReady, setIsPageReady] = useState(false);

  useEffect(() => {
    const imagestoLoad = [weddingImg, curtainWhiteImg];
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

  if (!isPageReady) {
    return null;
  }

  return (
    <div>
      <Header />
      <WeddingDetails />
      <div style={{ backgroundImage: `url(${curtainWhiteImg})` }} className="fixed top-0 left-0 w-[50%] h-dvh bg-cover z-4 animate-curtain-open origin-left" />
      <div style={{ backgroundImage: `url(${curtainWhiteImg})` }} className="fixed top-0 right-0 w-[50%] h-dvh bg-cover z-4 animate-curtain-open origin-right" />
      <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${weddingImg})` }} className="fixed top-0 left-0 w-full h-dvh bg-cover bg-center z-1" />
    </div>
  )
};
