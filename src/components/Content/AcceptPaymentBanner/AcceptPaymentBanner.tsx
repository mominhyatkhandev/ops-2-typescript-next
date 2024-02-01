import Image from 'next/image';
import React from 'react';

import Button from '@/components/UI/Button/PrimaryButton';
import type { IAcceptPaymentBanner } from '@/interfaces/interface';

function AcceptPaymentBanner({
  banner,
  title,
  description,
}: IAcceptPaymentBanner) {
  return (
    <>
      <div className="flex flex-col">
        <div className="relative flex h-[594px] items-center justify-start p-[150px] sm:md-max:p-[24px]">
          <Image
            src={banner}
            alt="paymentGateway Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 object-left"
          />
          <div className="relative flex w-[657px] flex-col items-start justify-center gap-9  rounded-lg">
            <div className="flex flex-col gap-2 ">
              <p className="heading-primary sm:md-max:text-[32px]">
                {/* {title} */}

                <span className="block text-primary-base">
                  {title.main} {''}
                </span>
                <span>{title.sub}</span>
              </p>
              <p className="text-dark text-base font-normal leading-tight text-secondary-base sm:md-max:text-sm">
                <span>{description}</span> <br></br>
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
    </>
  );
}

export default AcceptPaymentBanner;
