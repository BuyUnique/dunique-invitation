import React from 'react';
import { clsx } from 'clsx';

import arrowDownIcon from '../../assets/icons/arrow-down.png';

interface Props {
  href: string;
  className?: string;
}

export const ArrowDown: React.FC<Props> = ({ href, className }) => {
  return (
    <a href={href} className={clsx("size-17.5 flex justify-center items-center rounded-full transition-all hover:bg-black/30 animate-arrow-move", className)}>
      <img src={arrowDownIcon} alt="Arrow down" className="w-17.5 h-10 object-contain mt-1.25" />
    </a>
  );
};
