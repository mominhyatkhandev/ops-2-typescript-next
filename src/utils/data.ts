import MA1 from '@/assets/icons/mini-apps-v1.svg';
import MA2 from '@/assets/icons/mini-apps-v2.svg';
import OP1 from '@/assets/icons/online-payments-v1.svg';
import OP2 from '@/assets/icons/online-payments-v2.svg';
import PL1 from '@/assets/icons/payment-link-v1.svg';
import PL2 from '@/assets/icons/payment-link-v2.svg';
import QR1 from '@/assets/icons/qr-integrations-v1.svg';
import QR2 from '@/assets/icons/qr-integrations-v2.svg';
import type { TCard } from '@/types/static/static';

// import web from '@/assets/icons/global.svg';

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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d  eiusmodtempor incididunt ut labore et dolore',
  },
  {
    label: 'Payment Link',
    logo: { image1: PL1, image2: PL2 },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d  eiusmodtempor incididunt ut labore et dolore',
  },
];
