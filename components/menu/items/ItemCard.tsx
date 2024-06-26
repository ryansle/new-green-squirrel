// Components
import NextImage from 'next/image';
import { Badge } from '@/components/menu';

// Types
import type { ReactNode } from 'react';

// Utilities
import clsx from 'clsx';

type ItemCardProps = {
  children: ReactNode;
  bannerType?: 'sativa' | 'indica' | 'hybrid' | 'Almost Gone' | 'new' | 'Our Pick' | 'Small' | 'Medium' | 'Standard' | 'Premium' | 'Reserve' | '';
  altText: string;
  imageUrl: string;
  almostGone: boolean;
  isNew: boolean;
  ourPick?: boolean;
};

const ItemCard = (props: ItemCardProps) => {
  const {
    children,
    bannerType = '',
    altText,
    imageUrl,
    almostGone,
    isNew,
    ourPick = '',
  } = props;

  const renderBanner = (variant: string) => {
    return clsx([
      variant === 'sativa' && 'bg-yellow-400 text-yellow-800',
      variant === 'indica' && 'bg-purple-300 text-purple-800',
      variant === 'hybrid' && 'bg-blue-400 text-blue-800',
      variant === 'new' && 'text-green-900 bg-teal-300',
      variant === 'Our Pick' && 'text-green-900 bg-green-100',
      variant === 'Almost Gone!' && 'text-red-700 bg-red-300',
      variant === 'Small' && 'text-black bg-gray-300',
      variant === 'Medium' && 'text-blue-800 bg-blue-300',
      variant === 'Standard' && 'text-yellow-800 bg-yellow-300',
      variant === 'Premium' && 'text-green-800 bg-green-300',
      variant === 'Reserve' && 'text-pink-800 bg-pink-300',
    ]);
  };

  return (
    <div className='border border-gray-700 rounded-xl h-full relative overflow-hidden'>
      <div className='absolute top-6 -left-[60px] -rotate-45'>
        <div className={`${renderBanner(bannerType)} px-2 text-md text-center rounded-lg font-semibold uppercase w-[200px] h-6 flex items-center justify-center`}>
          {bannerType}
        </div>
      </div>
      <div className='flex p-3 items-center h-full'>
        <NextImage
          className='rounded-xl'
          width={100}
          height={100}
          alt={altText}
          src={imageUrl}
        />
        <div className='pl-4'>
          <div className='pb-1 flex space-x-1'>
            {almostGone && <Badge variant='almostGone' />}
            {isNew && <Badge variant='new' />}
            {ourPick && <Badge variant='ourPick' />}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export { ItemCard };
