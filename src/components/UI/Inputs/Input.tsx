'use client';

import { ErrorMessage, Field } from 'formik';
import Image from 'next/image';
import React, { useState } from 'react';

import type { IInput } from '@/interfaces/interface';

const Input = ({
  label,
  type,
  name,
  error,
  touched,
  hasImage,
  image,
  eyeinput,
}: IInput) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleImageClick = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  // console.log(error, 'formik error', touched, 'formik touched');

  return (
    <>
      <div
        className={`floating-input relative w-full rounded-lg border border-border-light focus-within:border-primary-base focus:shadow-sm focus:outline-none ${
          touched && error && 'border-danger-base'
        }`}
      >
        <Field
          name={name}
          type={isPasswordVisible ? 'text' : type}
          id={label}
          className={` ${
            eyeinput ? 'w-[95%]' : 'w-full'
          } h-[60px] rounded-lg p-5 focus:outline-none ${
            touched && error ? 'border-danger-base' : ''
          }`}
          placeholder=""
          // autocomplete="off"
          disabled={false}
        />
        <label
          htmlFor={label}
          className="pointer-events-none absolute left-0 top-0 h-full origin-left p-5 text-sm font-medium leading-[18px] text-secondary-base transition-all duration-100 ease-in-out"
        >
          {label}
        </label>
        {hasImage && image && (
          <div className="absolute right-5 top-[55%] z-20 -translate-y-1/2">
            <Image
              src={image}
              alt="Image"
              className="h-6 w-6 "
              onMouseDown={handleImageClick}
              onMouseUp={() => setIsPasswordVisible(false)}
            />
          </div>
        )}
      </div>
      {/* <div className=""> */}

      {/* <div className={error?'':'block'}> */}

      <ErrorMessage
        name={name}
        component="span"
        className="flex w-full justify-start px-3 pt-[8px] text-xs text-danger-base"
        // className={`flex w-full justify-start px-3 pt-[8px] text-xs text-danger-base ${
        //   error ? 'visible' : 'invisible'
        // }`}
      />
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default Input;
