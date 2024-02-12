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
import Header from '@/components/Header/Header';

const Partners = (): JSX.Element => {
  const partnersImages = [
    albarakabankLogo,
    alliedbankLogo,
    mufgbankLogo,
    soneribankLogo,
    ublbankLogo,
    mustakeembankLogo,
    khushalibankLogo,
    askaribankLogo,
    alfalahbankLogo,
    faysalbankLogo,
    habibbankLogo,
    islamibankLogo,
  ];

  return (
    <>
      <div className="grid w-full flex-col gap-9 px-[150px] align-middle sm:md-max:gap-[20px] sm:md-max:px-[24px]">
        {/* <div className="flex flex-col justify-center gap-9 align-middle">
          <h1 className="text-center text-5xl font-semibold sm:md-max:text-start sm:md-max:text-[32px]">
            We power Pakistan’s biggest{' '}
            <span className="text-primary-base">online brands</span>
          </h1>
        </div> */}

        <Header
          title={{ main: ' We power Pakistan’s biggest', sub: 'online brands' }}
          centerTitle={true}
        />

        <div className="grid w-full  grid-cols-6 gap-5 sm:md-max:grid-cols-4 sm:md-max:gap-[24px]">
          {partnersImages.map((item, index) => (
            <div key={index} className="flex aspect-[3/4] sm:md-max:p-[0px]">
              {/* <div key={index} className="flex h-[173px] w-full sm:md-max:px-[0px] sm:md-max:py-[0px]"> */}

              {/* <div key={index} className="flex justify-center align-middle px-5 py-9 sm:md-max:px-[0px] sm:md-max:py-[0px]"> */}

              <Image
                src={item}
                key={index}
                alt={`Partner Logo ${index}`}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Partners;
