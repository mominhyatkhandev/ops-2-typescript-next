// import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

import TickIcon from '@/assets/icons/tick-icon.svg';
import type { ICheckboxInput } from '@/interfaces/interface';

function CheckboxInput({ label, logo, selected, onSelect }: ICheckboxInput) {
  return (
    <>
      <div
        className="flex w-full flex-row items-center gap-4 rounded-lg border-[1px] border-border-dark bg-neutral-white-base px-5 py-[16px]"
        onClick={onSelect}
      >
        <Image src={logo} className="h-6 w-6" alt="tick-icon" />

        <label
          htmlFor="checkbox"
          className="w-full text-sm font-500 text-secondary-base "
        >
          {label}
        </label>
        {selected ? (
          <div className="flex h-6 w-6 justify-center rounded-full bg-primary-base px-[7px] py-[8px]">
            <Image src={TickIcon} width={10} height={8} alt="tick-icon" />
          </div>
        ) : (
          <div className="flex h-6 w-6 justify-center rounded-full border-[1px] border-border-dark px-[7px] py-[8px]" />
        )}
      </div>
    </>
  );
}

export default CheckboxInput;
