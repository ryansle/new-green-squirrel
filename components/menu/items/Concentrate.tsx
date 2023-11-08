// Components
import { ItemCard } from '@/components/menu/items';

// Types
import { Concentrate as ConcentrateType } from '@/lib/types';

type ConcentrateProps = {
  concentrate: ConcentrateType
};

const Concentrate = (props: ConcentrateProps) => {
  const {
    name,
    quantity,
    description,
    imageUrl,
    price,
    new: isNew,
    ourPick,
    almostGone,
  } = props.concentrate;

  return (
    <ItemCard
      altText={name}
      imageUrl={imageUrl}
      almostGone={almostGone}
      isNew={isNew}
      bannerType={ourPick ? 'Our Pick' : ''}
    >
      <h2 className='font-semibold text-lg'>
        {name}
      </h2>

      <p className='text-gray-400 text-xs mb-2'>
        {description}
      </p>

      <p className='font-medium text-sm'>
        {quantity} @ {price}
      </p>
    </ItemCard>
  );
};

export { Concentrate };
