import { useState, useEffect, useMemo } from 'react';

import { type TimeParts } from '../types/models';

const getTimeParts = (diffMilliseconds: number): TimeParts => {
  const totalSeconds = Math.max(0, Math.floor(diffMilliseconds / 1000));

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
};

export const useCountdown = (targetDate: Date) => {
  const initialTimeLeft = useMemo<TimeParts>(() => getTimeParts(targetDate.getTime() - new Date().getTime()), [targetDate]);
  const [timeLeft, setTimeLeft] = useState<TimeParts>(initialTimeLeft);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const timeParts = getTimeParts(targetDate.getTime() - new Date().getTime());

      setTimeLeft(timeParts);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [targetDate]);

  return timeLeft;
};
