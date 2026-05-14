import React, { useRef, useCallback, memo } from 'react';
import { clsx } from 'clsx';
import { motion } from 'motion/react'

import heartsWhiteImg from '../../assets/images/hearts-white.png';
import weddingDressImg from '../../assets/images/wedding-dress.png';
import ringImg from '../../assets/images/ring.png';
import champagneGlassesImg from '../../assets/images/champagne-glasses.png';
import { ArrowDown } from '../ArrowDown';
import { useCountdown } from '../../hooks/useCountdown';
import { type TimeParts, type WeddingData } from '../../types/models';

import { Calendar } from './components/Calendar';
import { InfoMessage } from './components/InfoMessage';

const HEARTS_WHITE_CLASS_NAME = "w-[160px] object-contain";

interface Props {
  data: WeddingData;
  weddingDateSectionRef: React.RefObject<HTMLDivElement | null>;
}

const Component: React.FC<Props> = ({ data, weddingDateSectionRef }) => {
  const weddingProgramSectionRef = useRef<HTMLDivElement>(null);
  const dressCodeSectionRef = useRef<HTMLDivElement>(null);
  const countdownSectionRef = useRef<HTMLDivElement>(null);
  const countdown = useCountdown(data.weddingDate);

  const handleScrollToWeddingProgramSectionClick = useCallback(() => {
    if (weddingProgramSectionRef.current) {
      weddingProgramSectionRef.current.scrollIntoView();
    }
  }, [weddingProgramSectionRef]);

  const handleScrollToDressCodeSectionClick = useCallback(() => {
    if (dressCodeSectionRef.current) {
      dressCodeSectionRef.current.scrollIntoView();
    }
  }, [dressCodeSectionRef]);

  const handleScrollToCountdownSectionClick = useCallback(() => {
    if (countdownSectionRef.current) {
      countdownSectionRef.current.scrollIntoView();
    }
  }, [countdownSectionRef]);

  return (
    <div className="relative z-2 p-[80px_30px_40px_30px] max-[500px]:p-[60px_20px_30px_20px]">
      <div ref={weddingDateSectionRef} className="flex flex-col items-center mb-19 max-[500px]:mb-14">
        <motion.h2
          className="max-w-200 text-[42px] font-medium italic text-center text-white text-shadow-1 mb-22 max-[970px]:text-[32px] max-[970px]:max-w-150 max-[770px]:text-[28px] max-[770px]:max-w-130 max-[500px]:mb-17"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true, amount: 'all' }}
        >
          Սիրելի՛ ընկերներ և հարազատներ, սիրով հրավիրում ենք մեր հարսանեկան արարողությանը
        </motion.h2>
        <ArrowDown className="mb-22 max-[500px]:mb-17" onClick={handleScrollToWeddingProgramSectionClick} />
        <motion.div
          className="mb-19 max-[500px]:mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <Calendar selected={data.weddingDate} month={data.weddingDate} />
        </motion.div>
        <img src={heartsWhiteImg} alt="Hearts" className={HEARTS_WHITE_CLASS_NAME} />
      </div>
      <div ref={weddingProgramSectionRef} className="flex flex-col items-center mb-22 max-[500px]:mb-17">
        <motion.h2
          className="text-[42px] font-medium italic text-white text-shadow-1 mb-22 max-[970px]:text-[32px] max-[770px]:text-[28px] max-[500px]:mb-17"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true, amount: 'all' }}
        >
          Օրվա ծրագիրը
        </motion.h2>
        <div className="w-full flex flex-wrap justify-center gap-16 mb-22 max-[500px]:mb-17">
          {data.programEvents.map(event => {
            let eventImg = '';
            let imgAltText = '';
            let eventNameText = '';

            if (event.name === 'brideHouse') {
              eventImg = weddingDressImg;
              imgAltText = 'Wedding dress';
              eventNameText = 'Հարսի տուն';
            } else if (event.name === 'church') {
              eventImg = ringImg;
              imgAltText = 'Ring';
              eventNameText = 'Պսակադրություն';
            } else if (event.name === 'admission') {
              eventImg = champagneGlassesImg;
              imgAltText = 'Champagne glasses';
              eventNameText = 'Ընդունելություն';
            } else {
              eventImg = champagneGlassesImg;
              imgAltText = 'Champagne glasses';
              eventNameText = 'Ընթրիք-ընդունելություն';
            }

            return (
              <div key={event.name} className="max-w-87.5 min-w-50 flex flex-1/3 flex-col items-center gap-2">
                <img src={eventImg} alt={imgAltText} className="size-25 object-contain" />
                <p className="text-[22px] text-center text-white text-shadow-1 max-[770px]:text-[20px]">{eventNameText}</p>
                <motion.p
                  className="italic text-[24px] text-white text-shadow-1 mb-2 max-[770px]:text-[22px]"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 'all' }}
                >
                  {event.time}
                </motion.p>
                {event.place && <p className="text-[22px] text-center text-white text-shadow-1 max-[770px]:text-[20px]">{event.place}</p>}
                <p className="text-[22px] text-center  text-white text-shadow-1 max-[770px]:text-[20px]">{event.locationText}</p>
                <a href={event.location} target="_blank" rel="noopener noreferrer" className="text-[18px] bg-amber-400 text-white rounded-3xl transition-all mt-2 p-[6px_18px] hover:bg-white hover:text-black">Ինչպես գնալ</a>
              </div>
            );
          })}
        </div>
        <InfoMessage className="mb-22 max-[500px]:mb-17" message={data.infoMessage} />
        <ArrowDown onClick={handleScrollToDressCodeSectionClick} />
      </div>
      <div ref={dressCodeSectionRef} className="flex flex-col items-center mb-22 max-[500px]:mb-17">
        <motion.h2
          className="text-[42px] font-medium italic text-white text-shadow-1 mb-8 max-[970px]:text-[32px] max-[770px]:text-[28px]"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true, amount: 'all' }}
        >
          Դրես կոդ
        </motion.h2>
        <InfoMessage className="mb-24 max-[500px]:mb-19" message={data.dressCodeMessage} />
        <img src={heartsWhiteImg} alt="Hearts" className={clsx(HEARTS_WHITE_CLASS_NAME, 'mb-18 max-[500px]:mb-13')} />
        <ArrowDown onClick={handleScrollToCountdownSectionClick} />
      </div>
      <div ref={countdownSectionRef} className="flex flex-col items-center">
        <motion.h2
          className="text-[42px] font-medium italic text-white text-shadow-1 mb-16 max-[970px]:text-[32px] max-[770px]:text-[28px]"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true, amount: 'all' }}
        >
          Մինչ հանդիպու՜մ
        </motion.h2>
        <img src={heartsWhiteImg} alt="Hearts" className={clsx(HEARTS_WHITE_CLASS_NAME, 'mb-19 max-[500px]:mb-14')} />
        <p className="text-[28px] font-medium text-center text-white text-shadow-1 mb-9.5 max-[970px]:text-[22px] max-[770px]:text-[20px]">Մինչ մեր հարսանիքը մնացել է</p>
        <motion.div
          className="flex flex-wrap justify-center gap-4 max-[770px]:gap-1.5 mb-23 max-[500px]:mb-18"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.4,
                delayChildren: 0.3,
                ease: 'easeOut',
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 'all' }}
        >
          {Object.keys(countdown).map(timePart => {
            const typedTimePart = timePart as keyof TimeParts;

            const value = countdown[typedTimePart];
            let label = '';

            if (typedTimePart === 'days') {
              label = 'Օր';
            } else if (typedTimePart === 'hours') {
              label = 'Ժամ';
            } else if (typedTimePart === 'minutes') {
              label = 'Րոպե';
            } else {
              label = 'Վայրկյան';
            }

            return (
              <motion.div
                key={timePart}
                className="size-32.5 flex flex-col justify-center items-center gap-2 border-3 border-white rounded-full max-[970px]:size-27.5 max-[770px]:size-20 max-[380px]:size-16"
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -40,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      ease: 'easeOut',
                    },
                  },
                }}
              >
                <p className="text-[42px]/[100%] text-white text-shadow-1 max-[970px]:text-[32px] max-[770px]:text-[28px] max-[380px]:text-[22px]">{value}</p>
                <p className="text-[20px]/[100%] text-white text-shadow-1 max-[970px]:text-[18px] max-[770px]:text-[12px] max-[380px]:text-[10px]">{label}</p>
              </motion.div>
            );
          })}
        </motion.div>
        <img src={heartsWhiteImg} alt="Hearts" className={HEARTS_WHITE_CLASS_NAME} />
      </div>
    </div>
  );
};

export const WeddingDetails = memo(Component);
