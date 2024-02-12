'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import arrowUp from '@/assets/icons/arrow-up.svg';
import type { IDropdownInputProps } from '@/interfaces/interface';

const DropdownInput = ({ label }: IDropdownInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState('');

  const handleOpen = () => {
    console.log('hellewwwwwwwwwwwwwwwwww');
    setIsOpen(!isOpen);
  };

  // const toggleDropdown = (value:any) => {
  //   setIsOpen(!isOpen);
  //   setSelectedOption(value);
  // };
  return (
    <>
      <div className="w-full">
        {/* <div className="flex bg-neutral-white-base w-full flex-row gap-4 rounded-lg border-[1.5px] border-border-light px-5 py-[15px]">
        <select className="w-full">
          <div className="text-xs font-normal leading-[16px] text-secondary-500 ">
            Input heading
          </div>
          <div className="text-base font-medium leading-[20px] text-neutral-black-base">
            Input text
          </div>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>

        </select>
        {/* <Image src={arrowUp} alt={'arrow up'} height={7} width={12} /> */}
        {/* </div>  */}

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* <div className='flex gap-4'> */}
        <div
          className="flex h-[60px] w-full flex-row gap-4 rounded-lg border-[1.5px] border-border-light bg-neutral-white-base px-5 py-[15px] hover:border-primary-base"
          onClick={handleOpen}
        >
          <div className="flex w-full items-center align-middle">
            {/* <div className="text-xs font-normal leading-[16px] text-secondary-500 ">
            {label}
          </div> */}
            <div className="text-sm font-medium leading-[20px] text-secondary-base">
              {label}
            </div>
          </div>
          <Image src={arrowUp} alt={'arrow up'} height={7} width={12} />
        </div>
        {isOpen && (
          <div className="w-full bg-primary-200">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </div>
        )}

        {/* </div> */}
      </div>
    </>
  );
};

export default DropdownInput;
