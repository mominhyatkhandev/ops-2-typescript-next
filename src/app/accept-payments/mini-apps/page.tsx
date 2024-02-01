import React from 'react';

import miniAppsBG from '@/assets/images/mini-apps.jpg';
import AcceptPaymentBanner from '@/components/Content/AcceptPaymentBanner/AcceptPaymentBanner';
// import Info from '@/components/Content/Info/Info';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Card from '@/components/UI/Card/Card';
import UIWrapper from '@/components/UI/Wrappers/UIWrapper';
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
      {/* <div className="flex flex-col">
        <Info cardsArray={cards} />
      </div> */}

      <UIWrapper>
        <Header
          title={{
            main: '6 powerful reasons to chose Easypaisa ',
            sub: 'Payment Gateway',
          }}
          description={
            'Lorem ipsum dolor sit amet consectetur adipiscing elitsed doeiusmodtempor incididunt ut labore et dolore'
          }
        />
        <div className="flex flex-row gap-5 sm:md-max:flex-col">
          {cards?.map((item, index) => {
            return (
              <Card
                key={index}
                logo={item.logo}
                label={item.label}
                description={item.description}
              />
            );
          })}
        </div>
      </UIWrapper>
      <Footer />
    </>
  );
};

export default MiniApps;
