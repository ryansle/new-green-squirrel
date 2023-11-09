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
    imageUrl,
    description,
    // These fields may not exist
    strain,
    brand,
    name,
    price,
  } = props.product;

  return (
    <ItemCard
      altText={description}
      imageUrl={imageUrl}
      almostGone={almostGone}
      isNew={isNew}
      bannerType={ourPick ? 'Our Pick' : ''}
    >
      <h2 className='font-semibold text-lg'>
        {strain ?? name ?? brand}
      </h2>

      <p className='text-gray-400 text-sm mb-2'>
        {description}
      </p>

      <p className='font-medium text-sm'>
        Value: {price}
      </p>
    </ItemCard>
  );
};

export { Gift };