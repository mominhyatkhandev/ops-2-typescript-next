// import type { ReactNode } from 'react';
import React from 'react';

import type { IAcceptPaymentWrapper } from '@/interfaces/interface';

// interface IAcceptPaymentWrapper {
//   children: ReactNode;
//   //   className?: string;
// }

function AcceptPaymentWrapper({ children }: IAcceptPaymentWrapper) {
  return (
    <>
      <div className="flex flex-col">
        <div className="relative flex h-[594px] items-center justify-start p-[150px] sm:md-max:p-[24px]">
          {/* <div className="relative flex min-h-[660px] items-center justify-start p-[150px] sm:md-max:p-[24px]"> */}

          {children}
        </div>
      </div>
    </>
  );
}

export default AcceptPaymentWrapper;
