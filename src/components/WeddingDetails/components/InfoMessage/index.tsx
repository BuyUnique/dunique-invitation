import React, { memo } from 'react';
import { clsx } from 'clsx';

interface Props {
  message: string;
  className?: string;
}

const Component: React.FC<Props> = ({ message, className }) => {
  return (
    <p className={clsx("max-w-137.5 text-[18px] text-center text-white text-shadow-1 backdrop-blur-[10px] rounded-2xl border-2 border-white p-[22px_32px]", className)}>
      {message}
    </p>
  );
};

export const InfoMessage = memo(Component);
