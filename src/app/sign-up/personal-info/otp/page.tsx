import React from 'react';

import OTP from '@/components/OTP/OTP';
import Button from '@/components/UI/Button/PrimaryButton';
import FormLayout from '@/components/UI/Wrappers/FormLayout';
import HeaderWrapper from '@/components/UI/Wrappers/HeaderWrapper';

const OtpInputWithValidation = () => {
  return (
    <div className="flex flex-col gap-6">
      <HeaderWrapper
        heading={'Enter One Time Password (OTP)'}
        description={
          "we've sent verification on your email address (abc@domain.com) and your mobile number (03341234567)"
        }
        show={true}
      />
      <FormLayout>
        <div className="flex flex-col items-center justify-center gap-12">
          <OTP description="Enter Email OTP here" />
          <OTP description="Enter SMS OTP here" />
          <Button
            label="Verify"
            className="button-primary w-[270px] px-3 py-[19px]"
            path="home"
          />
        </div>
      </FormLayout>
    </div>
  );
};

export default OtpInputWithValidation;
