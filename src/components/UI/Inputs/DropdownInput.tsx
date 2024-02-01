import Image from 'next/image';
import React from 'react';

import arrowUp from '@/assets/icons/arrow-up.svg';

const DropdownInput = () => {
  return (
    <>
      <div className="flex w-full flex-row gap-4 rounded-lg border-[1.5px] border-border-light px-5 py-[15px]">
        <div className="w-full">
          <div className="text-xs font-normal leading-[16px] text-secondary-500 ">
            Input heading
          </div>
          <div className="text-base font-medium leading-[20px] text-neutral-black-base">
            Input text
          </div>
        </div>
        {/* <div className='bg-primary-700 w-full flex justify-center align-middle'> */}
        <Image src={arrowUp} alt={'arrow up'} height={7} width={12} />
        {/* </div> */}
      </div>
    </>
  );
};

export default DropdownInput;
