'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import CloseIcon from '@/assets/icons/close-icon-nav.svg';
import Logo from '@/assets/icons/logo.svg';
import Menu from '@/assets/icons/menu-button.svg';

import Button from '../UI/Button/PrimaryButton';
import AcceptPayments from './AcceptPayments';
import NavMobileMenu from './MobileView/NavMobileMenu';
import NavMobileSubMenu from './MobileView/NavMobileSubMenu';
// import Dropdown from './Dropdown';

const Navbar = () => {
  const [other, setOther] = useState<string>('');
  const [clickTrigger, setClickTrigger] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const [isMobileSubMenu, setIsMobileSubMenu] = useState<boolean>(false);
  const [selectedSubMenuItem, setSelectedSubMenuItem] = useState<string>('');
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('');

  const handleOther = (itemName: string) => {
    setOther(itemName);
    setClickTrigger(!clickTrigger);
  };

  console.log('selected SUB MENUT ITEM', selectedSubMenuItem);

  return (
    <nav className="relative z-10 flex h-[84px] items-center justify-between bg-neutral-white-base shadow-[0px_2px_6px_0px_rgba(51,_51,_51,_0.08)] xs:px-6 xs:py-4 sm:px-6 sm:py-4 md:px-6 md:py-4 lg:px-[150px] xl:px-[150px] 2xl:px-[150px]">
      <div className="flex items-center justify-between">
        {isMobileView && !isMobileSubMenu ? (
          <div className="w-min text-xl font-semibold leading-tight text-secondary-base lg:hidden xl:hidden 2xl:hidden">
            Menu
          </div>
        ) : isMobileView &&
          isMobileSubMenu &&
          selectedMenuItem === 'acceptPayments' ? (
          <div className="w-full text-xl font-semibold leading-tight text-secondary-base lg:hidden xl:hidden 2xl:hidden">
            Accept Payments
          </div>
        ) : !isMobileView && selectedSubMenuItem ? (
          <div className="w-full text-xl font-semibold leading-tight text-secondary-base lg:hidden xl:hidden 2xl:hidden">
            {selectedSubMenuItem}
          </div>
        ) : !isMobileView && selectedMenuItem ? (
          <div className="w-full text-xl font-semibold leading-tight text-secondary-base lg:hidden xl:hidden 2xl:hidden">
            {selectedMenuItem}
          </div>
        ) : (
          <Image src={Logo} width={173} height={36} alt="logo" className="" />
        )}
      </div>
      <div className="flex h-full items-center justify-between">
        <ul className="items-center gap-[24px] xs:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex">
          <Link href={'/'}>
            <li
              className="cursor-pointer text-sm leading-tight text-secondary-base transition duration-300 hover:text-primary-base"
              onClick={() => handleOther('Home')}
            >
              Home
            </li>
          </Link>
          <div className="h-[10px] w-[1px] bg-border-dark"></div>

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
              routeName="/login"
              className="button-secondary w-24 px-2 py-[11px] text-xs leading-tight"
            />
            <Button
              label="Sign up"
              routeName="/sign-up"
              className="button-primary w-24 px-2 py-[11px] text-xs leading-tight"
            />
          </div>
        </ul>
        <div
          className="lg:hidden xl:hidden 2xl:hidden"
          onClick={() => {
            setIsMobileView(!isMobileView);
            setIsMobileSubMenu(false);
          }}
        >
          {isMobileView ? (
            <Image src={CloseIcon} width={24} height={24} alt="closeIcon" />
          ) : (
            <Image src={Menu} alt="menu" width={24} height={24} />
          )}
        </div>
      </div>
      {isMobileView &&
        (!isMobileSubMenu ? (
          <NavMobileMenu
            setIsMobileSubMenu={setIsMobileSubMenu}
            setIsMobileView={setIsMobileView}
            isMobileSubMenu={isMobileSubMenu}
            setSelectedMenuItem={setSelectedMenuItem}
            setSelectedSubMenuItem={setSelectedSubMenuItem}
          />
        ) : (
          <NavMobileSubMenu
            setSelectedSubMenuItem={setSelectedSubMenuItem}
            selectedSubMenuItem={selectedSubMenuItem}
            setIsMobileSubMenu={setIsMobileSubMenu}
            setIsMobileView={setIsMobileView}
            isMobileSubMenu={isMobileSubMenu}
          />
        ))}
      {/* {isMobileView && !isMobileSubMenu ? (
        <NavMobileMenu
          setIsMobileSubMenu={setIsMobileSubMenu}
          isMobileSubMenu={isMobileSubMenu}
        />
      ) : (
        <NavMobileSubMenu />
      )} */}
    </nav>
  );
};

export default Navbar;
