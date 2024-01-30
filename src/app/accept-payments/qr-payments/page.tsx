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
        <Image
          src={qrPaymentBG}
          alt="qrPayment Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 object-left"
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
        </div>
      </AcceptPaymentWrapper>
      <div className="flex flex-col">
        <Info title={'qr payments'} cardsArray={cards} />
      </div>
      <Footer />
    </>
  );
};

export default QRPayments;
