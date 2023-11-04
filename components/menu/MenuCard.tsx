// Components
import NextLink from 'next/link';
import NextImage from 'next/image';

type MenuCardProps = {
  imageUrl: string;
  title: string;
  href: string;
};

const MenuCard = (props: MenuCardProps) => {
  const { imageUrl, title, href } = props;

  return (
    <NextLink href={href}>
      <div className='w-full rounded border border-gray-500 transition ease-in-out duration-300 hover:scale-102 hover:border-white'>
        <div className='flex flex-col items-center justify-center space-y-4 p-4'>
          <NextImage
            src={imageUrl}
            width={150}
            height={150}
            alt={title}
          />

          <h2 className='font-semibold text-2xl tracking-wide'>
            {title}
          </h2>
        </div>
      </div>
    </NextLink>
  );
};

export { MenuCard };
