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
    smallGiftEligible,
    squirrelReserveEligible,
    standardGiftEligible,
    mediumGiftEligible,
    premiumGiftEligible,
    price,
    imageUrl,
    description,
    // These fields may not exist
    strain,
    brand,
    name,
  } = props.product;

  return (
    <ItemCard
      altText={description}
      imageUrl={imageUrl}
      almostGone={almostGone}
      isNew={isNew}
      bannerType={
        smallGiftEligible ? 'Small' : (
          mediumGiftEligible ? 'Medium' : (
            standardGiftEligible ? 'Standard' : (
              premiumGiftEligible ? 'Premium' : (
                squirrelReserveEligible ? 'Reserve' : ''
              )
            )
          )
        )
      }
    >
      <h2 className='font-semibold text-lg'>
        {strain ?? name ?? brand}
      </h2>

      <p className='text-gray-400 text-xs mb-2'>
        {description}
      </p>

      <p className='font-medium text-sm'>
        Value: {price}
      </p>
    </ItemCard>
  );
};

export { Gift };