import React, { memo, useCallback, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import playIcon from '../../assets/icons/play.png';
import pauseIcon from '../../assets/icons/pause.png';
import { ArrowDown } from '../ArrowDown';
import { type WeddingData } from '../../types/models';

interface Props {
  data: WeddingData;
  onScrollToSectionClick: () => void;
}

const Component: React.FC<Props> = ({ data, onScrollToSectionClick }) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(new Audio(data.song));

  const handleAudioToggleClick = useCallback(async () => {
    if (audioRef.current.paused) {
      await audioRef.current.play();

      setIsAudioPlaying(true);
    } else {
      audioRef.current.pause();

      audioRef.current.currentTime = 0;

      setIsAudioPlaying(false);
    }
  }, []);

  return (
    <header className="relative w-full h-dvh flex flex-col justify-center items-center">
      <motion.button
        className="size-13.5 absolute top-7.5 flex justify-center items-center border-3 border-white rounded-full z-1"
        initial={{ opacity: 0.7, scale: 1 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror' }}
        onClick={handleAudioToggleClick}
      >
        <AnimatePresence mode="wait">
          {isAudioPlaying ? (
            <motion.img
              key="pause"
              className="size-10.5 object-contain"
              initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 15 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              src={pauseIcon}
              alt="Pause"
            />
          ) : (
            <motion.img
              key="play"
              className="size-12 object-contain ml-1"
              initial={{ opacity: 0, scale: 0.7, rotate: 15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: -15 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              src={playIcon}
              alt="Play"
            />
          )}
        </AnimatePresence>
      </motion.button>
      <motion.h1
        className="text-[100px] font-bold italic text-center text-white text-shadow-1 max-[970px]:text-[80px] max-[770px]:text-[60px] max-[580px]:text-[40px] max-[400px]:text-[30px]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 3, ease: 'easeOut' }}
        viewport={{ once: true, amount: 'all' }}
      >
        {data.title}
      </motion.h1>
      <motion.p
        className="text-[70px] font-medium text-center text-white text-shadow-1 max-[970px]:text-[50px] max-[770px]:text-[40px] max-[580px]:text-[25px] max-[400px]:text-[20px]"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 3.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 'all' }}
      >
        {data.weddingDateText}
      </motion.p>
      <ArrowDown className="absolute bottom-7.5 z-1" onClick={onScrollToSectionClick} />
    </header>
  );
};

export const Header = memo(Component);
