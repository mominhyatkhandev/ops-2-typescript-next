import React from 'react';

import Button from '@/components/UI/Button/PrimaryButton';
import DropdownInput from '@/components/UI/Inputs/DropdownInput';
import FormWrapper from '@/components/UI/Wrappers/FormLayout';
import HeaderWrapper from '@/components/UI/Wrappers/HeaderWrapper';

const BusinessNature = () => {
  return (
    <div className="flex w-full flex-col gap-6 sm:pb-[60px] md:pb-[76px]">
      <HeaderWrapper
        heading="What is the nature of your business?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore"
        show
      />

      <FormWrapper
      // className="flex flex-col justify-center items-start gap-4"
      >
        <div className="flex w-full flex-col gap-4">
          <div className=" text-base font-semibold leading-tight text-secondary-base">
            Nature of your business
          </div>
          <DropdownInput label="Select from menu" />
        </div>
      </FormWrapper>

      <div className="flex flex-col justify-center gap-9 sm:items-center sm:px-5 md:items-end md:px-[150px]">
        <Button
          label={`Continue`}
          type="submit"
          // isDisabled={!formik.isValid || !isChecked}
          className={`button-primary w-[260px] px-4 py-[19px] text-sm leading-tight transition duration-300`}
          routeName="/business-nature/account-information"
        />
      </div>
    </div>
  );
};

export default BusinessNature;
