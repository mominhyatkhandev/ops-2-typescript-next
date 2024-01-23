import Image from 'next/image';
import React from 'react';

import miniApps from '@/assets/images/miniapps.png';
import onlinePayments from '@/assets/images/onlinePayments.png';
import paymentLink from '@/assets/images/paymentLink.png';
import qrPayments from '@/assets/images/qrpayments.png';
import HeroBanner from '@/components/Content/HeroBanner/HeroBanner';
import Info from '@/components/Content/Info/Info';
import Footer from '@/components/Footer/Footer';
import type IHome from '@/interfaces/interface';
import { cards } from '@/utils/data';

const data: IHome[] = [
  {
    image: {
      src: onlinePayments,
      alt: 'Payments Background',
    },
    label: {
      main: 'Online',
      sub: 'Payments',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit.',
    className:
      'min-h-[640px] w-full bg-no-repeat grid place-items-end px-[150px] py-24 relative sm:md-max:px-[24px] sm:md-max:py-[80px]',
    // 'min-h-[640px] w-full bg-no-repeat flex justify-end items-end px-[150px] py-24 relative sm:md-max:px-[24px] sm:md-max:py-[80px]',

    // 'min-h-[640px] w-full bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col shrink-0 pt-[276px] pr-[150px] pb-[96px] pl-[730px] relative sm:md-max:px-[24px] ',
  },

  {
    image: {
      src: qrPayments,
      alt: 'QrPayments Background',
    },
    label: {
      main: 'QR',
      sub: 'Payments',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit.',
    className:
      'min-h-[640px] flex flex-col justify-end shrink-0 items-start px-[150px] py-24 relative sm:md-max:px-[24px]',
  },

  {
    image: {
      src: miniApps,
      alt: 'miniApps Background',
    },
    label: {
      main: 'Mini',
      sub: 'Apps',
    },
    description: {
      desc1:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc2:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc3:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    className:
      'flex flex-col place-items-center shrink-0 px-[254px] py-[146px]  relative sm:md-max:px-[24px] sm:md-max:py-[166px]',
    // 'flex flex-col justify-center items-center shrink-0 px-[254px] py-[158px]  relative sm:md-max:px-[24px]',
  },
  {
    image: {
      src: paymentLink,
      alt: 'Payments-Link Background',
    },
    label: {
      main: 'Payment',
      sub: 'Link',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit.',
    className:
      'min-h-[640px] grid place-items-end shrink-0 px-[150px] py-24 relative sm:md-max:px-[24px]',
    // 'min-h-[640px] flex flex-col justify-end items-end shrink-0 pr-40 py-24 relative sm:md-max:px-[24px]',
  },
];

const Home = (): JSX.Element => {
  return (
    <>
      <HeroBanner />
      <Info cardsArray={cards} />
      <div id="NewRootRoot" className="flex w-full flex-col">
        <div className="flex flex-col gap-5 pb-[93px] sm:md-max:pb-[80px] ">
          {/* <div className="min-h-[640px] max-w-full bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-end shrink-0 items-end pr-40 py-24 relative"> */}
          {data.map((item, index) => (
            // <div key={index}>
            <div key={index} className={item.className}>
              <Image
                src={item.image.src}
                alt={item.image.alt}
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute inset-0"
              />
              {/* <div className="shadow-[0px_4px_16px_0px_rgba(51,_51,_51,_0.08)] bg-neutral-white-base max-w-[560px] flex flex-col justify-center py-[40px] px-[32px] gap-12 shrink-0 items-start rounded-lg relative "> */}
              <div
                className={
                  typeof item.description === 'string'
                    ? 'relative flex max-w-[560px] shrink-0 flex-col items-start justify-center gap-12 rounded-lg bg-neutral-white-base px-[32px] py-[40px] shadow-[0px_4px_16px_0px_rgba(51,_51,_51,_0.08)] sm:md-max:max-w-full sm:md-max:gap-6 sm:md-max:px-[20px] sm:md-max:py-4'
                    : // ? 'relative flex max-w-[560px] shrink-0 flex-col items-start justify-center gap-12 rounded-lg bg-neutral-white-base px-[32px] py-[40px] shadow-[0px_4px_16px_0px_rgba(51,_51,_51,_0.08)] sm:md-max:gap-6 sm:md-max:px-[20px] sm:md-max:py-4'

                      'relative flex shrink-0 flex-col place-items-center gap-12 rounded-lg bg-neutral-white-base p-10 shadow-[0px_4px_16px_0px_rgba(51,_51,_51,_0.08)] sm:md-max:gap-6 sm:md-max:px-[20px] sm:md-max:py-4'
                }
              >
                {/* Content goes here */}
                {/* </div> */}

                <div className="text-5xl font-semibold leading-tight text-secondary-base sm:md-max:text-[32px]">
                  {item.label.main} {''}
                  <span className="text-primary-base">{item.label.sub}</span>
                </div>
                {typeof item.description === 'string' ? (
                  <div className="text-base font-normal leading-tight text-secondary-600 sm:md-max:text-sm">
                    {item.description}
                  </div>
                ) : (
                  <>
                    <div className="grid gap-9 md:grid-cols-1 lg:grid-cols-3">
                      <div className="text-base font-normal leading-tight text-secondary-600 sm:md-max:text-sm">
                        {item.description.desc1}
                      </div>
                      <div className="text-base font-normal leading-tight text-secondary-600 sm:md-max:text-sm">
                        {item.description.desc2}
                      </div>
                      <div className="text-base font-normal leading-tight text-secondary-600 sm:md-max:text-sm">
                        {item.description.desc3}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
