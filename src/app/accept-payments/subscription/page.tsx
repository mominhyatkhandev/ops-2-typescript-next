import Image from 'next/image';
import React from 'react';

import subscriptionBG from '@/assets/images/subscription.jpg';
import Info from '@/components/Content/Info/Info';
// import Partners from '@/components/Content/Partners/Partners';
import Footer from '@/components/Footer/Footer';
import Button from '@/components/UI/Button/PrimaryButton';
import AcceptPaymentWrapper from '@/components/UI/Wrappers/AcceptPaymentWrapper';
import { cards } from '@/utils/data';

const Subscription = () => {
  return (
    <>
      <AcceptPaymentWrapper>
        <Image
          src={subscriptionBG}
          alt="Subscription Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 object-left"
        />
        <div className="relative flex flex-col items-start justify-center gap-9 rounded-lg">
          <div className="flex flex-col gap-4">
            <p className="heading-primary sm:md-max:text-[32px]">
              <span className="text-primary-base">
                Automate recurring payments
              </span>
              <br></br>
              <span>with easypaisa subscriptions</span>
            </p>
            <p className="text-base font-normal leading-tight text-secondary-base sm:md-max:text-sm">
              Collect recurring payments with multiple payment options to enable
              growth for your subscription <br /> based businesses
            </p>
          </div>
          <Button
            label="Sign up"
            className="button-primary w-[200px] px-3 py-[19px] text-sm leading-tight"
            routeName="/login"
          />
        </div>
      </AcceptPaymentWrapper>

      <div className="flex flex-col pb-[120px] sm:md-max:pb-[80px]">
        <Info title={'subscription'} cardsArray={cards} />
      </div>
      <Footer />
    </>
  );
};

export default Subscription;
