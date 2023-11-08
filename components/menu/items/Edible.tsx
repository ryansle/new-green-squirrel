// Components
import { ItemCard } from '@/components/menu/items';

// Types
import { Edible as EdibleType } from '@/lib/types';

type EdibleProps = {
  edible: EdibleType
};

const Edible = (props: EdibleProps) => {
  const {
    brand,
    description,
    imageUrl,
    price,
    new: isNew,
    ourPick,
    almostGone,
  } = props.edible;

  return (
    <ItemCard
      altText={brand}
      imageUrl={imageUrl}
      almostGone={almostGone}
      isNew={isNew}
      bannerType={ourPick ? 'Our Pick' : ''}
    >
      <h2 className='font-semibold text-lg'>
        {brand}
      </h2>

      <p className='text-gray-400 text-xs mb-2'>
        {description}
      </p>

      <p className='font-medium text-sm'>
        {price}
      </p>
    </ItemCard>
  );
};

export { Edible };
