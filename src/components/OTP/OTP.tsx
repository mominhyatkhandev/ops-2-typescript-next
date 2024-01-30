'use client';

import { useSearchParams } from 'next/navigation';
import type { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import React, { useEffect, useRef, useState } from 'react';

import apiClient from '@/api/apiClient';
import { useAppSelector } from '@/hooks/redux';
import useCounter from '@/hooks/useCounter';

function OTP({
  numberOfDigits = 6,
  description,
  otp,
  setOtp,
  medium,
}: {
  numberOfDigits?: number;
  description: string;
  otp: any[];
  medium: string;
  setOtp: Dispatch<SetStateAction<any[]>>;
}) {
  const [otpError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const [expiryTime, setExpiryTime] = useState<number>();
  const { formattedCount, count, resetCounter } = useCounter({
    initialCount: expiryTime,
  });
  const signupForm = useAppSelector((state: any) => state.signup);

  useEffect(() => {
    const expiryQueryParam = searchParams.get('expiry');
    if (expiryQueryParam) {
      console.log('expiry time', expiryQueryParam);
      const expTime = Number(expiryQueryParam) * 60;
      setExpiryTime(expTime);
    }
  }, [expiryTime]);

  const otpBoxReference = useRef<HTMLInputElement[]>([]);

  const handleResendOTP = async () => {
    resetCounter();
    try {
      if (medium === 'sms') {
        const response = await apiClient.post('merchant/mobileotp', {
          managerMobile: signupForm.managerMobile,
        });
        console.log('sms otp response is', response);
      } else {
        const response = await apiClient.post('merchant/emailotp', {
          managerMobile: signupForm.managerMobile,
          email: signupForm.email,
        });
        console.log('email otp response is', response);
      }
    } catch (e) {
      console.log(e);
    }
  };

  function handleChange(value: string, index: number) {
    const newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1]?.focus();
    }
  }

  function handleBackspaceAndEnter(
    e: KeyboardEvent<HTMLInputElement>,
    index: number,
  ) {
    if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
      otpBoxReference.current[index - 1]?.focus();
    }
    if (
      e.key === 'Enter' &&
      e.currentTarget.value &&
      index < numberOfDigits - 1
    ) {
      otpBoxReference.current[index + 1]?.focus();
    }
  }

  return (
    <article className="flex flex-col gap-4 ">
      <p className="text-base font-semibold text-secondary-base">
        {description}
      </p>

      <div className="flex w-full justify-between gap-9 text-lg  text-secondary-900 sm:md-max:gap-[10px]">
        {/* <div className='flex rounded-md border-[1px] border-border-light'> */}
        {otp.map((digit, index) => (
          <input
            key={index}
            value={digit}
            maxLength={1}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
            ref={(ref: HTMLInputElement | null) => {
              otpBoxReference.current[index] = ref!;
              return null;
            }}
            // className={`text-blue bg-black w-full block appearance-none  p-3 text-center text-2xl focus:border-2 focus:outline-none sm:md-max:max-h-[48px] sm:md-max:max-w-[48px]`}
            className={`text-blue bg-black block w-full appearance-none rounded-md border-[1px] border-border-light p-3 text-center text-2xl focus:border-2 focus:outline-none sm:md-max:max-h-[48px] sm:md-max:max-w-[48px]`}
          />
        ))}
        {/* </div> */}
      </div>
      {otpError ? (
        <p
          className={`mt-4 text-lg text-neutral-white-base ${
            otpError ? 'error-show' : ''
          }`}
        >
          {otpError}
        </p>
      ) : null}

      {count > 0 ? (
        <div className="text-xs font-normal text-secondary-600">
          Resend OTP in {formattedCount}
        </div>
      ) : (
        <div
          onClick={handleResendOTP}
          className="cursor-pointer text-xs font-normal leading-tight text-primary-base underline"
        >
          Resend OTP
        </div>
      )}
    </article>
  );
}

export default OTP;
