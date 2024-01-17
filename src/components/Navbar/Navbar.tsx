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
  const [isHovered, setIsHovered] = useState<boolean>(false);

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
    <nav className="relative z-10 flex h-[61px] items-center justify-between  bg-neutral-white-base px-[150px] shadow-md">
      <div className="flex items-center">
        <Image src={Logo} width={173} height={36} alt="logo" className="" />
      </div>
      <div className="flex h-full justify-end">
        <ul className="flex items-center gap-[24px] lg:inline-flex">
          <Link href={'/'}>
            <li
              className="cursor-pointer text-sm leading-tight text-secondary-base transition duration-300 hover:text-primary-base"
              onClick={() => handleOther('Home')}
            >
              Home
            </li>
          </Link>
          <div className="h-[10px] w-[1px] bg-border-dark"></div>

          {/* <div className="relative"> */}
          <div
            className="flex h-full place-items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AcceptPayments
              isHovered={isHovered}
              setIsHovered={setIsHovered}
              other={other}
              clickTrigger={clickTrigger}
            />
          </div>

          <div className="h-[10px] w-[1px] bg-border-dark"></div>

          <div
            className="cursor-pointer text-center text-sm text-secondary-base transition duration-300 hover:text-primary-base"
            onClick={() => handleOther('Developer')}
          >
            Developer
          </div>
          <div className="h-[10px] w-[1px] bg-border-dark"></div>
          <Link href={`/faq`}>
            <li
              className="cursor-pointer text-center text-sm text-secondary-base transition duration-300 hover:text-primary-base"
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
              routeName="/login"
              className="button-secondary w-[96px] px-2 py-[11px] text-xs leading-tight"
            />
            {/* <Link href={`/sign-up`}> */}
            <Button
              label="Sign up"
              routeName="/sign-up"
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
