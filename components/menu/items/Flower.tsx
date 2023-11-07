// Components
import NextImage from 'next/image';
import { Badge } from '@/components/menu';
import { ItemCard } from '@/components/menu/items';
import { FaJar as Jar } from 'react-icons/fa6';

// Types
import type { Flower } from '@/lib/types';

// Utilities
import clsx from 'clsx';

type FlowerProps = {
  flower: Flower;
};

const Flower = (props: FlowerProps) => {
  const {
    strain,
    type,
    thcContent,
    cbdContent,
    description,
    imageUrl,
    quantity,
    price,
    jarType,
    new: isNew,
    ourPick,
    almostGone,
  } = props.flower;

  const renderJar = (jarType: string) => {
    return clsx([
      jarType === 'black' && 'fill-gray-500',
      jarType === 'clear' && 'fill-white',
      jarType === 'green' && 'fill-green-500',
    ]);
  };

  return (
    <ItemCard
      bannerType={type}
      altText={strain}
      imageUrl={imageUrl}
      almostGone={almostGone}
      isNew={isNew}
      ourPick={ourPick}
    >
      <h3 className='text-gray-400 font-medium text-sm'>
        {thcContent} THC • {cbdContent.startsWith('.') ? `0${cbdContent}` : cbdContent} CBD
      </h3>
      <h2 className='font-semibold text-lg'>
        {strain}
      </h2>

      <p className='text-gray-400 text-xs mb-2'>
        {description}
      </p>

      <div className='flex items-center'>
        <Jar className={renderJar(jarType)} />
        <p className='font-medium text-sm pl-4'>
          {quantity} @ {price}
        </p>
      </div>
    </ItemCard>
  );
};

export { Flower };
