'use client';

import React, { useState } from 'react';

// import { CircularProgressbar } from 'react-circular-progressbar';
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

  return (
    <>
      <div className="flex  pb-[24px]">
        <HeaderWrapper
          heading="What would you like to Sign up for?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmodtempor incididunt ut labore et dolore"
        />
      </div>
      <FormWrapper>
        <div className="flex w-full flex-col items-start justify-between gap-4">
          <div className=" text-base font-semibold leading-tight text-[#322c3c]">
            Please Select One Option
          </div>

          <CheckboxInput
            label="Online Payments"
            logo={GlobalIcon}
            selected={selectedOption === 'onlinePayments'}
            onSelect={() => handleSelectedOption('onlinePayments')}
          />
          <CheckboxInput
            label="QR Payments"
            logo={QrIcon}
            selected={selectedOption === 'qrPayments'}
            onSelect={() => handleSelectedOption('qrPayments')}
          />
          <CheckboxInput
            label="Mini Apps"
            logo={CartIcon}
            selected={selectedOption === 'miniApps'}
            onSelect={() => handleSelectedOption('miniApps')}
          />
        </div>
        <div className="flex justify-center pt-[32px]">
          <Button
            label="Next"
            isDisabled={!selectedOption}
            routeName={`/sign-up/personal-info/?option=${selectedOption}`}
            className="button-primary w-[270px] px-3 py-[19px] text-sm"
          />
        </div>
      </FormWrapper>
      {/* <div>{JSON.stringify(data)}</div> */}
    </>
  );
};

export default AccountOptions;
