'use client';

import React, { useEffect, useState } from 'react';

import apiClient from '@/api/apiClient';
import { POST } from '@/api/helper';
import OTP from '@/components/OTP/OTP';
import Button from '@/components/UI/Button/PrimaryButton';
import SuccessModal from '@/components/UI/Modal/CustomModal';
import FormLayout from '@/components/UI/Wrappers/FormLayout';
import HeaderWrapper from '@/components/UI/Wrappers/HeaderWrapper';
import { useAppSelector } from '@/hooks/redux';

const OtpInputWithValidation = () => {
  const [emailOtp, setEmailOtp] = useState(new Array(6).fill(''));
  const [smsOtp, setSmsOtp] = useState(new Array(6).fill(''));
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const signUpForm = useAppSelector((state) => state.signup);

  const handleVerify = async () => {
    try {
      setIsLoading(true);
      const response = await apiClient.post('merchant/verifyotp', {
        managerMobile: signUpForm.managerMobile,
        numberOtp: smsOtp.join(''),
        emailOtp: emailOtp.join(''),
      });
      console.log(response);

      if (response.data.responseCode === '000') {
        try {
          const res = await apiClient.post(
            '/merchant/onboard/register',
            signUpForm,
          );

          if (res.data.responseCode == '000') {
            setTitle(res.data.responseDescription);
            setDescription(
              'Congratulations! You have signed up successfully for the Sandbox account for lorem ipsum',
            );
          } else if (res.data.responseCode == '009') {
            setTitle(res.data.responseCode);
            setDescription(res.data.responseDescription);
          }
        } catch (e) {
          console.log(e);
        }
      } else {
        setTitle(response.data.errorDescription);
        setDescription(response.data.errorDescription);
      }
    } catch (e: any) {
      console.log(e);
      setTitle(e.code);
      setDescription(e.message);
    } finally {
      setIsLoading(false);
      setShowModal(true);
    }
  };

  return (
    <>
      {isLoading && (
        <p className="bg-primary-base p-4 font-semibold">LOADING....</p>
      )}
      <SuccessModal
        title={title}
        description={description}
        show={showModal}
        setShowModal={setShowModal}
      />
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
              medium="email"
            />
            <OTP
              description="Enter SMS OTP here"
              setOtp={setSmsOtp}
              otp={smsOtp}
              medium="sms"
            />
            <Button
              // routeName="/login"
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
