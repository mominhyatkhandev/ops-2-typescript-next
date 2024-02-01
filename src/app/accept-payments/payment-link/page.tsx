import React from 'react';

import paymentLinkBG from '@/assets/images/payment-link.jpg';
import AcceptPaymentBanner from '@/components/Content/AcceptPaymentBanner/AcceptPaymentBanner';
import Info from '@/components/Content/Info/Info';
import Footer from '@/components/Footer/Footer';
import { cards } from '@/utils/data';

const PaymentLink = () => {
  return (
    <>
      <AcceptPaymentBanner
        banner={paymentLinkBG}
        title={{
          main: 'Collect Online Payments',
          sub: 'from anywhere in Pakistan',
        }}
        description="   A Feature Rich Ecosystem for Your Brand Showcase your Products and
              Services to Pakistan Largest online Audience"
      />
      <div className="flex flex-col">
        <Info title={'payment link'} cardsArray={cards} />
      </div>
      <Footer />
    </>
  );
};

export default PaymentLink;
