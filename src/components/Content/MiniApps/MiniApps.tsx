import Image from 'next/image';
import React from 'react';

import miniApps from '../../../assets/images/miniapps.png';

const MiniApps = (): JSX.Element => {
  return (
    <div id="NewRootRoot" className="flex w-full flex-col">
      {/* <div className="ma-bg bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-center min-h-[640px] shrink-0 items-center"> */}
      <div className="relative flex shrink-0 flex-col items-center justify-center px-[254px] py-[158px]">
        <Image
          src={miniApps}
          alt="miniApps Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />
        <div className="relative flex shrink-0 flex-col items-center justify-center gap-12 rounded-lg bg-neutral-white-base p-10 shadow-[0px_4px_16px_0px_rgba(51,_51,_51,_0.08)]">
          <div
            id="MiniApps1"
            className="text-5xl font-semibold leading-tight text-secondary-base"
          >
            Mini <span className="leading-tight text-primary-base">Apps</span>
          </div>
          <div className="grid gap-9 md:grid-cols-1 lg:grid-cols-3">
            <div className="text-base font-normal leading-tight text-secondary-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmodtempor
              incididunt ut labore et doloreLorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </div>
            <div className="text-base font-normal leading-tight text-secondary-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmodtempor
              incididunt ut labore et doloreLorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </div>
            <div className="text-base font-normal leading-tight text-secondary-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmodtempor
              incididunt ut labore et doloreLorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniApps;
