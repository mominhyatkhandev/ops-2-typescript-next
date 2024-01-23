'use client';

import { ErrorMessage, Field } from 'formik';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import type { IInput } from '@/interfaces/interface';

const Input = ({
  label,
  type,
  name,
  error,
  touched,
  hasImage,
  image,
  eyeinput, // isDisabled = false,
}: IInput) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const fieldRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleMouseDown = () => {
    if (fieldRef?.current) {
      fieldRef?.current?.focus(); // Focus the field
      // setFieldTouched(name, true, false); // Set the field as touched without validating
      // Optionally, you can set a default value
      // setFieldValue(name, 'Your default value', false);
    }
  };

  return (
    <div className="w-full">
      <div
        className={`floating-input relative w-full rounded-lg border border-border-light focus-within:border-primary-base hover:border-primary-base hover:shadow-sm focus:shadow-sm focus:outline-none ${
          touched && error ? 'border-danger-base' : ''
        } ${isHovered ? 'focus-within' : ''}`}
        onClick={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Field
          innerRef={fieldRef}
          name={name}
          onMouseEnter={handleMouseDown}
          type={isPasswordVisible ? 'text' : type}
          id={label}
          className={`font-500 text-neutral-black-base ${
            eyeinput ? 'w-[95%]' : 'w-full'
          } h-[60px] rounded-lg p-5 focus:outline-none ${
            touched && error ? 'border-danger-base' : ''
          }`}
          placeholder=""
          autocomplete="off"
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
      <ErrorMessage
        name={name}
        component="span"
        className="flex w-full justify-start px-3 pt-[8px] text-xs text-danger-base"
      />
    </div>
  );
};

export default Input;
