'use client';

import React from 'react';

import type { ILoginCard } from '@/interfaces/interface';

export default function LoginCard({
  title,
  description,
  routeName,
}: ILoginCard) {
  const handleClick = () => {
    console.log('route name is', routeName);
  };
  return (
    <>
      <div className="flex w-[270px] rounded-lg border-[0.5px] border-border-light bg-screen-grey px-5 py-6 ">
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold text-secondary-base">{title}</p>
          <p className="text-sm font-normal text-secondary-400">
            {description}{' '}
          </p>
          <p
            className="text-sm font-semibold text-secondary-base"
            onClick={handleClick}
          >
            Get Started
          </p>
        </div>
      </div>
    </>
  );
}
