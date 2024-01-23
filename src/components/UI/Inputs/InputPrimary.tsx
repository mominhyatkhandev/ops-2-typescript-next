'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import type { IInputPrimary } from '@/interfaces/interface';

// interface IInputPrimary {
//   name: string;
//   label: string;
//   type: string;
//   className?: string;
//   hasImage?: boolean;
//   isDisabled?: boolean;
//   image: React.ReactElement;
// }

const InputPrimary = ({
  // name,
  label,
  type,
  className,
  hasImage = false,
  isDisabled = false,
  image,
}: IInputPrimary) => {
  const [value, setValue] = useState('');
  const [active, setActive] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleMouseDown = () => {
    setIsPasswordVisible(true);
  };

  const handleMouseLeave = () => {
    setIsPasswordVisible(false);
  };

  const handleDivClick = () => {
    setActive(true);
    if (isFilled === false) return;
    setIsFilled(false);
  };

  const handleDivBlur = () => {
    setIsFilled(true);
    console.log('BLURRR HIT');
  };

  return (
    <div
      id="InputFieldRoot"
      className={`flex w-full items-center justify-between gap-4 border-solid border-border-light bg-screen-white  ${
        active && !isFilled ? 'border-primary-base py-[15px]' : 'py-6'
      }  rounded-lg border px-5`}
    >
      <div
        id="InputHeading"
        className={`"w-full items-start" flex flex-col justify-center gap-1`}
        onClick={handleDivClick}
        onBlur={handleDivBlur}
      >
        <label
          className={`w-full cursor-pointer transition-all duration-300 ${
            active
              ? `text-xs font-normal ${
                  isDisabled ? 'text-secondary-200' : 'text-secondary-500'
                } `
              : `text-sm font-medium ${
                  isDisabled ? 'text-secondary-200' : 'text-secondary-base'
                }`
          } font-medium leading-tight `}
        >
          {label}
        </label>
        {active && (
          <div className="w-full">
            <input
              autoFocus
              className={`w-full focus:outline-none ${
                isDisabled
                  ? 'bg-inherit text-secondary-200'
                  : 'text-secondary-base'
              } text-base font-medium leading-tight  ${className}`}
              value={value}
              type={
                type === 'password' ? (isPasswordVisible ? 'text' : type) : type
              }
              disabled={isDisabled}
              onChange={(e) => setValue(e.target.value)}
              //   onClick={handleInputClick}
              //   onBlur={() => setIsFilled(true)}
            />
          </div>
        )}
      </div>
      {hasImage && (
        <Image
          src={image}
          alt={'image'}
          width={24}
          height={24}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseLeave}
        />
        //   <img
        //     src="https://file.rendit.io/n/KeFeeJcAAmEGGIZtMq0I.svg"
        //     alt="ImageRemoveRedEye icon"
        //     id="Vuesaxlineareye"
        //     className="w-6"
        //   />
      )}
    </div>
  );
};

export default InputPrimary;
