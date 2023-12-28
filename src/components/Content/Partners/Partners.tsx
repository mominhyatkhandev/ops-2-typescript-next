import Image from 'next/image';
import React from 'react';

import albarakabankLogo from '@/assets/images/Partners/albaraka-banking.png';
import alfalahbankLogo from '@/assets/images/Partners/alfalah-banking.png';
import alliedbankLogo from '@/assets/images/Partners/allied-banking.png';
import askaribankLogo from '@/assets/images/Partners/askari-banking.png';
import faysalbankLogo from '@/assets/images/Partners/faysal banking.png';
import habibbankLogo from '@/assets/images/Partners/habib-banking.png';
import islamibankLogo from '@/assets/images/Partners/islami-banking.png';
import khushalibankLogo from '@/assets/images/Partners/khushali-banking.png';
import mufgbankLogo from '@/assets/images/Partners/mufg-banking.png';
import mustakeembankLogo from '@/assets/images/Partners/mustakeem-banking.png';
import soneribankLogo from '@/assets/images/Partners/soneri-banking.png';
import ublbankLogo from '@/assets/images/Partners/ubl-banking.png';

const Partners = (): JSX.Element => {
  const partnersImages = [
    albarakabankLogo,
    alfalahbankLogo,
    alliedbankLogo,
    askaribankLogo,
    faysalbankLogo,
    habibbankLogo,
    islamibankLogo,
    khushalibankLogo,
    mufgbankLogo,
    mustakeembankLogo,
    soneribankLogo,
    ublbankLogo,
  ];

  return (
    <>
      <div className="inline-flex w-full flex-col items-center justify-center gap-9 px-[150px]">
        <div className="flex flex-col items-center justify-center gap-9">
          <h1 className="text-center text-5xl font-semibold">
            We power Pakistan’s biggest{' '}
            <span className="text-primary-base">online brands</span>
          </h1>
        </div>
        <div className="grid w-full grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-6 ">
          {partnersImages.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-5 py-9"
            >
              <Image
                src={item}
                key={index}
                alt={`Partner Logo ${index}`}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Partners;
