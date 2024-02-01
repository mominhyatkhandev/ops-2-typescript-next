import React from 'react';

import HeroBanner from '@/components/Content/HeroBanner/HeroBanner';
// import Info from '@/components/Content/Info/Info';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
// import Card from "@/components/UI/Card"
import Card from '@/components/UI/Card/Card';
import UIWrapper from '@/components/UI/Wrappers/UIWrapper';
import { cards } from '@/utils/data';

import MerchantMethods from '../MerchantMethods/MerchantMethods';

const Home = (): JSX.Element => {
  return (
    <>
      <HeroBanner />
      {/* <Info
        cardsArray={cards}
      //  title={'home'}
      /> */}
      <UIWrapper>
        <Header
          title={{ main: 'Designed for', sub: 'Entrepreneurs' }}
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
      <MerchantMethods />
      <Footer />
    </>
  );
};

export default Home;
