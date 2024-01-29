'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import CloseIcon from '@/assets/icons/close-icon-nav.svg';
import Logo from '@/assets/icons/logo.svg';
import Menu from '@/assets/icons/menu-button.svg';
import useCurrentTab from '@/hooks/useCurrentTab';

import Button from '../UI/Button/PrimaryButton';
import AcceptPayments from './AcceptPayments';
import { dropDownList } from './Dropdown';
import NavMobileMenu from './MobileView/NavMobileMenu';
import NavMobileSubMenu from './MobileView/NavMobileSubMenu';
import { getNavMenu } from './Utils/utils';

const Navbar = () => {
  const navMenu = getNavMenu();
  const { currentTab } = useCurrentTab();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isMobileSubMenu, setIsMobileSubMenu] = useState<boolean>(false);

  return (
    <nav className="relative z-10 flex h-[84px] items-center justify-between bg-neutral-white-base px-[150px] py-4 shadow-[0px_2px_6px_0px_rgba(51,_51,_51,_0.08)] sm:md-max:px-6 sm:md-max:py-4 ">
      <div className="flex items-center justify-between">
        {isOpenMenu && !isMobileSubMenu ? (
          <div className="w-min text-xl font-semibold leading-tight text-secondary-base md:hidden xl:hidden 2xl:hidden">
            Menu
          </div>
        ) : !isOpenMenu && !isMobileSubMenu ? (
          <div className="w-full text-xl font-semibold leading-tight text-secondary-base xl:hidden 2xl:hidden">
            {dropDownList.map((item, index) => {
              return (
                currentTab === item.link && (
                  <span key={index}>{item.title}</span>
                )
              );
            })}
            {navMenu.map((item, index) => {
              return (
                currentTab === item.name &&
                (!item.name ? (
                  <Image
                    key={index}
                    src={Logo}
                    width={173}
                    height={36}
                    alt="logo"
                    className=""
                  />
                ) : (
                  <div
                    key={index}
                    className="w-full text-xl font-semibold leading-tight text-secondary-base lg:hidden xl:hidden 2xl:hidden"
                  >
                    {item.title}
                  </div>
                ))
              );
            })}
          </div>
        ) : (
          isMobileSubMenu && (
            <div className="w-full text-xl font-semibold leading-tight text-secondary-base lg:hidden xl:hidden 2xl:hidden">
              Accept Payments
            </div>
          )
        )}
        <Image
          src={Logo}
          width={173}
          height={36}
          alt="logo"
          className="xs:hidden sm:hidden"
        />
      </div>
      <div className="flex h-full items-center justify-between">
        {/* {isBrowser && ( */}
        <ul className="h-full items-center gap-6 sm:hidden md:flex lg:flex xl:flex 2xl:flex">
          {navMenu.map((item, index) => (
            <>
              {item.title === 'Accept Payments' ? (
                <div
                  className="flex h-full place-items-center"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <AcceptPayments
                    isHovered={isHovered}
                    title={item.title}
                    setIsHovered={setIsHovered}
                  />
                </div>
              ) : (
                <Link key={index} href={item.link}>
                  <li className="cursor-pointer text-sm leading-tight text-secondary-base transition duration-300 hover:text-primary-base">
                    {item.title}
                  </li>
                </Link>
              )}
              <div className="h-[10px] w-[1px] bg-border-dark" />
            </>
          ))}
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
          className="md:hidden xl:hidden 2xl:hidden"
          onClick={() => {
            setIsOpenMenu(!isOpenMenu);
            setIsMobileSubMenu(false);
          }}
        >
          {isOpenMenu ? (
            <Image src={CloseIcon} width={24} height={24} alt="closeIcon" />
          ) : (
            <Image src={Menu} alt="menu" width={24} height={24} />
          )}
        </div>
        {/* )} */}
      </div>
      {isOpenMenu &&
        (!isMobileSubMenu ? (
          <NavMobileMenu
            setIsMobileSubMenu={setIsMobileSubMenu}
            setIsOpenMenu={setIsOpenMenu}
          />
        ) : (
          <NavMobileSubMenu
            setIsMobileSubMenu={setIsMobileSubMenu}
            setIsOpenMenu={setIsOpenMenu}
          />
        ))}
    </nav>
  );
};

export default Navbar;
