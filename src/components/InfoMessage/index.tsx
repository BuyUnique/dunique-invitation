import React from 'react';
import { clsx } from 'clsx';

interface Props {
  message: string;
  className?: string;
}

export const InfoMessage: React.FC<Props> = ({ message, className }) => {
  return (
    <p className={clsx("max-w-137.5 text-[18px] text-center text-white backdrop-blur-[10px] rounded-2xl border-2 border-white p-[22px_32px]", className)}>
      {message}
    </p>
  );
};
