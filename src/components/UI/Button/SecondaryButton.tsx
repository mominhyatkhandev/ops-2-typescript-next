'use client';

import React from 'react';

interface IButton {
  label: string;
  className?: string;
  onClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ label, onClickHandler = () => {}, className }: IButton) => {
  return (
    <button className={`${className}`} onClick={onClickHandler}>
      {label}
    </button>
  );
};

export default Button;
