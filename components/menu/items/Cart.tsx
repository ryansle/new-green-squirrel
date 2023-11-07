// Components
import NextImage from 'next/image';
import { ItemCard } from '@/components/menu/items';

// Types
import type { Cartridge } from '@/lib/types';

// Utilities
import clsx from 'clsx';

type CartProps = {
  cart: Cartridge;
};

// TODO: adjust photo dimensions on sanity.studio
const Cart = (props: CartProps) => {
  const {
    brand,
    types,
    thcContent,
    description,
    imageUrl,
    quantity,
    price,
    new: isNew,
    ourPick,
    almostGone,
  } = props.cart;

  const renderStyles = (variant: string) => {
    return clsx([
      variant === 'sativa' && 'bg-yellow-400 text-yellow-800',
      variant === 'indica' && 'bg-purple-300 text-purple-800',
      variant === 'hybrid' && 'bg-blue-400 text-blue-800',
    ]);
  };

  return (
    <ItemCard
      altText={`${brand} Cart - ${thcContent} THC`}
      imageUrl={imageUrl}
      almostGone={almostGone}
      isNew={isNew}
      ourPick={ourPick}
    >
      <h2 className='font-semibold text-lg'>
        {brand}
      </h2>

      <p className='text-gray-400 text-xs mb-2'>
        {description}
      </p>

      <p className='font-medium text-sm'>
        {quantity} @ {price}
      </p>

      <div className='flex items-center space-x-1 mt-2'>
        {types.map((type) => (
          <span className={`${renderStyles(type)} text-xs px-2 rounded uppercase`} key={type}>
            {type}
          </span>
        ))}
      </div>
    </ItemCard>
  );
};

export { Cart };