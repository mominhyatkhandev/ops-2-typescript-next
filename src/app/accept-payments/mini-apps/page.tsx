import Image from 'next/image';
import React from 'react';

import miniAppsBG from '@/assets/images/mini-apps.jpg';
import Info from '@/components/Content/Info/Info';
import Footer from '@/components/Footer/Footer';
import Button from '@/components/UI/Button/PrimaryButton';
import AcceptPaymentWrapper from '@/components/UI/Wrappers/AcceptPaymentWrapper';
import { cards } from '@/utils/data';

const MiniApps = () => {
  return (
    <>
      <AcceptPaymentWrapper>
        <Image
          src={miniAppsBG}
          alt="paymentGateway Backgrounds"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="relative flex flex-col items-start justify-center gap-9 rounded-lg">
          <div className="flex flex-col gap-4">
            <p className="heading-primary sm:md-max:text-[32px]">
              <span className="text-primary-base"> easypaisa</span>
              <br /> Mini App Store
            </p>
            <p className="w-[657] text-base font-normal leading-tight text-secondary-base sm:md-max:text-sm">
              A Feature Rich Ecosystem for Your Brand Showcase your Products and
              Services to Pakistan’s <br /> Largest online Audience.
            </p>
          </div>
          <Button
            label="Sign up"
            routeName="/login"
            className="button-primary w-[200px] px-3 py-[19px] text-sm leading-tight"
          />
        </div>
      </AcceptPaymentWrapper>
      <div className="flex flex-col">
        <Info title={'mini apps'} cardsArray={cards} />
      </div>
      <Footer />
    </>
  );
};

export default MiniApps;
