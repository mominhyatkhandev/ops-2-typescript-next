import Image from 'next/image';
import React from 'react';

import Logo from '../../../assets/icons/logo.svg';
import heroBanner from '../../../assets/images/hero1.png';
import Button from '../../UI/Button/PrimaryButton';

const HeroBanner = (): JSX.Element => {
  return (
    <main className="relative flex min-h-[594px] items-center justify-start p-[150px] sm:md-max:p-[24px]">
      {/* <main className="relative flex min-h-[640px] items-center justify-start p-[150px] sm:md-max:p-[24px]"> */}

      {/* <div className='bg-primary-600'> */}
      <div className="bg-primary-600">
        <Image
          src={heroBanner}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          // width={50}
          quality={100}
          className="absolute inset-0 max-w-full"
        />
      </div>
      {/* </div> */}
      <div className="relative flex flex-col items-start justify-center gap-9 rounded-lg">
        <div className="flex flex-col gap-2">
          <span className="flex items-center justify-start gap-2">
            <p className="text-2xl font-semibold text-secondary-base sm:md-max:text-base">
              Welcome to
            </p>
            <Image src={Logo} alt="logo" width={100} height={40} />
          </span>
          <p className="text-5xl font-semibold leading-tight text-secondary-base sm:md-max:text-[32px]">
            Merchant Portal
          </p>
          <div className="text-base font-normal leading-tight text-secondary-base sm:md-max:text-sm sm:md-max:leading-[18px]">
            Introductory text, lorem ipsum, including QR,<br></br> Online
            Payments and Mini-APPS
          </div>
        </div>
        <Button
          label="Sign up"
          className="button-primary w-[200px] px-3 py-[19px] sm:md-max:text-sm"
          routeName="/login"
        />
      </div>
    </main>
  );
};

export default HeroBanner;
