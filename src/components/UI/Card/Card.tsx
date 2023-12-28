'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React, { useState } from 'react';

interface ICardProps {
  label: string;
  logo: { image1: StaticImageData; image2: StaticImageData };
  className?: string;
  children?: React.ReactNode;
  description?: string;
}

const Card = ({ logo, label, description }: ICardProps) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  return (
    <div
      className={`group flex min-h-[300px] cursor-pointer flex-col items-start justify-start gap-[60px] rounded-[8px] border-[0.5px] border-solid border-border-light bg-screen-grey px-5 py-6 duration-300 ease-out hover:bg-primary-base hover:text-neutral-white-base`}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      {isCardHovered ? (
        <div className="">
          <Image src={logo.image2} alt={'image2'} />
        </div>
      ) : (
        <div className="">
          <Image src={logo.image1} alt={'image'} />
        </div>
      )}

      <div className="flex flex-col items-start gap-4 self-stretch">
        <div className="w-full text-2xl font-semibold leading-tight text-secondary-base group-hover:text-neutral-white-base">
          <>
            {label === 'Online Payments' ? (
              <>
                Online <br></br>
                Payments
              </>
            ) : label === 'QR Integration' ? (
              <>
                QR <br></br>
                Integration
              </>
            ) : label === 'Mini APPS' ? (
              <>
                Mini <br></br>
                Apps
              </>
            ) : label === 'Payment Link' ? (
              <>
                Payment <br></br>
                Link
              </>
            ) : (
              <>{label}</>
            )}
          </>
        </div>
        <div className="w-full text-base font-normal leading-tight text-secondary-600 group-hover:text-neutral-white-base">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;
