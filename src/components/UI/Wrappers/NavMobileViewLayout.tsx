import React from 'react';

interface INavMobileViewLayout {
  children: React.ReactElement;
}

const NavMobileViewLayout = ({ children }: INavMobileViewLayout) => {
  return (
    <div
      className={`absolute right-0 top-20 z-10 w-full flex-col items-center gap-10 bg-neutral-white-base text-neutral-white-base lg:hidden xl:hidden 2xl:hidden`}
    >
      {children}
    </div>
  );
};

export default NavMobileViewLayout;
