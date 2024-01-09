'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import type { IButton } from '@/interfaces/interface';

// interface IButton {
//   label: string;
//   type?: 'button' | 'submit';
//   className?: string;
//   isDisabled?: boolean;
//   routeName: string;
//   // onClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }

const Button = ({
  label,
  type = 'button',
  // onClickHandler = () => {},
  routeName,
  className,
  isDisabled = false,
}: IButton) => {
  const router = useRouter();
  const handleClick = () => {
    console.log(`Button was clicked for route: ${routeName}`);
    router.push(routeName);
  };

  return (
    <button
      type={type}
      className={`${
        isDisabled
          ? 'cursor-default bg-neutral-black-300'
          : 'cursor-pointer bg-primary-base'
      } ${className}`}
      disabled={isDisabled}
      onClick={handleClick}
    >
      <div className="w-full">{label}</div>
    </button>
  );
};

export default Button;
