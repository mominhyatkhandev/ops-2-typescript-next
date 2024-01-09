'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import type { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import React, { useEffect, useRef, useState } from 'react';

import { POST } from '@/api/helper';
import useCounter from '@/hooks/useCounter';

function OTP({
  numberOfDigits = 6,
  description,
  otp,
  setOtp,
}: {
  numberOfDigits?: number;
  description: string;
  otp: any[];
  setOtp: Dispatch<SetStateAction<any[]>>;
}) {
  // const [otp, setOtp] = useState(new Array(numberOfDigits).fill(''));
  const [otpError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const [expiryTime, setExpiryTime] = useState<number>(10);

  console.log('EPIRYTIME :', expiryTime);

  const { formattedCount, count, resetCounter } = useCounter({
    initialCount: expiryTime || 60,
  });

  // useEffect(() => {
  //   if (searchParams.get('expiry')) {
  //     setExpiryTime(searchParams.get('expiry') * 60);
  //   }
  // }, []);

  const otpBoxReference = useRef<HTMLInputElement[]>([]);

  const handleResendOTP = async () => {
    resetCounter();
    try {
      const response = await POST('merchant/sendotp', {
        managerMobile: '923345674415',
        notificationText: '',
        template: 'esb_notification',
      });
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
    <article className="flex flex-col gap-4">
      <p className="text-base font-semibold text-secondary-base">
        {description}
      </p>

      <div className="flex w-max items-center gap-9 text-lg text-secondary-900">
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
            className={`text-blue bg-black block h-[60px] w-[60px] appearance-none rounded-md border-[1px] border-border-light p-3 text-center text-2xl focus:border-2 focus:outline-none`}
          />
        ))}
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
          Resend OTP in 00:{formattedCount}
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
