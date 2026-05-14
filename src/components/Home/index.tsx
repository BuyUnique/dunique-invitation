import React, { memo } from 'react';

import logoImg from "../../assets/images/D'UNIQUE.jpg";

const Component: React.FC = () => {
  return (
    <div className="w-full h-dvh flex justify-center items-center bg-[#dcffff]">
      <img src={logoImg} alt="logo" className="w-125 object-contain border-r-2 border-b-2 border-[#e7eded] rounded-xl max-[970px]:w-100 max-[550px]:w-62.5 max-[550px]:border-r max-[550px]:border-b" />
    </div>
  );
};

export const Home = memo(Component);
