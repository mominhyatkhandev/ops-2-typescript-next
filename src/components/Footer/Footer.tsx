import Image from 'next/image';
import React from 'react';

import Logo from '@/assets/icons/logo.svg';
import emailIcon from '@/assets/images/emailIcon.png';
import phoneIcon from '@/assets/images/phoneIcon.png';

const Footer = () => {
  return (
    <footer className="sm:md-max:px-[24px] flex w-full flex-col items-center justify-center gap-[60px] px-[150px] pb-[60px]">
      <div className="h-[1px] w-full bg-border-light"></div>
      <div className="sm:md-max:flex-col sm:md-max:gap-[36px] flex w-full items-start justify-between gap-[499px]">
        {/* <div className="flex w-full items-start justify-between gap-[499px]"> */}

        {/* easypaisaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
        <div className="flex flex-col items-start gap-[60px]">
          <div>
            <Image
              src={Logo}
              alt="logo"
              height={36}
              width={173}
              className="sm:md-max:h-[24px] sm:md-max:w-[116px]  h-[36px] w-[173px]"
            />
          </div>
          <div
            id="Copyright"
            className="sm:md-max:hidden sm:md-max:text-sm block text-base font-normal leading-tight text-secondary-600"
          >
            Copyright © 2023 Easypaisa | All Rights Reserved{' '}
          </div>
        </div>
        {/* easypaisaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
        {/* contaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaact ussssssssss */}
        <div className="flex flex-col items-start justify-between gap-6">
          <div
            id="FooterTitle"
            className="sm:md-max:text-base sm:md-max:leading-5 text-2xl font-semibold text-secondary-base"
          >
            Contact us
          </div>
          <div className="flex flex-row items-start gap-3">
            <Image src={emailIcon} alt="email" height={20} width={20} />
            <div className=" sm:md-max:text-sm text-base font-normal leading-tight text-secondary-600">
              businesspartnersupport@telenorbank.pk
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <Image src={phoneIcon} alt="phone" height={20} width={20} />
            <div className=" sm:md-max:text-sm text-base font-normal leading-tight text-secondary-600">
              62632 (10 AM to 5 PM)
            </div>
          </div>
        </div>
        {/* contactttttttttttttttttttttttttttttttttttttttttt us */}

        <div
          id="Copyright"
          className="sm:md-max:block sm:md-max:text-sm hidden text-base font-normal leading-tight text-secondary-600"
        >
          Copyright © 2023 Easypaisa | All Rights Reserved{' '}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// <div className="flex flex-row justify-between w-full h-40 items-end p-10">
//   <div className="flex flex-col gap-16 h-[107px] items-start border-t-4">
//     <Image src={Logo} width={173} height={36} alt="logo" id="Home" />
//     <div
//       id="Copyright"
//       className="font-['SF_Pro_Display'] leading-tight text-secondary-600"
//     >
//       Copyright © 2023 Easypaisa | All Rights Reserved{" "}
//     </div>
//   </div>
//   <div className="flex flex-col justify-between mb-px h-24 items-start">
//     <div
//       id="FooterTitle"
//       className="text-2xl font-['SF_Pro_Display'] font-semibold leading-[32px] text-[#322c3c]"
//     >
//       Contact us
//     </div>
//     <div className="flex flex-row gap-3 w-[306px] items-center">
//       <img
//         src="https://file.rendit.io/n/y3xr6RJfXYKxtAfCbOKM.svg"
//         id="LineRoundedEmail"
//         className="self-start w-5 shrink-0"
//       />
//       <div className="font-['SF_Pro_Display'] leading-tight text-[#5b5663]">
//         businesspartnersupport@telenorbank.pk
//       </div>
//     </div>
//     <div className="flex flex-row gap-3 w-48 items-center">
//       <img
//         src="https://file.rendit.io/n/4ZjrIZQscHbX8rrav8Do.svg"
//         id="LineRoundedPhone"
//         className="self-start w-5 shrink-0"
//       />
//       <div className="font-['SF_Pro_Display'] leading-tight text-[#5b5663]">
//         62632 (10 AM to 5 PM)
//       </div>
//     </div>
//   </div>
// </div>
