/* eslint-disable @typescript-eslint/no-unused-expressions */

'use client';

import React, { useEffect, useState } from 'react';

import Dropdown from './Dropdown';

const AcceptPayments = ({
  other,
  clickTrigger,
  isHovered,
  setIsHovered,
}: {
  other: string;
  clickTrigger: boolean;
  isHovered: boolean;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
  // const [selectedOption, setSelectedOption] = useState<string | undefined>('');
  const [selectedOption, setSelectedOption] = useState<string>('');
  // const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const pathArray = window.location.pathname.split('/');
    const selectedTitle: string | undefined = pathArray[pathArray.length - 1];
    let formattedTitle;

    if (other !== 'AcceptPayments') {
      formattedTitle = '';
    } else {
      formattedTitle =
        selectedTitle
          ?.replace(/-/g, ' ')
          ?.replace(/(?:^|\s)\S/g, (match) => match.toUpperCase()) ?? '';
    }
    formattedTitle !== '' && setSelectedOption(formattedTitle);
  }, [other, clickTrigger]);

  return (
    <div
      onClick={() => setIsHovered(!isHovered)}
      className={`relative cursor-pointer text-center text-sm text-secondary-base
        `}
    >
      <div
        className={`relative flex w-full items-start justify-start ${
          isHovered && 'text-primary-base'
        } duration-300 hover:text-primary-base hover:transition`}
      >
        Accept Payments
      </div>
      {selectedOption && (
        <div className="absolute top-5 text-xs leading-tight text-primary-base">
          {selectedOption}
        </div>
      )}

      <>
        {isHovered && (
          <Dropdown
            isHovered={isHovered}
            setSelectedOption={setSelectedOption}
          />
        )}
      </>
    </div>
  );
};

export default AcceptPayments;
