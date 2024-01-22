import Image from 'next/image';
import React from 'react';

import Logo from '../../../assets/icons/logo.svg';
import heroBanner from '../../../assets/images/hero1.png';
import Button from '../../UI/Button/PrimaryButton';

const HeroBanner = (): JSX.Element => {
  return (
    <main className="sm:md-max:p-[24px] relative flex min-h-[640px] items-center justify-start p-[150px]">
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
            <p className="sm:md-max:text-base text-2xl font-semibold text-secondary-base">
              Welcome to
            </p>
            <Image src={Logo} alt="logo" width={100} height={40} />
          </span>
          <p className="sm:md-max:text-[32px] text-5xl font-semibold leading-tight text-secondary-base">
            Merchant Portal
          </p>
          <div className="sm:md-max:text-sm sm:md-max:leading-[18px] text-base font-normal leading-tight text-secondary-base">
            Introductory text, lorem ipsum, including QR,<br></br> Online
            Payments and Mini-APPS
          </div>
        </div>
        <Button
          label="Sign up"
          className="button-primary sm:md-max:text-sm w-[200px] px-3 py-[19px]"
          routeName="/login"
        />
      </div>
    </main>
  );
};

export default HeroBanner;
