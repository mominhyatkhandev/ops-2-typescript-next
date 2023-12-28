'use client';

import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import Logo from '@/assets/icons/logo.svg';

import Button from '../UI/Button/PrimaryButton';
import AcceptPayments from './AcceptPayments';

const Navbar = () => {
  const [other, setOther] = useState<string>('');
  const [clickTrigger, setClickTrigger] = useState<boolean>(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const router = useRouter();

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  const handleOther = (itemName: string) => {
    setOther(itemName);
    setClickTrigger(!clickTrigger);
  };
  return (
    <nav className="relative z-10 flex items-center justify-between  bg-neutral-white-base px-[150px] shadow-md">
      <div className="flex items-center py-6">
        <Image src={Logo} width={173} height={36} alt="logo" className="" />
      </div>
      <div className="flex flex-row items-center justify-end py-6">
        <ul className="w-full items-center gap-[24px] lg:inline-flex">
          <Link href={'/'}>
            <li
              className="cursor-pointer py-3 text-sm leading-tight text-secondary-base transition duration-300 hover:text-primary-base"
              onClick={() => handleOther('Home')}
            >
              Home
            </li>
          </Link>
          <div className="h-[10px] w-[1px] bg-border-dark"></div>

          {/* <div className="relative"> */}
          <AcceptPayments other={other} clickTrigger={clickTrigger} />

          <div className="h-[10px] w-[1px] bg-border-dark"></div>

          <div
            className="cursor-pointer py-3 text-center text-sm text-secondary-base transition duration-300 hover:text-primary-base"
            onClick={() => handleOther('Developer')}
          >
            Developer
          </div>
          <div className="h-[10px] w-[1px] bg-border-dark"></div>
          <Link href={`/faq`}>
            <li
              className="cursor-pointer py-3 text-center text-sm text-secondary-base transition duration-300 hover:text-primary-base"
              onClick={() => handleOther('faq')}
            >
              FAQs
            </li>
          </Link>
          <div className="h-[10px] w-[1px] bg-border-dark"></div>
          <div className="flex flex-row gap-6">
            <Button
              label="Login"
              // onClickHandler={}
              // onClickHandler={() => router.push('/login')}
              path="/login"
              className="button-secondary w-[96px] px-2 py-[11px] text-xs leading-tight"
            />
            {/* <Link href={`/sign-up`}> */}
            <Button
              label="Sign up"
              path="/login"
              // onClickHandler={handleOpenModal}
              className="button-primary w-[96px] px-2 py-[11px] text-xs leading-tight"
            />
            {/* </Link> */}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
