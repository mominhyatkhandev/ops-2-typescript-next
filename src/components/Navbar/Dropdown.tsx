// Dropdown.tsx

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import SubscriptionIcon from '@/assets/icons/subscription-icon.svg';

import Coin from '../../assets/icons/card-coin.svg';
import Money from '../../assets/icons/money-nav.svg';
import Scanner from '../../assets/icons/scanner-nav.svg';
import Shop from '../../assets/icons/shop-nav.svg';

interface IDropdownProps {
  isHovered: boolean;
  setSelectedOption: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Dropdown = ({ isHovered, setSelectedOption }: IDropdownProps) => {
  const router = usePathname();

  const dropDownList = [
    { title: 'Payment Gateway', link: 'payment-gateway', icon: Coin },
    { title: 'QR Payments', link: 'qr-payments', icon: Scanner },
    { title: 'Mini Apps', link: 'mini-apps', icon: Shop },
    { title: 'Payment Link', link: 'payment-link', icon: Money },
    { title: 'Subscription', link: 'subscription', icon: SubscriptionIcon },
  ];

  return (
    <>
      {isHovered && (
        <div className="absolute left-0 top-[42px] z-10 flex w-[225px] flex-col items-start justify-start gap-[24px] rounded-lg bg-neutral-white-base p-[24px] shadow-md">
          {dropDownList.map((item, index) => (
            <Link key={index} href={`/accept-payments/${item.link}`}>
              <div
                key={index}
                onClick={() => setSelectedOption(item.title)}
                className={`flex flex-row items-start gap-4 duration-300 hover:text-primary-base hover:transition ${
                  router === `/accept-payments/${item.link}`
                    ? 'text-primary-base'
                    : ''
                }`}
              >
                <Image src={item.icon} width={24} height={24} alt="coin" />
                <span>{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Dropdown;
