import React from 'react';

import subscriptionBG from '@/assets/images/subscription.jpg';
import AcceptPaymentBanner from '@/components/Content/AcceptPaymentBanner/AcceptPaymentBanner';
import Info from '@/components/Content/Info/Info';
import Footer from '@/components/Footer/Footer';
import { cards } from '@/utils/data';

const Subscription = () => {
  return (
    <>
      <AcceptPaymentBanner
        banner={subscriptionBG}
        title={{
          main: 'Automate recurring payments',
          sub: 'with easypaisa subscriptions',
        }}
        description="Collect recurring payments with multiple payment options to enable
              growth for your subscription based businesses"
      />
      <div className="flex flex-col pb-[120px] sm:md-max:pb-[80px]">
        <Info title={'subscription'} cardsArray={cards} />
      </div>
      <Footer />
    </>
  );
};

export default Subscription;
