import type { ReactNode } from 'react';
import React from 'react';

interface IFormLayout {
  children: ReactNode;
}

const FormLayout = ({ children }: IFormLayout) => {
  return (
    <div className="px-[150px]">
      <div className="rounded-lg border-[0.5px] border-border-light bg-screen-grey px-[290px] py-[60px]">
        {children}
      </div>
    </div>
  );
};
export default FormLayout;
