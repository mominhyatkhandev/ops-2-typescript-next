import Image from 'next/image';
import React from 'react';

import paymentGatewayBG from '@/assets/images/payment-gateway.jpg';
import Info from '@/components/Content/Info/Info';
import Partners from '@/components/Content/Partners/Partners';
import Button from '@/components/UI/Button/PrimaryButton';
import { cards } from '@/utils/data';

const PaymentGateway = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="relative flex min-h-[660px] items-center justify-start p-[150px]">
          <Image
            src={paymentGatewayBG}
            alt="paymentGateway Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="relative flex flex-col items-start justify-center gap-9 rounded-lg">
            <div className="flex flex-col gap-4">
              <p className="heading-primary">
                <span className="text-primary-base">
                  Trusted Payment Technology
                </span>
                <br></br>
                <span>by Pakistan’s leading</span>
                <br></br>
                <span>businesses & entrepreneurs</span>
              </p>
              <p className="text-dark text-base font-normal leading-tight text-secondary-base">
                <span>
                  Grow your business with Payment Gateway that powers Pakistan’s
                  largest brands and even through
                </span>{' '}
                <br></br>
                <span>easypaisa app authorization.</span>
              </p>
            </div>
            <Button
              routeName="/login"
              label="Sign up"
              className="button-primary w-[200px] px-3 py-[19px] text-sm leading-tight"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col pb-[120px]">
        <Info title={'payment gateway'} cardsArray={cards} />
        <Partners />
      </div>
    </>
  );
};

export default PaymentGateway;
