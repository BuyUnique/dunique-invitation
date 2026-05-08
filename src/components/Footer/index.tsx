import React, { memo } from 'react';
import phoneIcon from '../../assets/icons/phone.png';

const Component: React.FC = () => {
  return (
    <footer className="relative flex flex-col justify-center items-center bg-amber-400 rounded-tl-4xl rounded-tr-4xl z-2 p-5">
      <p className="text-[20px] text-white text-center mb-3 max-[770px]:text-[18px]">Հարցերի դեպքում կապվեք մեզ հետ՝</p>
      <div className="flex items-center gap-2 mb-2">
        <img src={phoneIcon} alt="Phone" className="size-7 object-contain" />
        <p className="text-[18px] text-white max-[770px]:text-[16px]">098 123 456</p>
      </div>
      <div className="flex items-center gap-2">
        <img src={phoneIcon} alt="Phone" className="size-7 object-contain" />
        <p className="text-[18px] text-white max-[770px]:text-[16px]">077 123 456</p>
      </div>
    </footer>
  );
};

export const Footer = memo(Component);
