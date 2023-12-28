import Image from 'next/image';

import home from '@/assets/icons/home-sign-up.svg';

export const getHeaderTextForSegment = (segment: string) => {
  const lowercasedSegment = segment.toLowerCase();
  switch (lowercasedSegment) {
    case 'sign-up':
      return (
        <span className="flex gap-1">
          <Image src={home} alt={home} width={15} height={15} />
          <span>Sign up</span>
        </span>
      );
    case 'personal-info':
      return <span>Personal Information</span>;
    case 'otp':
      return <span>OTP</span>;
    default:
      return <span>{segment}</span>;
  }
};
