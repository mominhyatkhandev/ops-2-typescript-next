// import type { ReactNode } from 'react';
import React from 'react';

// import type { IAcceptPaymentWrapper } from '@/interfaces/interface';

// interface IAcceptPaymentWrapper {
//   children: ReactNode;
//   //   className?: string;
//

function UIWrapper({ children }: any) {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col px-[150px] pb-[120px] pt-[80px] sm:md-max:gap-[20px] sm:md-max:px-[24px] sm:md-max:pb-[80px]">
          {children}
        </div>
      </div>
    </>
  );
}

export default UIWrapper;
