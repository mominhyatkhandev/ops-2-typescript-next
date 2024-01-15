'use client';

import Image from 'next/image';
import type { MouseEvent } from 'react';
import React, { useState } from 'react';

import closeIcon from '@/assets/icons/close-icon.svg';
import Bitmap from '@/assets/images/Bitmap.svg';
import type { ICustomModalProps } from '@/interfaces/interface';

import Button from '../Button/PrimaryButton';

const CustomModal = ({
  title,
  description,
  show,
  setShowModal,
}: ICustomModalProps) => {
  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    // setOpen(false);
    setShowModal(false);
    // console.log('hello');
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose(e);
    }
  };

  return (
    <>
      {show ? (
        <div
          className="overlay fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-secondary-base/75
        "
          onClick={handleOverlayClick}
        >
          <div className="flex flex-col gap-12 rounded-2xl border-[1px] border-border-dark bg-screen-white p-5">
            <div className="flex flex-col">
              <div className="flex justify-end" onClick={handleClose}>
                <Image src={closeIcon} alt="close-icon" />
              </div>
              <div className="px-[78px] py-[40px]">
                <div className="flex flex-col gap-12">
                  <div>
                    <div className="flex flex-col gap-9">
                      <div className="flex justify-center">
                        <Image src={Bitmap} alt="bitmap-icon" />
                      </div>
                      <div>
                        <div className="flex flex-col gap-2 ">
                          <p className="flex justify-center text-2xl text-secondary-base">
                            {title}{' '}
                          </p>
                          <p className="flex text-base text-secondary-600">
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      label="Continue"
                      // routeName="/login"
                      className="button-primary w-[270px] px-3 py-[19px] text-xs leading-tight"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CustomModal;
