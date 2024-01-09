'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

interface IButton {
  label: string;
  type?: 'button' | 'submit';
  className?: string;
  isDisabled?: boolean;
  path?: string;
  onClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  label,
  type = 'button',
  onClickHandler,
  path,
  className,
  isDisabled = false,
}: IButton) => {
  const router = useRouter();

  const handleClick = () => {
    if (path) {
      console.log(`Button was clicked for route: ${path}`);
      router.push(path);
    }
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
      onClick={onClickHandler || handleClick}
    >
      <div className="w-full">{label}</div>
    </button>
  );
};

export default Button;
