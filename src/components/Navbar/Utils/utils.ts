import Coin from '@/assets/icons/card-coin.svg';
import Money from '@/assets/icons/money-nav.svg';
import Scanner from '@/assets/icons/scanner-nav.svg';
import Shop from '@/assets/icons/shop-nav.svg';
import SubscriptionIcon from '@/assets/icons/subscription-icon.svg';

export const getNavMenu = () => [
  { title: 'Home', link: '/', name: 'home' },
  {
    title: 'Accept Payments',
    link: '/accept-payments',
    name: 'accept-payments',
  },
  { title: 'Developer', link: '/developer', name: 'developer' },
  { title: 'FAQs', link: '/faq', name: 'faq' },
];

export const getDropDownMenu = () => [
  { title: 'Payment Gateway', link: 'payment-gateway', icon: Coin },
  { title: 'QR Payments', link: 'qr-payments', icon: Scanner },
  { title: 'Mini Apps', link: 'mini-apps', icon: Shop },
  { title: 'Payment Link', link: 'payment-link', icon: Money },
  { title: 'Subscription', link: 'subscription', icon: SubscriptionIcon },
];
