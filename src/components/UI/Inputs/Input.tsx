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
}: IInput) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleImageClick = () => {
    setIsPasswordVisible((prev) => !prev);
  };
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
            type === 'password' ? 'w-[95%]' : 'w-full'
          } h-[60px] rounded-lg p-3 focus:outline-none ${
            touched && error ? 'border-danger-base' : ''
          }`}
          placeholder="name@example.com"
          autocomplete="off"
          disabled={false}
        />
        <label
          htmlFor={label}
          className="pointer-events-none absolute left-0 top-0 h-full origin-left px-3 py-5 transition-all duration-100 ease-in-out"
        >
          {label}
        </label>
        {hasImage && image && (
          <div className="absolute right-2 top-[55%] z-20 -translate-y-1/2">
            <Image
              src={image}
              alt="Image"
              className="h-4 w-4 "
              onMouseDown={handleImageClick}
              onMouseUp={() => setIsPasswordVisible(false)}
            />
          </div>
        )}
      </div>
      <div className="flex w-full justify-start px-3">
        <ErrorMessage
          name={name}
          component="div"
          className=" text-xs text-danger-base"
        />
      </div>
    </>
  );
};

export default Input;
