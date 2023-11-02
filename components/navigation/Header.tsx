// Components
import { MobileMenu } from '@/components/navigation';
import { AiFillHome as Home } from 'react-icons/ai';
import {
  MdOutlineStorefront as Store,
  MdLocalOffer as Special
} from 'react-icons/md';
import { TbMessageQuestion as Question } from 'react-icons/tb';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { HeaderLinks } from '@/components/navigation';

const Header = () => {
  const routes = [
    { text: 'Home', href: '/', icon: <Home /> },
    { text: 'Menu', href: '/menu', icon: <Store /> },
    { text: 'Specials', href: '/specials', icon: <Special /> },
    { text: 'FAQs', href: '/faqs', icon: <Question /> },
  ];

  return (
    <header className='flex justify-between items-center py-5 px-6 border-b border-gray-700 bg-black sticky relative z-50 top-0 right-0 left-0 z-10 xs:px-20 lg:px-48 2xl:px-72 3xl:px-[400px] 4xl:px-[500px]'>
      <NextLink href='/' className='flex justify-center items-center'>
        <NextImage
          className='mr-4'
          height={40}
          width={40}
          src='/squirrel.png'
          alt='Green Squirrel Collective'
        />
        <h4 className='tracking-wider font-medium text-xl'>Green Squirrel Collective</h4>
      </NextLink>

      <HeaderLinks routes={routes} />

      <div className='xl:hidden'>
        <MobileMenu content={routes} />
      </div>
    </header>
  );
};

export { Header };