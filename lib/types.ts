// Built-in Types
import type { ReactNode } from 'react';

// #region Custom Types
type Route = {
  text: string;
  href: string;
  icon: ReactNode;
}

type SocialMedia = {
  url: string;
  platform: string;
}

type Policy = {
  policy: string;
}

type FAQ = {
  question: string;
  answer: string;
}
// #endregion

// #region Menu
type Flower = {
  strain: string;
  thcContent: string;
  cbdContent: string;
  description: string;
  jarType: 'clear' | 'black' | 'green';
  type: 'sativa' | 'indica' | 'hybrid';
  imageUrl: string;
  quantity: string;
  visible: boolean;
  ourPick: boolean;
  almostGone: boolean;
  price: string;
  new: boolean;
  smallGiftEligible: boolean;
  mediumGiftEligible: boolean;
  standardGiftEligible: boolean;
  premiumGiftEligible: boolean;
  squirrelReserveElig: boolean;
  referralGiftEligible: boolean | null;
}

type Cartridge = {
  visible: boolean;
  thcContent: string;
  price: string;
  brand: string;
  types: string[];
  imageUrl: string;
  quantity: string;
  description: string;
  new: boolean;
  almostGone: boolean;
  ourPick: boolean;
  smallGiftEligible: boolean;
  squirrelReserveEligible: boolean;
  standardGiftEligible: boolean;
  referralGiftEligible: boolean;
  mediumGiftEligible: boolean;
  premiumGiftEligible: boolean;

}
// #endregion

export type {
  Route,
  SocialMedia,
  Policy,
  FAQ,
  Flower,
  Cartridge
};