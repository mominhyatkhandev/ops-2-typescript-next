'use client';

import React from 'react';

import type { IButton } from '@/interfaces/interface';

const Button = ({
  label,
  type = 'button',
  onClickHandler = () => {},
  className,
  isDisabled = false,
}: IButton) => {
  return (
    <button
      type={type}
      className={`${
        isDisabled
          ? 'cursor-default bg-neutral-black-300'
          : 'cursor-pointer bg-primary-base'
      } ${className}`}
      disabled={isDisabled}
      onClick={onClickHandler}
    >
      <div className="w-full">{label}</div>
    </button>
  );
};

export default Button;
