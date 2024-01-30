import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ChevronRight from '@/assets/icons/chevron-right.svg';
import Button from '@/components/UI/Button/PrimaryButton';
import NavMobileViewLayout from '@/components/UI/Wrappers/NavMobileViewLayout';

interface INavMobileMenu {
  setIsMobileSubMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMobileView: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedSubMenuItem: React.Dispatch<React.SetStateAction<string>>;
  setSelectedMenuItem: React.Dispatch<React.SetStateAction<string>>;
  isMobileSubMenu: boolean;
}

const NavMobileMenu = ({
  setIsMobileSubMenu,
  setIsMobileView,
  setSelectedSubMenuItem,
  setSelectedMenuItem,
  isMobileSubMenu,
}: INavMobileMenu) => {
  return (
    <NavMobileViewLayout>
      <>
        <div className="flex flex-col items-start gap-8 border-y-[1px] border-border-light px-6 py-8">
          <Link href={`/`}>
            <div
              className="leading-tight text-secondary-base"
              onClick={() => {
                setIsMobileView(false);
                setSelectedSubMenuItem('');
                setSelectedMenuItem('Home');
              }}
            >
              Home
            </div>
          </Link>
          <div
            className="flex w-full items-center justify-between"
            onClick={() => {
              setIsMobileSubMenu(!isMobileSubMenu);
              setSelectedMenuItem('acceptPayments');
            }}
          >
            <div className="leading-tight text-secondary-base">
              Accept Payments
            </div>
            <Image
              src={ChevronRight}
              alt="Chevronright"
              width={24}
              height={24}
              id="Chevronright"
            />
          </div>
          <Link href={`developer`}>
            <div
              className="leading-tight text-secondary-base"
              onClick={() => {
                setIsMobileView(false);
                setSelectedMenuItem('Developer');
                setSelectedSubMenuItem('');
              }}
            >
              Developer
            </div>
          </Link>
          <Link href={`/faq`}>
            <div
              className="leading-tight text-secondary-base"
              onClick={() => {
                setIsMobileView(false);
                setSelectedMenuItem('FAQ');
                setSelectedSubMenuItem('');
              }}
            >
              FAQs
            </div>
          </Link>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-4 border-b border-solid border-border-light px-6 py-8">
          <div
            onClick={() => {
              setIsMobileView(false);
              setSelectedSubMenuItem('');
            }}
          >
            <Button
              label="Sign up"
              routeName="/sign-up"
              className="button-primary w-24 px-2 py-[11px] text-xs leading-tight"
            />
          </div>
          <div
            onClick={() => {
              setIsMobileView(false);
              setSelectedSubMenuItem('');
            }}
          >
            <Button
              label="Login"
              routeName="/login"
              className="button-secondary w-24 px-2 py-[11px] text-xs leading-tight"
            />
          </div>
        </div>
      </>
    </NavMobileViewLayout>
  );
};

export default NavMobileMenu;
