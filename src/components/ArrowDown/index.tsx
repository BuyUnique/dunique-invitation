import React, { memo } from 'react';
import { clsx } from 'clsx';

import arrowDownIcon from '../../assets/icons/arrow-down.png';

interface Props {
  onClick: () => void;
  className?: string;
}

const Component: React.FC<Props> = ({ onClick, className }) => {
  return (
    <button onClick={onClick} className={clsx("size-17.5 flex justify-center items-center rounded-full transition-all cursor-pointer hover:bg-black/30 animate-arrow-move", className)}>
      <img src={arrowDownIcon} alt="Arrow down" className="w-17.5 h-10 object-contain mt-1.25" />
    </button>
  );
};

export const ArrowDown = memo(Component);
