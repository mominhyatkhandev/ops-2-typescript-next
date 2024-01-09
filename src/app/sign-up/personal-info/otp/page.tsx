'use client';

import React, { useState } from 'react';

import { POST } from '@/api/helper';
import OTP from '@/components/OTP/OTP';
import Button from '@/components/UI/Button/PrimaryButton';
import SuccessModal from '@/components/UI/Modal/SuccessModal';
import FormLayout from '@/components/UI/Wrappers/FormLayout';
import HeaderWrapper from '@/components/UI/Wrappers/HeaderWrapper';
import { useAppSelector } from '@/hooks/redux';

const OtpInputWithValidation = () => {
  const [emailOtp, setEmailOtp] = useState(new Array(6).fill(''));
  const [smsOtp, setSmsOtp] = useState(new Array(6).fill(''));
  const [showModal, setShowModal] = useState(false);

  const signUpForm = useAppSelector((state) => state.signup);

  const handleVerify = async () => {
    try {
      console.log(smsOtp.join(''), 'JOIN WORKING');
      const response = await POST('merchant/verifyotp', {
        managerMobile: signUpForm.managerMobile,
        numberOtp: smsOtp.join(''),
        emailOtp: emailOtp.join(''),
      });

      if (response.responseCode === '000') {
        console.log('Successfully verified!');
        try {
          const res = await POST('/merchant/onboard/register', signUpForm);
          if (res.responseCode === '000') {
            console.log('MODAL TRUE');
            setShowModal(true);
            console.log('Successfully Signed Up!');
          }
        } catch (e) {
          console.log(e);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {showModal && (
        <SuccessModal
          title="Account Created Successfully"
          description=" Congratulations! You have signed up successfully for
                            the Sandbox account for [lorem ipsum]"
          show={showModal}
        />
      )}

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
            <OTP
              description="Enter Email OTP here"
              setOtp={setEmailOtp}
              otp={emailOtp}
            />
            <OTP
              description="Enter SMS OTP here"
              setOtp={setSmsOtp}
              otp={smsOtp}
            />
            <Button
              // path=""
              label="Verify"
              className="button-primary w-[270px] px-3 py-[19px]"
              onClickHandler={handleVerify}
            />
          </div>
        </FormLayout>
      </div>
    </>
  );
};

export default OtpInputWithValidation;
