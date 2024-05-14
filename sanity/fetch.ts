// Utilities
import { client } from '@/sanity/lib/client';

const revalidate = 60;

// #region Inventory Fetch Requests
const fetchFlowers = async () => {
  const data = await client.fetch(`*[_type == 'flowers' && visible] {
    strain,
    type,
    thcContent,
    cbdContent,
    description,
    'imageUrl': image.asset->url,
    quantity,
    price,
    jarType,
    new,
    ourPick,
    almostGone,
    smallGiftEligible,
    mediumGiftEligible,
    standardGiftEligible,
    premiumGiftEligible,
    referralGiftEligible,
    squirrelReserveEligible,
    visible,
  }`, { next: { revalidate } });

  return data;
};

const fetchBatteries = async () => {
  const data = await client.fetch(`*[_type == 'batteries' && visible] {
    brand,
    description,
    'imageUrl': image.asset->url,
    price,
    new,
    ourPick,
    almostGone,
    smallGiftEligible,
    mediumGiftEligible,
    standardGiftEligible,
    premiumGiftEligible,
    referralGiftEligible,
    squirrelReserveEligible,
    visible,
  }`, { next: { revalidate } });

  return data;
};

const fetchCarts = async () => {
  const data = await client.fetch(`*[_type == 'cartridges' && visible] {
    brand,
    types,
    thcContent,
    description,
    'imageUrl': image.asset->url,
    quantity,
    price,
    new,
    ourPick,
    almostGone,
    smallGiftEligible,
    mediumGiftEligible,
    standardGiftEligible,
    premiumGiftEligible,
    referralGiftEligible,
    squirrelReserveEligible,
    visible,
  }`, { next: { revalidate } });

  return data;
};

const fetchConcentrates = async () => {
  const data = await client.fetch(`*[_type == 'concentrates' && visible] {
    name,
    description,
    'imageUrl': image.asset->url,
    quantity,
    price,
    new,
    ourPick,
    almostGone,
    smallGiftEligible,
    mediumGiftEligible,
    standardGiftEligible,
    premiumGiftEligible,
    referralGiftEligible,
    squirrelReserveEligible,
    visible,
  }`, { next: { revalidate } });

  return data;
};

const fetchEdibles = async () => {
  const data = await client.fetch(`*[_type == 'edibles' && visible] {
    brand,
    name,
    description,
    'imageUrl': image.asset->url,
    thcContent,
    price,
    new,
    ourPick,
    almostGone,
    smallGiftEligible,
    mediumGiftEligible,
    standardGiftEligible,
    premiumGiftEligible,
    referralGiftEligible,
    squirrelReserveEligible,
    visible,
  }`, { next: { revalidate } });

  return data;
};

const fetchPrerolls = async () => {
  const data = await client.fetch(`*[_type == 'prerolls' && visible] {
    name,
    description,
    'imageUrl': image.asset->url,
    price,
    new,
    ourPick,
    almostGone,
    smallGiftEligible,
    mediumGiftEligible,
    standardGiftEligible,
    premiumGiftEligible,
    referralGiftEligible,
    squirrelReserveEligible,
    visible,
  }`, { next: { revalidate } });

  return data;
};

const fetchSpecials = async () => {
  const data = await client.fetch(`*[_type == 'specialRequest' && visible] {
    name,
    description,
    'imageUrl': image.asset->url,
    quantity,
    price,
    new,
    ourPick,
    almostGone,
    smallGiftEligible,
    mediumGiftEligible,
    standardGiftEligible,
    premiumGiftEligible,
    referralGiftEligible,
    squirrelReserveEligible,
    visible,
  }`, { next: { revalidate } });

  return data;
};
// #endregion

// #region Informational Fetch Requests
const fetchSocials = async () => {
  const data = client.fetch(`*[_type == 'socialMediaPlatforms'] {
    platform,
    link,
  }`, { next: { revalidate } });

  return data;
};

const fetchFAQ = async () => {
  const data = await client.fetch(`*[_type == 'faq'] {
    question, 
    answer
  }`, { next: { revalidate } });

  return data;
};

const fetchPolicies = async () => {
  const data = await client.fetch(`*[_type == 'policy'] {
    policy
  }`, { next: { revalidate } });

  return data;
};
// #endregion

// #region Offers Fetch Requests
const fetchLoyaltyOffers = async () => {
  const data = await client.fetch(`*[_type == 'loyaltyProgram'] {
    loyaltyOffer,
  }`, { next: { revalidate } });

  return data;
};

const fetchGiftPolicies = async () => {
  const data = await client.fetch(`*[_type == 'giftPolicies'] {
    policy
  }`, { next: { revalidate } });

  return data;
};

const fetchOffers = async () => {
  const data = await client.fetch(`*[_type == 'spendingRewards'] {
    minimumSpend,
    offer
  }`, { next: { revalidate } });

  return data;
};

const fetchFlowerGifts = async () => {
  const data = await client.fetch(`*[_type == 'flowergifts' && visible] {
    strain,
    type,
    thcContent,
    cbdContent,
    description,
    'imageUrl': image.asset->url,
    quantity,
    price,
    jarType,
    new,
    ourPick,
    almostGone,
    smallGiftEligible,
    mediumGiftEligible,
    standardGiftEligible,
    premiumGiftEligible,
    referralGiftEligible,
    squirrelReserveEligible,
    visible,
  }`, { next: { revalidate } });

  return data;
};
// #endregion

export {
  fetchFlowers,
  fetchBatteries,
  fetchCarts,
  fetchSpecials,
  fetchPrerolls,
  fetchConcentrates,
  fetchEdibles,
  fetchSocials,
  fetchFAQ,
  fetchPolicies,
  fetchLoyaltyOffers,
  fetchGiftPolicies,
  fetchOffers,
  fetchFlowerGifts,
};