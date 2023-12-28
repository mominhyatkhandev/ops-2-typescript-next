'use client';

import React, { useState } from 'react';

import CartIcon from '@/assets/icons/cartIcon.svg';
import GlobalIcon from '@/assets/icons/global.svg';
import QrIcon from '@/assets/icons/scanning.svg';
import Button from '@/components/UI/Button/PrimaryButton';
import CheckboxInput from '@/components/UI/Inputs/CheckboxInput';
import FormWrapper from '@/components/UI/Wrappers/FormLayout';
import HeaderWrapper from '@/components/UI/Wrappers/HeaderWrapper';

const AccountOptions = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectedOption = (option: string) => {
    setSelectedOption(option);
  };

  console.log('selected option : ', selectedOption);

  return (
    <div className="flex flex-col gap-6">
      <HeaderWrapper
        heading="What would you like to Sign up for?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmodtempor incididunt ut labore et dolore"
      />
      <FormWrapper>
        <div className="flex w-full flex-col items-start justify-between gap-4">
          <div className=" text-base font-semibold leading-tight text-[#322c3c]">
            Please Select One Option
          </div>

          <CheckboxInput
            label="Online Payments"
            logo={GlobalIcon}
            selected={selectedOption === 'Online Payments'}
            onSelect={() => handleSelectedOption('Online Payments')}
          />
          <CheckboxInput
            label="QR Payments"
            logo={QrIcon}
            selected={selectedOption === 'QR Payments'}
            onSelect={() => handleSelectedOption('QR Payments')}
          />
          <CheckboxInput
            label="Mini Apps"
            logo={CartIcon}
            selected={selectedOption === 'Mini Apps'}
            onSelect={() => handleSelectedOption('Mini Apps')}
          />
        </div>
        <div className="flex justify-center pt-[32px]">
          <Button
            label="Next"
            isDisabled={selectedOption === ''}
            path="/home"
            className="button-primary w-[270px] px-3 py-[19px] text-sm"
          />
        </div>
      </FormWrapper>
    </div>
  );
};

export default AccountOptions;
