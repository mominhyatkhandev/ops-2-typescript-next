'use client';

import { ErrorMessage, Field } from 'formik';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React, { useState } from 'react';

interface IInput {
  name: string;
  label: string;
  type: string;
  className?: string;
  isDisabled?: boolean;
  hasImage?: boolean;
  image?: StaticImageData;
  error: string | undefined;
  touched: boolean | undefined;
}

const Input = ({
  name,
  label,
  type,
  className,
  isDisabled = false,
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
    <div className="relative flex w-full flex-col gap-[6px] ">
      <Field
        name={name}
        type={isPasswordVisible ? 'text' : type}
        id={label}
        className={`${className} dark:text-white peer block w-full appearance-none rounded-lg border-2 border-border-light bg-neutral-white-base px-2.5 pb-1.5 pt-5 text-base font-500 leading-tight text-secondary-base focus:border-primary-base focus:outline-none focus:ring-0 ${
          touched && error && 'border-danger-base focus:border-danger-base'
        }`}
        placeholder=" "
        disabled={isDisabled}
        // autoComplete="off"
      />
      <label
        htmlFor={label}
        className="peer-focus:text-blue-600 absolute start-3 top-4 z-10 origin-[0] -translate-y-3 scale-75 text-sm font-500 leading-tight text-secondary-base duration-300 focus:text-xs peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
      >
        {label}
      </label>
      {hasImage && image && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          {/* Your image component */}
          <Image
            src={image}
            alt="Image"
            className="h-4 w-4"
            onMouseDown={handleImageClick}
            onMouseUp={() => setIsPasswordVisible(false)}
          />
        </div>
      )}
      {/* Success msg if any  */}
      {/* {touched && !error && (
        <p className="p-2 text-primary-base text-xs">Valid</p>
      )} */}
      <ErrorMessage
        name={name}
        component="div"
        className="px-2.5 text-xs leading-tight text-danger-base"
      />
    </div>
  );
};

export default Input;
