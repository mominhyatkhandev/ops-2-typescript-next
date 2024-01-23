'use client';

// import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import React from 'react';

import type { IHeaderWrapper } from '@/interfaces/interface';
import { getHeaderTextForSegment } from '@/utils/helper';

// interface IHeaderWrapper {
//   heading: string;
//   description?: string;
//   show?: boolean;
// }

const HeaderWrapper = ({
  heading,
  description,
  show = false,
}: IHeaderWrapper): JSX.Element => {
  // const router = useRouter();
  // const { query } = router;
  const pathName = usePathname();
  const currentURL: string[] = pathName.split('/');
  // console.log('CURRENT URL', currentURL);

  // console.log(query.option, 'optionnnn', router, currentURL);

  const getHeaderText = (urlSegments: string[]) => {
    return urlSegments.map((url, index, arr) => (
      <div key={index}>
        {url && index > 0 && (
          <div key={index} className="flex gap-2">
            <span
              className={`${
                index !== arr.length - 2
                  ? 'text-secondary-base'
                  : 'text-secondary-400'
              }`}
            >
              {getHeaderTextForSegment(url)}
            </span>
            {index > 0 && index !== arr.length - 2 && (
              <span className="text-[10px] text-border-dark">/</span>
            )}
          </div>
        )}
      </div>
    ));
  };
  return (
    <>
      <div className="px-[150px] sm:md-max:px-[24px]">
        {show ? (
          <header className="text-secondary-base">
            <div className="flex gap-2 pt-[24px] text-xs font-normal">
              {getHeaderText(currentURL)}
            </div>
          </header>
        ) : // <div className="pt-[24px] text-xs flex gap-2 font-normal">
        //   Sign Up <span className="text-[10px] text-border-dark">/</span>
        //   <span className="text-secondary-400">Personal information</span>
        // </div>
        null}
        {show ? (
          <div className="flex flex-col gap-2 pb-[24px] pt-[36px]">
            <div className="flex w-full text-5xl font-semibold text-secondary-base sm:md-max:text-[32px]">
              {heading}
            </div>
            <div className="text-base font-normal text-secondary-600 sm:md-max:text-sm">
              {description}
            </div>
          </div>
        ) : (
          <div className={`flex flex-col gap-2 pt-[76px]`}>
            <div className="flex w-full text-5xl font-semibold text-secondary-base sm:md-max:text-[32px]">
              {heading}
            </div>
            <div className="text-base font-normal text-secondary-600 sm:md-max:text-sm">
              {description}
            </div>
          </div>
        )}
        <div className="flex flex-col gap-2">
          <div className="flex w-full text-5xl font-semibold text-secondary-base">
            {heading}
          </div>
          <div className="text-base font-normal text-secondary-600">
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderWrapper;
