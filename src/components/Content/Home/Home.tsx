import Image from 'next/image';
import React from 'react';

import miniApps from '@/assets/images/miniapps.png';
import onlinePayments from '@/assets/images/onlinePayments.png';
import paymentLink from '@/assets/images/paymentLink.png';
import qrPayments from '@/assets/images/qrpayments.png';
import HeroBanner from '@/components/Content/HeroBanner/HeroBanner';
import Info from '@/components/Content/Info/Info';
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
      'min-h-[640px] max-w-full bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-end shrink-0 items-end pr-40 py-24 relative',
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
      'min-h-[640px] flex flex-col justify-end shrink-0 items-start pl-40 py-24 relative',
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
      'min-h-[640px] flex flex-col justify-end shrink-0 items-end pr-40 py-24 relative',
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
      'flex flex-col justify-center shrink-0 px-[254px] py-[158px] items-center relative',
  },
];

const Home = (): JSX.Element => {
  return (
    <>
      <HeroBanner />
      <Info cardsArray={cards} />
      <div id="NewRootRoot" className="flex w-full flex-col">
        <div className="flex flex-col gap-5 pb-[93px]">
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
                    ? 'relative flex max-w-[560px] shrink-0 flex-col items-start justify-center gap-12 rounded-lg bg-neutral-white-base px-[32px] py-[40px] shadow-[0px_4px_16px_0px_rgba(51,_51,_51,_0.08)]'
                    : 'relative flex shrink-0 flex-col items-center justify-center gap-12 rounded-lg bg-neutral-white-base p-10 shadow-[0px_4px_16px_0px_rgba(51,_51,_51,_0.08)]'
                }
              >
                {/* Content goes here */}
                {/* </div> */}

                <div className="text-5xl font-semibold leading-tight text-secondary-base">
                  {item.label.main} {''}
                  <span className="text-primary-base">{item.label.sub}</span>
                </div>
                {typeof item.description === 'string' ? (
                  <div className="text-base font-normal leading-tight text-secondary-600">
                    {item.description}
                  </div>
                ) : (
                  <>
                    <div className="grid gap-9 md:grid-cols-1 lg:grid-cols-3">
                      <div className="text-base font-normal leading-tight text-secondary-600">
                        {item.description.desc1}
                      </div>
                      <div className="text-base font-normal leading-tight text-secondary-600">
                        {item.description.desc2}
                      </div>
                      <div className="text-base font-normal leading-tight text-secondary-600">
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
    </>
  );
};

export default Home;
