// Components
import { ItemCard } from '@/components/menu/items';

// Types
import type { Product } from '@/lib/types';

type GiftProps = {
  product: Product
}

const Gift = (props: GiftProps) => {
  const {
    almostGone,
    new: isNew,
    ourPick,
    smallGiftEligible,
    squirrelReserveEligible,
    standardGiftEligible,
    referralGiftEligible,
    mediumGiftEligible,
    premiumGiftEligible,
    price,
    imageUrl,
    description,
    // These fields may not exist
    strain,
    quantity,
    brand,
  } = props.product;

  return (
    <ItemCard
      altText={description}
      imageUrl={imageUrl}
      almostGone={almostGone}
      isNew={isNew}
    >

    </ItemCard>
  );
};

export { Gift };