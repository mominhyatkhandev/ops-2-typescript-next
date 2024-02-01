// import Image from 'next/image';
import React from 'react';

// import miniApps from '@/assets/images/miniapps.png';
// import onlinePayments from '@/assets/images/onlinePayments.png';
// import paymentLink from '@/assets/images/paymentLink.png';
// import qrPayments from '@/assets/images/qrpayments.png';
import HeroBanner from '@/components/Content/HeroBanner/HeroBanner';
import Info from '@/components/Content/Info/Info';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import UIWrapper from '@/components/UI/Wrappers/UIWrapper';
// import type IHome from '@/interfaces/interface';
import { cards } from '@/utils/data';

// const data: IHome[] = [
//   {
//     image: {
//       src: onlinePayments,
//       alt: 'Payments Background',
//     },
//     label: {
//       main: 'Online',
//       sub: 'Payments',
//     },
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     className:
//       'min-h-[640px] w-full bg-no-repeat grid place-items-end px-[150px] py-24 relative sm:md-max:px-[24px] sm:md-max:py-[80px]',
//     // 'min-h-[640px] w-full bg-no-repeat flex justify-end items-end px-[150px] py-24 relative sm:md-max:px-[24px] sm:md-max:py-[80px]',

//     // 'min-h-[640px] w-full bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col shrink-0 pt-[276px] pr-[150px] pb-[96px] pl-[730px] relative sm:md-max:px-[24px] ',
//   },

//   {
//     image: {
//       src: qrPayments,
//       alt: 'QrPayments Background',
//     },
//     label: {
//       main: 'QR',
//       sub: 'Payments',
//     },
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     className:
//       'min-h-[640px] flex flex-col justify-end shrink-0 items-start px-[150px] py-24 relative sm:md-max:px-[24px]',
//   },

//   {
//     image: {
//       src: miniApps,
//       alt: 'miniApps Background',
//     },
//     label: {
//       main: 'Mini',
//       sub: 'Apps',
//     },
//     description: {
//       desc1:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       desc2:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       desc3:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     },
//     className:
//       'flex flex-col place-items-center shrink-0 px-[254px] py-[146px]  relative sm:md-max:px-[24px] sm:md-max:py-[166px]',
//     // 'flex flex-col justify-center items-center shrink-0 px-[254px] py-[158px]  relative sm:md-max:px-[24px]',
//   },
//   {
//     image: {
//       src: paymentLink,
//       alt: 'Payments-Link Background',
//     },
//     label: {
//       main: 'Payment',
//       sub: 'Link',
//     },
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     className:
//       'min-h-[640px] grid place-items-end shrink-0 px-[150px] py-24 relative sm:md-max:px-[24px]',
//     // 'min-h-[640px] flex flex-col justify-end items-end shrink-0 pr-40 py-24 relative sm:md-max:px-[24px]',
//   },
// ];

const Home = (): JSX.Element => {
  return (
    <>
      <HeroBanner />
      <Info
        cardsArray={cards}
        //  title={'home'}
      />
      <UIWrapper>
        <Header
          title={'xyz'}
          description={
            'Lorem ipsum dolor sit amet consectetur adipiscing elitsed doeiusmodtempor incididunt ut labore et dolore'
          }
        />
      </UIWrapper>

      <Footer />
    </>
  );
};

export default Home;
