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
type Product = {
  almostGone: boolean;
  new: boolean;
  ourPick: boolean;
  visible: boolean;
  smallGiftEligible: boolean;
  squirrelReserveEligible: boolean;
  standardGiftEligible: boolean;
  referralGiftEligible: boolean;
  mediumGiftEligible: boolean;
  premiumGiftEligible: boolean;
  price: string;
  imageUrl: string;
  description: string;
}

type Flower = Product & {
  strain: string;
  thcContent: string;
  cbdContent: string;
  jarType: 'clear' | 'black' | 'green';
  type: 'sativa' | 'indica' | 'hybrid';
  quantity: string;
}

type Cartridge = Product & {
  thcContent: string;
  brand: string;
  types: string[];
  quantity: string;
}

type Battery = Product & {
  brand: string;
  name: string;
}

type Edible = Product & {
  thcContent: string;
  brand: string;
  name: string;
}

type Preroll = Product & {
  name: string;
}

type Concentrate = Product & {
  quantity: string;
  name: string;
}

type Special = Product & {
  quantity: string;
  name: string;
}

type Category = 'flowers' | 'cartridges' | 'batteries' | 'edibles' | 'prerolls' | 'concentrates' | 'specialty items' | '';
// #endregion

export type {
  Route,
  SocialMedia,
  Policy,
  FAQ,
  Flower,
  Cartridge,
  Battery,
  Edible,
  Preroll,
  Concentrate,
  Special,
  Category,
};