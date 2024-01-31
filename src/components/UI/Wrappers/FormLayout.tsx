// import type { ReactNode } from 'react';
import React from 'react';

import type { IFormLayout } from '@/interfaces/interface';

// interface IFormLayout {
//   children: ReactNode;
// }

const FormLayout = ({ children }: IFormLayout) => {
  return (
    <div className="sm:px-6 md:px-[150px]">
      <div className="rounded-lg border-[0.5px] border-border-light bg-screen-grey sm:px-5 sm:py-6 md:px-[290px] md:py-[60px]">
        {children}
      </div>
    </div>
  );
};
export default FormLayout;
