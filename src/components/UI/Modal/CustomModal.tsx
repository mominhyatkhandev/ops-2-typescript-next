'use client';

import Image from 'next/image';
import type { MouseEvent } from 'react';
import React from 'react';

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
  const handleClose = () => {
    // setOpen(false);
    // console.log(e);

    setShowModal(!show);
    // console.log('hello');
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      console.log('E TARGET', e.target);
      console.log('E CURRENT TARGET', e.currentTarget);
      handleClose();
    }
  };

  return (
    <>
      {!show ? (
        <div
          className="overlay fixed left-0 top-0 z-50 flex h-full w-full  items-center justify-center bg-secondary-base/75 sm:px-6"
          onClick={handleOverlayClick}
        >
          <div className="flex w-[600px] flex-col gap-12 rounded-2xl border-[1px] border-border-dark bg-screen-white p-5">
            <div className="flex flex-col">
              <div className="flex justify-end" onClick={handleClose}>
                <Image src={closeIcon} alt="close-icon" />
              </div>
              <div className="md:px-[78px] md:py-[40px]">
                <div className="flex flex-col gap-12">
                  <div>
                    <div className="flex flex-col gap-9">
                      <div className="flex justify-center">
                        <Image src={Bitmap} alt="bitmap-icon" />
                      </div>
                      <div>
                        <div className="flex flex-col items-center justify-center gap-2">
                          <p className="flex justify-center text-center text-2xl font-semibold leading-tight text-secondary-base">
                            {title}
                            SUCCESSFULLY RESOLVED!
                          </p>
                          <p className="flex text-center text-base leading-tight text-secondary-600">
                            {description}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum aliquid ratione, perspiciatis non natus
                            id delectus libero nam quisquam sunt numquam omnis
                            ipsum magni qui laborum alias in commodi deserunt.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      label="Continue"
                      // routeName="/login"
                      className="button-primary w-[270px] px-3 py-[19px] text-sm leading-tight"
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
