// Components
import { ItemCard } from '@/components/menu/items';

// Types
import { Preroll as PrerollType } from '@/lib/types';

type PrerollProps = {
  preroll: PrerollType
};

const Preroll = (props: PrerollProps) => {
  const {
    name,
    description,
    imageUrl,
    price,
    new: isNew,
    ourPick,
    almostGone,
  } = props.preroll;

  return (
    <ItemCard
      altText={name}
      imageUrl={imageUrl}
      almostGone={almostGone}
      isNew={isNew}
      ourPick={ourPick}
    >
      <h2 className='font-semibold text-lg'>
        {name}
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

export { Preroll };
