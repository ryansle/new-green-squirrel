// Components
import NextLink from 'next/link';
import { FaInstagram as Instagram, FaBong as Bong } from 'react-icons/fa6';
import { GiSquirrel as Squirrel, GiChestnutLeaf as Leaf } from 'react-icons/gi';

const Footer = () => {
  const iconStyle = 'w-5 h-5 fill-green-400 transition ease-in-out duration-300';

  const network = [
    { url: 'https://www.instagram.com/nygreensquirrel/', text: 'Green Squirrel', icon: <Squirrel className={iconStyle} /> },
    { url: 'https://www.instagram.com/thegreenspeakeasy/', text: 'The Green Speakeasy', icon: <Leaf className={iconStyle} /> },
    { url: 'https://www.instagram.com/theglassshopbk/', text: 'The Glass Shop', icon: <Bong className={iconStyle} /> }
  ];

  const renderIcon = (platform: string) => {
    switch (platform) {
      case 'Instagram':
        return <Instagram className={iconStyle} />;
      default:
        return;
    }
  };

  return (
    <footer className='border-t border-gray-700 px-6 h-20 mt-24 xs:px-20 lg:px-48 2xl:px-72 3xl:px-[400px] 4xl:px-[500px]'>
      <div className='w-full py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <div className='items-center hidden xl:flex'>
              <h1 className='mb-4 text-2xl font-semibold text-white'>
                We&apos;re on social media!
              </h1>
            </div>
            <p className='text-gray-600 mb-3'>
              Follow us to stay up to date on product drops, free gifts, and a whole lot more!
            </p>
            <div className='flex space-x-2'>
              {network.map((partner) => (
                <NextLink key={partner.text} href={partner.url}>
                  <button className='rounded border flex py-1 px-2 border-green-500 hover:scale-102 transition duration-300 ease-in-out'>
                    {partner.icon}
                    <span className='pl-2 text-white'>
                      {partner.text}
                    </span>
                  </button>
                </NextLink>
              ))}
            </div>
          </div>

          {/* Resources & Follow Us */}
          <div className='grid grid-cols-4 space-x-8'>
            <div className='col-span-3'>
              <h2 className='mb-6 text-xs font-semibold uppercase text-white sm:text-sm'>
                Built With
              </h2>
              <div className='grid grid-cols-2 space-x-4'>
                <div className='col-span-1'>
                  <ul className='text-gray-600 font-medium'>
                    <li className='mb-2'>
                      <NextLink href='https://nextjs.org/' className='hover:underline'>Next.js</NextLink>
                    </li>
                    <li className='mb-2'>
                      <NextLink href='https://react.dev/' className='hover:underline'>React.js</NextLink>
                    </li>
                    <li className='mb-2'>
                      <NextLink href='https://tailwindcss.com/' className='hover:underline'>Tailwind CSS</NextLink>
                    </li>
                  </ul>
                </div>
                <div className='col-span-1'>
                  <ul className='text-gray-600 font-medium'>
                    <li className='mb-2'>
                      <NextLink href='https://flowbite.com/' className='hover:underline'>Flowbite</NextLink>
                    </li>
                    <li className='mb-2'>
                      <NextLink href='https://headlessui.com/' className='hover:underline'>Headless UI</NextLink>
                    </li>
                    <li className='mb-2'>
                      <NextLink href='https://www.contentful.com/' className='hover:underline'>Contentful</NextLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-600 sm:text-center'>
            © {new Date().getFullYear()} Green Squirrel Collective. All Rights Reserved.
          </span>
        </div>
      </div>

    </footer>
  );
};

export { Footer };