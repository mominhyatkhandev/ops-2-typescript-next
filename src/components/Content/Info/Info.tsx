import React from 'react';

import type { IInfoProp } from '@/interfaces/interface';

// import type { TCard } from '@/types/static/static';
import Card from '../../UI/Card/Card';

const Info = ({ title, cardsArray }: IInfoProp): JSX.Element => {
  return (
    <div className="sm:md-max:px-[24px] sm:md-max:pb-[80px] inline-flex w-full flex-col items-start justify-center px-[150px] pb-[120px] pt-[80px]">
      <div className="sm:md-max:gap-5 flex w-full flex-col items-start justify-center gap-9 text-base">
        <div className="flex flex-col items-start justify-center gap-2">
          {title === 'payment gateway' ? (
            <>
              <h1 className="heading-primary">
                6 powerful reasons to chose Easypaisa <br />
                <span className="text-primary-base">Payment Gateway</span>
              </h1>
              <p className="text-base font-normal leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmodtempor incididunt ut labore et dolore
              </p>
            </>
          ) : title === 'payment link' ? (
            <>
              <h1 className="heading-primary">
                Get Registered, start accepting payments.
                <br />
                <span className="text-primary-base">It’s that simple!</span>
              </h1>
              <p className="text-base font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmodtempor incididunt ut labore et dolore
              </p>
            </>
          ) : title === 'qr payments' ? (
            <>
              <h1 className="heading-primary">
                Get Registered, start accepting payments.
                <br />
                <span className="text-primary-base">It’s that simple!</span>
              </h1>
              <p className="text-base font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmodtempor incididunt ut labore et dolore
              </p>
            </>
          ) : title === 'subscription' ? (
            <>
              <h1 className="heading-primary">
                Get Registered, start accepting payments.
                <br />
                <span className="text-primary-base">It’s that simple!</span>
              </h1>
              <p className="text-base font-normal leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmodtempor incididunt ut labore et dolore
              </p>
            </>
          ) : title === 'mini apps' ? (
            <>
              <h1 className="heading-primary">
                Get Registered, start accepting payments.
                <br />
                <span className="text-primary-base">It’s that simple!</span>
              </h1>
              <p className="text-base font-normal leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmodtempor incididunt ut labore et dolore
              </p>
            </>
          ) : (
            <>
              <h1 className="heading-primary sm:md-max:text-[32px] leading-[40px]">
                Designed for{' '}
                <span className="text-primary-base">Entrepreneurs</span>
              </h1>
              <p className="sm:md-max:text-sm text-base font-normal leading-tight ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmodtempor incididunt ut labore et dolore
              </p>
            </>
          )}
        </div>

        {/* <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 "> */}
        <div className="sm:md-max:flex-col flex flex-row gap-5">
          {cardsArray?.map((item, index) => {
            return (
              <Card
                key={index}
                logo={item.logo}
                label={item.label}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Info;
