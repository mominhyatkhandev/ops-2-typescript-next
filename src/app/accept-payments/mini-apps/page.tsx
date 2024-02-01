import React from 'react';

import miniAppsBG from '@/assets/images/mini-apps.jpg';
import AcceptPaymentBanner from '@/components/Content/AcceptPaymentBanner/AcceptPaymentBanner';
import Info from '@/components/Content/Info/Info';
import Footer from '@/components/Footer/Footer';
import { cards } from '@/utils/data';

const MiniApps = () => {
  return (
    <>
      <AcceptPaymentBanner
        banner={miniAppsBG}
        title={{ main: 'easypaisa ', sub: 'Mini App Store' }}
        description="Grow your business with Payment Gateway that powers Pakistan’s
                  largest brands and even through"
      />
      <div className="flex flex-col">
        <Info cardsArray={cards} />
      </div>
      <Footer />
    </>
  );
};

export default MiniApps;
