import Link from 'next/link';
import React from 'react';

import NavMobileViewLayout from '@/components/UI/Wrappers/NavMobileViewLayout';

import { dropDownList } from '../Dropdown';

interface INavMobileSubMenu {
  setIsMobileSubMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMobileSubMenu = ({
  setIsMobileSubMenu,
  setIsOpenMenu,
}: INavMobileSubMenu) => {
  // const router = usePathname();

  return (
    <NavMobileViewLayout>
      <div className="flex flex-col items-start gap-8 border-y-2 border-border-light px-6 py-8">
        {dropDownList.map((item, index) => (
          <Link key={index} href={`/accept-payments/${item.link}`}>
            <div
              key={index}
              onClick={() => {
                setIsMobileSubMenu(false);
                setIsOpenMenu(false);
              }}
            >
              <div className="text-base leading-tight text-secondary-base">
                {item.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </NavMobileViewLayout>
  );
};

export default NavMobileSubMenu;
