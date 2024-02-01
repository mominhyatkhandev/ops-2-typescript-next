import React from 'react';

import qrPaymentBG from '@/assets/images/qr-payment.jpg';
import AcceptPaymentBanner from '@/components/Content/AcceptPaymentBanner/AcceptPaymentBanner';
import Info from '@/components/Content/Info/Info';
import Footer from '@/components/Footer/Footer';
import { cards } from '@/utils/data';

const QRPayments = () => {
  return (
    <>
      <AcceptPaymentBanner
        banner={qrPaymentBG}
        title={{
          main: 'Safe, secure and easy',
          sub: 'payments through QR code',
        }}
        description=" Hassel free real time settlements by receiving payment through
              easypaisa QR/Till in a fast and secure way! Enjoy amazing
              cash back offerings on becoming easypaisa QR Merchant."
      />
      <div className="flex flex-col">
        <Info title={'qr payments'} cardsArray={cards} />
      </div>
      <Footer />
    </>
  );
};

export default QRPayments;
