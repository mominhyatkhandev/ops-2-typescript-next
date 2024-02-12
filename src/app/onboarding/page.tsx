'use client';

import React, { useState } from 'react';

import CheckboxInput from '@/components/UI/Inputs/CheckboxInput';
import FormWrapper from '@/components/UI/Wrappers/FormLayout';
import HeaderWrapper from '@/components/UI/Wrappers/HeaderWrapper';

const Onboarding = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectedOption = (option: string) => {
    setSelectedOption(option);
    // console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiii")
  };

  // const [selectedOption, setSelectedOption] = useState<string[]>([]);

  // useEffect(() => {
  //   console.log("selectedddddddddddddd arraaaaaaaaaaay", selectedOption)
  // }, [selectedOption])

  // const handleSelectedOption = (option: string) => {
  //   setSelectedOption((prevSelectedOption) => {
  //     if (prevSelectedOption.includes(option)) {
  //       return prevSelectedOption.filter((selectedOption) => selectedOption !== option);
  //     } else {

  //       return [...prevSelectedOption, option];
  //     }
  //   });
  //   console.log("optionsssssssss are", selectedOption)
  // };
  return (
    <>
      <div className="flex w-full flex-col gap-6 sm:pb-[60px] md:pb-[76px]">
        <HeaderWrapper
          heading="Please fill in the Information below"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore"
          show
        />
        <FormWrapper>
          <div className="flex w-full flex-col items-start justify-between gap-4">
            {/* <div className="flex w-full flex-col items-start justify-between gap-4"> */}
            <div className=" text-base font-semibold leading-tight text-secondary-base ">
              Merchant Personal Details
            </div>
            <CheckboxInput
              label="Option 1"
              selected={selectedOption.includes('onlinePayments')}
              onSelect={() => handleSelectedOption('onlinePayments')}
            />
            <CheckboxInput
              label="Option 2"
              selected={selectedOption.includes('qrPayments')}
              onSelect={() => handleSelectedOption('qrPayments')}
            />
            <CheckboxInput
              label="Option 3"
              selected={selectedOption.includes('miniApps')}
              onSelect={() => handleSelectedOption('miniApps')}
            />
          </div>
        </FormWrapper>
      </div>
    </>
  );
};

export default Onboarding;
