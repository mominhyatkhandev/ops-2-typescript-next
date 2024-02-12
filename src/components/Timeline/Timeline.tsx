import React from 'react';

const Timeline = () => {
  return (
    <div className="mt-3">
      <ol className="items-center sm:flex">
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex h-6 w-6 shrink-0 items-center  justify-center rounded-full  ring-0 sm:ring-8">
              <svg
                className="text-blue-800 dark:text-blue-300 h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 hidden h-0.5 w-full bg-primary-400 sm:flex">
              hiiiiii
            </div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-gray-900 dark:text-white text-lg font-semibold">
              Flowbite Library v1.0.0
            </h3>
            <time className="text-gray-400 dark:text-gray-500 mb-2 block text-sm font-normal leading-none">
              Released on December 2, 2021
            </time>
            <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
              Get started with dozens of web components and interactive
              elements.
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="bg-blue-100 ring-white dark:bg-blue-900 dark:ring-gray-900 z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-0 sm:ring-8">
              <svg
                className="text-blue-800 dark:text-blue-300 h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 hidden h-0.5 w-full sm:flex"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-gray-900 dark:text-white text-lg font-semibold">
              Flowbite Library v1.2.0
            </h3>
            <time className="text-gray-400 dark:text-gray-500 mb-2 block text-sm font-normal leading-none">
              Released on December 23, 2021
            </time>
            <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
              Get started with dozens of web components and interactive
              elements.
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="bg-blue-100 ring-white dark:bg-blue-900 dark:ring-gray-900 z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-0 sm:ring-8">
              <svg
                className="text-blue-800 dark:text-blue-300 h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 hidden h-0.5 w-full sm:flex"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-gray-900 dark:text-white text-lg font-semibold">
              Flowbite Library v1.3.0
            </h3>
            <time className="text-gray-400 dark:text-gray-500 mb-2 block text-sm font-normal leading-none">
              Released on January 5, 2022
            </time>
            <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
              Get started with dozens of web components and interactive
              elements.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Timeline;
