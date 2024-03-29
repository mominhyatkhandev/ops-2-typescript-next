import React from 'react';

import type { IHeaderProps } from '@/interfaces/interface';
// import Info from '@/components/Content/Info/Info';
// import { cards } from '@/utils/data';

// import Card from '@/UI/Card/Card';
// import Card from '../UI/Card/Card';

function Header({ title, description, centerTitle }: IHeaderProps) {
  const titleCase = centerTitle ? 'text-center w-full' : 'text-start';
  const widthCase = centerTitle ? 'w-full' : 'max-w-[900px]';
  return (
    // <div className="grid w-full flex-col gap-9 px-[150px] align-middle sm:md-max:gap-[20px] sm:md-max:px-[24px]">
    <>
      <div className="flex flex-col justify-center gap-2 align-middle">
        <h1
          className={`text-5xl ${widthCase} ${titleCase} font-semibold sm:md-max:text-start sm:md-max:text-[32px]`}
        >
          {/* <span className=""> */}
          <span className="sm:md-max:block">
            {title.main} {''}
          </span>
          <span className=" text-primary-base">{title.sub}</span>
        </h1>
        <p className="text-base font-normal leading-tight text-secondary-600 sm:md-max:text-sm ">
          {description}
        </p>
      </div>

      {/* <div className="flex flex-row gap-5 sm:md-max:flex-col">
        {cards?.map((item, index) => {
          return (
            <Card
              key={index}
              logo={item.logo}
              label={item.label}
              description={item.description}
            />
          );
        })}
      </div> */}
    </>
  );
}

export default Header;
