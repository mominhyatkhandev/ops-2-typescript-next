import Image from 'next/image';
import React from 'react';

import { MerchantMethodsData } from '@/utils/data';

const MerchantMethods = () => {
  return (
    <div id="NewRootRoot" className="flex w-full flex-col">
      <div className="flex flex-col gap-5 pb-[93px] sm:md-max:pb-[80px] ">
        {MerchantMethodsData.map((item, index) => (
          // <div key={index}>
          <div key={index} className={item.className}>
            <Image
              src={item.image.src}
              alt={item.image.alt}
              layout="fill"
              objectFit="cover"
              quality={100}
              className="absolute inset-0 object-left"
            />
            <div
              className={
                typeof item.description === 'string'
                  ? 'relative flex max-w-[560px] shrink-0 flex-col items-start justify-center gap-12 rounded-lg bg-neutral-white-base px-[32px] py-[40px] shadow-[0px_4px_16px_0px_rgba(51,_51,_51,_0.08)] sm:md-max:max-w-full sm:md-max:gap-6 sm:md-max:px-[20px] sm:md-max:py-4'
                  : // ? 'relative flex max-w-[560px] shrink-0 flex-col items-start justify-center gap-12 rounded-lg bg-neutral-white-base px-[32px] py-[40px] shadow-[0px_4px_16px_0px_rgba(51,_51,_51,_0.08)] sm:md-max:gap-6 sm:md-max:px-[20px] sm:md-max:py-4'

                    'relative flex shrink-0 flex-col place-items-center gap-12 rounded-lg bg-neutral-white-base p-10 shadow-[0px_4px_16px_0px_rgba(51,_51,_51,_0.08)] sm:md-max:gap-6 sm:md-max:px-[20px] sm:md-max:py-4'
              }
            >
              <div className="text-5xl font-semibold leading-tight text-secondary-base sm:md-max:text-[32px]">
                {item.label.main} {''}
                <span className="text-primary-base">{item.label.sub}</span>
              </div>
              {typeof item.description === 'string' ? (
                <div className="text-base font-normal leading-tight text-secondary-600 sm:md-max:text-sm sm:md-max:text-secondary-400">
                  {item.description}
                </div>
              ) : (
                <>
                  <div className="lg:grid-cols-3 grid gap-9 md:grid-cols-1">
                    <div className="text-base font-normal leading-tight text-secondary-600 sm:md-max:text-sm sm:md-max:text-secondary-400">
                      {item.description.desc1}
                    </div>
                    <div className="text-base font-normal leading-tight text-secondary-600 sm:md-max:text-sm sm:md-max:text-secondary-400">
                      {item.description.desc2}
                    </div>
                    <div className="text-base font-normal leading-tight text-secondary-600 sm:md-max:text-sm sm:md-max:text-secondary-400">
                      {item.description.desc3}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchantMethods;
