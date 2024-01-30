import Image from 'next/image';
import React from 'react';

import qrPaymentBG from '@/assets/images/qr-payment.jpg';
import Info from '@/components/Content/Info/Info';
import Footer from '@/components/Footer/Footer';
import Button from '@/components/UI/Button/PrimaryButton';
import AcceptPaymentWrapper from '@/components/UI/Wrappers/AcceptPaymentWrapper';
import { cards } from '@/utils/data';

const QRPayments = () => {
  return (
    <>
      <AcceptPaymentWrapper>
        {/* <div className="flex flex-col"> */}
        {/* <div className="pg-bg flex items-center justify-start bg-center bg-cover bg-no-repeat p-[200px] mb-[20px] h-[660px] relative"> */}
        {/* <div className="relative flex min-h-[594px] items-center justify-start px-[150px] py-[163px] sm:md-max:px-[24px]"> */}

        <Image
          src={qrPaymentBG}
          alt="qrPayment Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          // width={100}
          // height={100}

          className="absolute inset-0 h-full w-full"
        />

        <div className="relative flex flex-col items-start justify-center gap-9 rounded-lg ">
          <div className="flex flex-col gap-2">
            <p className="heading-primary sm:md-max:text-[32px]">
              <span className="text-primary-base"> Safe, secure and easy</span>{' '}
              <br />
              payments through QR code
            </p>
            <p className="text-base font-normal leading-tight text-secondary-base sm:md-max:text-sm">
              Hassel free real time settlements by receiving payment through
              easypaisa QR/Till in a fast and <br /> secure way! Enjoy amazing
              cash back offerings on becoming easypaisa QR Merchant.
            </p>
          </div>
          <Button
            label="Sign up"
            routeName="/login"
            className="button-primary w-[200px] px-3 py-[19px] text-sm leading-tight"
          />
          {/* <div className="relative flex flex-col items-start justify-center gap-9 rounded-lg">
            <div className="flex flex-col gap-4">
              <p className="heading-primary">
                <span className="text-primary-base">
                  {' '}
                  Safe, secure and easy
                </span>{' '}
                <br />
                payments through QR code
              </p>
              <p className="w-[720px] text-base font-normal leading-tight text-secondary-base">
                Hassel free real time settlements by receiving payment through
                easypaisa QR/Till in a fast and <br /> secure way! Enjoy amazing
                cash back offerings on becoming easypaisa QR Merchant.
              </p>
            </div>
            <Button
              label="Sign up"
              routeName="/login"
              className="button-primary w-[200px] px-3 py-[19px] text-sm leading-tight"
            />
          </div> */}
        </div>
      </AcceptPaymentWrapper>
      <div className="flex flex-col">
        <Info title={'qr payments'} cardsArray={cards} />
      </div>
      {/* </div> */}
      <Footer />
    </>
  );
};

export default QRPayments;
