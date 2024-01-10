'use client';

import React, { useState } from 'react';

import { apiClient } from '@/api/apiClient';
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

  const signUpForm = useAppSelector((state) => state.signup);

  const handleVerify = async () => {
    try {
      const response = await apiClient.post('merchant/verifyotp', {
        managerMobile: signUpForm.managerMobile,
        numberOtp: smsOtp.join(''),
        emailOtp: emailOtp.join(''),
      });
      // const response = await POST('merchant/verifyotp', {
      //   managerMobile: signUpForm.managerMobile,
      //   numberOtp: smsOtp.join(''),
      //   emailOtp: emailOtp.join(''),
      // });
      console.log(response);

      if (response.data.responseCode === '000') {
        console.log('Successfully verified!');
        try {
          const res = await apiClient.post(
            '/merchant/onboard/register',
            signUpForm,
          );
          console.log('MERCHANT/ONBOARD RUNNING', res);

          if (res.data.responseCode == '000') {
            setTitle('Account Created Successfully');
            setDescription(
              'Congratulations! You have signed up successfully for the Sandbox account for lorem ipsum',
            );
            console.log('Successfully Signed Up!');
          } else if (res.data.responseCode == '009') {
            setTitle('OTP is expired');
            setDescription(
              'Please click on the RESEND link below to get a new OTP.',
            );
          }
          setShowModal(true);
        } catch (e) {
          console.log(e);
        }
        console.log(showModal, 'SHOW MODAL');
      }
    } catch (e: any) {
      console.log(e);
      setTitle(e.code);
      setDescription(e.message);
      setShowModal(true);
    }
  };

  return (
    <>
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
            />
            <OTP
              description="Enter SMS OTP here"
              setOtp={setSmsOtp}
              otp={smsOtp}
            />
            <Button
              routeName="/login"
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
