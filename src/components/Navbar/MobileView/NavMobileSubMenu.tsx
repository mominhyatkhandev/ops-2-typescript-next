import Link from 'next/link';
import React from 'react';

import NavMobileViewLayout from '@/components/UI/Wrappers/NavMobileViewLayout';

import { dropDownList } from '../Dropdown';

interface INavMobileSubMenu {
  setSelectedSubMenuItem: React.Dispatch<React.SetStateAction<string>>;
  selectedSubMenuItem: string;
  setIsMobileSubMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMobileView: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileSubMenu: boolean;
}

const NavMobileSubMenu = ({
  setSelectedSubMenuItem,
  // selectedSubMenuItem,
  setIsMobileSubMenu,
  setIsMobileView,
  isMobileSubMenu,
}: INavMobileSubMenu) => {
  // const router = usePathname();

  return (
    <NavMobileViewLayout>
      <>
        <div className="flex flex-col items-start gap-8 border-y-2 border-border-light px-6 py-8">
          {dropDownList.map((item, index) => (
            <Link key={index} href={`/accept-payments/${item.link}`}>
              <div
                key={index}
                onClick={() => {
                  setSelectedSubMenuItem(item.title);
                  setIsMobileSubMenu(!isMobileSubMenu);
                  setIsMobileView(false);
                }}
                // className={`flex flex-row items-start gap-4 duration-300 hover:text-primary-base hover:transition ${
                //   router === `/accept-payments/${item.link}`
                //     ? 'text-primary-base'
                //     : ''
                // }`}
              >
                <div className="text-base leading-tight text-secondary-base">
                  {item.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </>
    </NavMobileViewLayout>
  );
};

export default NavMobileSubMenu;
