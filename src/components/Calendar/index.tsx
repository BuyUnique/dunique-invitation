import React from 'react';
import { hy } from "react-day-picker/locale";
import { DayPicker, getDefaultClassNames, type DayPickerProps } from "react-day-picker";

import ringImg from '../../assets/images/ring-compressed.png';

export const Calendar: React.FC<DayPickerProps> = ({ ...props }) => {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      classNames={{
        root: `${defaultClassNames.root} max-[368px]:w-[294px]`,
        today: 'border-2 border-white',
        selected: '',
        month_caption: `${defaultClassNames.caption_label} block! text-[48px] font-bold text-white text-center mb-[22px] max-[450px]:text-[32px] max-[450px]:mb-[18px]`,
        weekday: `${defaultClassNames.weekday} text-[18px]! text-white max-[450px]:text-[14px]!`,
        day: `${defaultClassNames.day} text-[24px] text-white max-[450px]:text-[18px]`,
      }}
      hideNavigation
      navLayout="around"
      timeZone="Asia/Yerevan"
      weekStartsOn={1}
      locale={hy}
      mode="single"
      components={{
        Day: (props) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { day, modifiers, ...tdProps } = props;

          if (modifiers.selected) {
            return (
              <td {...tdProps} className={`${tdProps.className} relative`}>
                {tdProps.children}
                <img
                  src={ringImg}
                  alt="Ring"
                  className="absolute -top-1.5 -left-px object-contain z-3 animate-pulse max-[450px]:-top-0.5 max-[450px]:-left-px max-[450px]:size-full max-[368px]:left-0"
                />
              </td>
            );
          }

          return <td {...tdProps}>{props.children}</td>
        },
        DayButton: (props) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { day, modifiers, ...buttonProps } = props;

          return <button {...buttonProps} disabled>{props.children}</button>
        },
      }}
      {...props}
    />
  );
};
