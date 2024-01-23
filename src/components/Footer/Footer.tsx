import Image from 'next/image';
import React from 'react';

import Logo from '@/assets/icons/logo.svg';
import emailIcon from '@/assets/images/emailIcon.png';
import phoneIcon from '@/assets/images/phoneIcon.png';

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-[60px] px-[150px] pb-[60px] sm:md-max:px-[24px]">
      <div className="h-[1px] w-full bg-border-light"></div>
      <div className="flex w-full items-start justify-between gap-[499px] sm:md-max:flex-col sm:md-max:gap-[36px]">
        <div className="flex flex-col items-start gap-[60px]">
          <div>
            <Image
              src={Logo}
              alt="logo"
              height={36}
              width={173}
              className="h-[36px] w-[173px]  sm:md-max:h-[24px] sm:md-max:w-[116px]"
            />
          </div>
          <div
            id="Copyright"
            className="block text-base font-normal leading-tight text-secondary-600 sm:md-max:hidden sm:md-max:text-sm"
          >
            Copyright © 2023 Easypaisa | All Rights Reserved{' '}
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-6">
          <div
            id="FooterTitle"
            className="text-2xl font-semibold text-secondary-base sm:md-max:text-base sm:md-max:leading-5"
          >
            Contact us
          </div>
          <div className="flex flex-row items-start gap-3">
            <Image src={emailIcon} alt="email" height={20} width={20} />
            <div className=" text-base font-normal leading-tight text-secondary-600 sm:md-max:text-sm">
              businesspartnersupport@telenorbank.pk
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <Image src={phoneIcon} alt="phone" height={20} width={20} />
            <div className=" text-base font-normal leading-tight text-secondary-600 sm:md-max:text-sm">
              62632 (10 AM to 5 PM)
            </div>
          </div>
        </div>
        <div
          id="Copyright"
          className="hidden text-base font-normal leading-tight text-secondary-600 sm:md-max:block sm:md-max:text-sm"
        >
          Copyright © 2023 Easypaisa | All Rights Reserved{' '}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
