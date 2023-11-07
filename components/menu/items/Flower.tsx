// Components
import NextImage from 'next/image';
import { Badge } from '@/components/menu';
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

  const renderBanner = (variant: string) => {
    return clsx([
      variant === 'sativa' && 'bg-yellow-400 text-yellow-800',
      variant === 'indica' && 'bg-purple-300 text-purple-800',
      variant === 'hybrid' && 'bg-blue-400 text-blue-800',
    ]);
  };

  const renderJar = (jarType: string) => {
    return clsx([
      jarType === 'black' && 'fill-gray-500',
      jarType === 'clear' && 'fill-white',
      jarType === 'green' && 'fill-green-500',
    ]);
  };

  return (
    <div className='border border-gray-700 rounded-xl h-full relative overflow-hidden'>
      <div className='absolute top-6 -left-[60px] -rotate-45'>
        <div className={`${renderBanner(type)} px-2 text-md text-center rounded-lg font-semibold uppercase w-[200px] h-6 flex items-center justify-center`}>
          {type}
        </div>
      </div>

      <div className='flex p-3 items-center h-full'>
        <NextImage
          className='rounded-xl'
          width={100}
          height={100}
          alt={strain}
          src={imageUrl}
        />

        <div className='pl-4'>
          <div className='pb-1 flex space-x-1'>
            {almostGone && <Badge variant='almostGone' />}
            {isNew && <Badge variant='new' />}
            {ourPick && <Badge variant='ourPick' />}
          </div>
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
        </div>
      </div>
    </div>
  );
};

export { Flower };
