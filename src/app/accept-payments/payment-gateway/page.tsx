import React from 'react';

import paymentgatewaybg from '@/assets/images/payment-gateway.jpg';
import AcceptPaymentBanner from '@/components/Content/AcceptPaymentBanner/AcceptPaymentBanner';
// import Info from '@/components/Content/Info/Info';
import Partners from '@/components/Content/Partners/Partners';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Card from '@/components/UI/Card/Card';
import UIWrapper from '@/components/UI/Wrappers/UIWrapper';
import { cards } from '@/utils/data';

const PaymentGateway = () => {
  return (
    <>
      <AcceptPaymentBanner
        banner={paymentgatewaybg}
        title={{
          main: ' Trusted Payment Technology',
          sub: 'by Pakistan’s leading businesses & entrepreneurs',
        }}
        description="Grow your business with Payment Gateway that powers Pakistan’s
                  largest brands and even through"
      />
      <div className="flex flex-col pb-[120px] sm:md-max:pb-[80px]">
        {/* <Info title={'payment gateway'} cardsArray={cards} /> */}
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
        <Partners />
      </div>

      <Footer />
    </>
  );
};

export default PaymentGateway;

// import Image from 'next/image';
// import React from 'react';

// import paymentGatewayBG from '@/assets/images/payment-gateway.jpg';
// import Info from '@/components/Content/Info/Info';
// import Partners from '@/components/Content/Partners/Partners';
// import Footer from '@/components/Footer/Footer';
// import Button from '@/components/UI/Button/PrimaryButton';
// import AcceptPaymentWrapper from '@/components/UI/Wrappers/AcceptPaymentWrapper';
// import { cards } from '@/utils/data';

// const PaymentGateway = () => {
//   return (
//     <>
//       <AcceptPaymentWrapper>
//         <Image
//           src={paymentGatewayBG}
//           alt="paymentGateway Background"
//           layout="fill"
//           objectFit="cover"
//           className="absolute inset-0 object-left"
//         />
//         <div className="relative flex flex-col items-start justify-center gap-9 rounded-lg">
//           <div className="flex flex-col gap-2">
//             <p className="heading-primary sm:md-max:text-[32px]">
//               <span className="text-primary-base">
//                 Trusted Payment Technology
//               </span>
//               <br></br>
//               <span>by Pakistan’s leading</span>
//               <br></br>
//               <span>businesses & entrepreneurs</span>
//             </p>
//             <p className="text-dark text-base font-normal leading-tight text-secondary-base sm:md-max:text-sm">
//               <span>
//                 Grow your business with Payment Gateway that powers Pakistan’s
//                 largest brands and even through
//               </span>{' '}
//               <br></br>
//               <span>easypaisa app authorization.</span>
//             </p>
//           </div>
//           <Button
//             routeName="/login"
//             label="Sign up"
//             className="button-primary w-[200px] px-3 py-[19px] text-sm leading-tight"
//           />
//         </div>
//       </AcceptPaymentWrapper>
//       <div className="flex flex-col pb-[120px] sm:md-max:pb-[80px]">
//         <Info title={'payment gateway'} cardsArray={cards} />
//         <Partners />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default PaymentGateway;
