import type { ReactNode } from 'react';
import React from 'react';

interface IAcceptPaymentWrapper {
  children: ReactNode;
  //   className?: string;
}

function AcceptPaymentWrapper({ children }: IAcceptPaymentWrapper) {
  return (
    <>
      <div className="flex flex-col">
        <div className="relative flex min-h-[660px] items-center justify-start p-[150px]">
          {children}
        </div>
      </div>
    </>
  );
}

export default AcceptPaymentWrapper;
