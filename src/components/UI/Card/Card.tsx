'use client';

// import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React, { useState } from 'react';

import type { ICardProps } from '@/interfaces/interface';

const Card = ({ logo, label, description }: ICardProps) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  return (
    <div
      className={`group flex cursor-pointer flex-col items-start justify-start gap-[60px] rounded-[8px] border-[0.5px] border-solid border-border-light bg-screen-grey px-5 py-6 duration-300 ease-out hover:bg-primary-base hover:text-neutral-white-base sm:md-max:gap-[24px] sm:md-max:py-4`}
      // className={`group flex min-h-[300px] cursor-pointer flex-col items-start justify-start gap-[60px] rounded-[8px] border-[0.5px] border-solid border-border-light bg-screen-grey px-5 py-6 duration-300 ease-out hover:bg-primary-base hover:text-neutral-white-base sm:md-max:gap-[24px] sm:md-max:py-4`}

      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      {isCardHovered ? (
        <div className="h-12 w-12">
          <Image src={logo.image2} alt={'image2'} />
        </div>
      ) : (
        <div className="h-12 w-12">
          <Image src={logo.image1} alt={'image'} />
        </div>
      )}

      <div className="flex flex-col items-start gap-4 self-stretch">
        <div className="w-full text-2xl font-semibold leading-tight text-secondary-base group-hover:text-neutral-white-base sm:md-max:text-base">
          <>
            {label === 'Online Payments' ? (
              <>
                Online <span className="block sm:md-max:inline">{''}</span>
                Payments
              </>
            ) : /* <>
                  QR<span className="flex inline bg-primary-600 sm:md-max:block"> </span>Integration
                </> */

            label === 'QR Integration' ? (
              <>
                QR <span className="block sm:md-max:inline">{''}</span>
                Integration
              </>
            ) : // <>
            //   QR<span className="flex inline bg-primary-600 sm:md-max:block"> </span>Integration
            // </>
            label === 'Mini APPS' ? (
              <>
                Mini <span className="block sm:md-max:inline">{''}</span>
                Apps
              </>
            ) : label === 'Payment Link' ? (
              <>
                Payment <span className="block sm:md-max:inline">{''}</span>
                Link
              </>
            ) : (
              <>{label}</>
            )}
          </>
        </div>
        <div className="w-full text-base font-normal leading-tight text-secondary-600 group-hover:text-neutral-white-base sm:md-max:text-sm">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;
