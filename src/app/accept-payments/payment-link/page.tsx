import Image from 'next/image';
import React from 'react';

import paymentLinkBG from '@/assets/images/payment-link.jpg';
import Info from '@/components/Content/Info/Info';
import Footer from '@/components/Footer/Footer';
import Button from '@/components/UI/Button/PrimaryButton';
import { cards } from '@/utils/data';

const PaymentLink = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="relative flex min-h-[640px] items-center justify-start p-[150px]">
          <Image
            src={paymentLinkBG}
            alt="paymentGateway Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0"
          />
          <div className="relative flex flex-col items-start justify-center gap-9 rounded-lg">
            <div className="flex flex-col gap-4">
              <p className="heading-primary">
                <span className="text-primary-base">
                  Collect Online Payments
                </span>
                <br />
                from anywhere in Pakistan
              </p>
              <p className="w-[657] text-base font-normal leading-tight text-secondary-base">
                A Feature Rich Ecosystem for Your Brand Showcase your Products
                and Services to Pakistan&rsquo;s <br /> Largest online Audience
              </p>
            </div>
            <Button
              label="Sign up"
              className="button-primary w-[200px] px-3 py-[19px] text-sm leading-tight"
              routeName="/login"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <Info title={'payment link'} cardsArray={cards} />
          {/* <Partners /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentLink;
