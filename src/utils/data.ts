import MA1 from '@/assets/icons/mini-apps-v1.svg';
import MA2 from '@/assets/icons/mini-apps-v2.svg';
import OP1 from '@/assets/icons/online-payments-v1.svg';
import OP2 from '@/assets/icons/online-payments-v2.svg';
import PL1 from '@/assets/icons/payment-link-v1.svg';
import PL2 from '@/assets/icons/payment-link-v2.svg';
import QR1 from '@/assets/icons/qr-integrations-v1.svg';
import QR2 from '@/assets/icons/qr-integrations-v2.svg';
// Merchant Methods Data
import miniApps from '@/assets/images/miniapps.png';
import onlinePayments from '@/assets/images/onlinePayments.png';
import paymentLink from '@/assets/images/paymentLink.png';
import qrPayments from '@/assets/images/qrpayments.png';
import type IHome from '@/interfaces/interface';
import type { TCard } from '@/types/static/static';

export const cards: TCard[] = [
  {
    label: 'Online Payments',
    logo: { image1: OP1, image2: OP2 },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d  eiusmodtempor incididunt ut labore et dolore ',
  },
  {
    label: 'QR Integration',
    logo: { image1: QR1, image2: QR2 },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d  eiusmodtempor incididunt ut labore et dolore',
  },
  {
    label: 'Mini APPS',
    logo: { image1: MA1, image2: MA2 },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d  eiusmodtemporin ut labore et dolore',
  },
  {
    label: 'Payment Link',
    logo: { image1: PL1, image2: PL2 },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d  eiusmodtempor incididunt ut labore et dolore',
  },
];
// Merchant Methods
export const MerchantMethodsData: IHome[] = [
  {
    image: {
      src: onlinePayments,
      alt: 'Payments Background',
    },
    label: {
      main: 'Online',
      sub: 'Payments',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit.',
    className:
      'min-h-[640px] w-full bg-no-repeat grid place-items-end px-[150px] py-24 relative sm:md-max:px-[24px] sm:md-max:py-[80px]',
  },

  {
    image: {
      src: qrPayments,
      alt: 'QrPayments Background',
    },
    label: {
      main: 'QR',
      sub: 'Payments',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit.',
    className:
      'min-h-[640px] flex flex-col justify-end shrink-0 items-start px-[150px] py-24 relative sm:md-max:px-[24px]',
  },

  {
    image: {
      src: miniApps,
      alt: 'miniApps Background',
    },
    label: {
      main: 'Mini',
      sub: 'Apps',
    },
    description: {
      desc1:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc2:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit.',
      desc3:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    className:
      'flex flex-col place-items-center shrink-0 px-[254px] py-[146px]  relative sm:md-max:px-[24px] sm:md-max:py-[166px]',
  },
  {
    image: {
      src: paymentLink,
      alt: 'Payments-Link Background',
    },
    label: {
      main: 'Payment',
      sub: 'Link',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et doloreLorem ipsum dolor sit amet, consectetur adipiscing elit.',
    className:
      'min-h-[640px] grid place-items-end shrink-0 px-[150px] py-24 relative sm:md-max:px-[24px]',
  },
];
