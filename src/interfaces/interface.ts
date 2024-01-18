import type { StaticImageData } from 'next/image';
import type { ReactNode } from 'react';
import type React from 'react';

import type { TCard } from '@/types/static/static';

export default interface IHome {
  image: {
    src: StaticImageData;
    alt: string;
  };
  label: {
    main: string;
    sub: string;
  };
  description: string | Record<string, string>;
  className: string;
}

export interface ISuccessModalProps {
  title: string;
  description: string;
  show: boolean;
}

export interface IButton {
  label: string;
  type?: 'button' | 'submit';
  className?: string;
  isDisabled?: boolean;
  routeName?: string;
  onClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IFormLayout {
  children: ReactNode;
  className?: string;
}

export interface IHeaderWrapper {
  heading: string;
  description?: string;
  show?: boolean;
}

export interface IInputPrimary {
  name: string;
  label: string;
  type: string;
  className?: string;
  hasImage?: boolean;
  isDisabled?: boolean;
  image: StaticImageData;
}

export interface IInput {
  name: string;
  label: string;
  type: string;
  className?: string;
  isDisabled?: boolean;
  hasImage?: boolean;
  image?: StaticImageData | string;
  error: string | undefined;
  touched: boolean | undefined;
  eyeinput?: boolean;
}

export interface ICheckboxInput {
  label: string;
  logo: StaticImageData;
  selected: boolean;
  onSelect: () => void;
}

// export interface IButton {
//   label: string;
//   className?: string;
//   onClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }
// Props

export interface ICustomModalProps {
  title?: string;
  description?: string;
  show: boolean;
  setShowModal: (value: boolean) => void;
}

export interface IInfoProp {
  title?: string;
  cardsArray?: TCard[];
}

export interface IDropdownProps {
  isHovered: boolean;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

export interface ICardProps {
  label: string;
  logo: { image1: StaticImageData; image2: StaticImageData };
  className?: string;
  children?: React.ReactNode;
  description?: string;
}

export interface IModalProps {
  isSuccess: boolean;
  showModal: boolean;
  children: React.ReactNode;
  setShowModal: (showModal: boolean) => void;
}

export interface CustomModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
  className: string;
}

export interface IAcceptPaymentWrapper {
  children: ReactNode;
  //   className?: string;
}
