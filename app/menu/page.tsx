// Components
import { Layout } from '@/components/navigation';
import { MenuCard } from '@/components/menu';

// Types
import type { NextPage } from 'next';

const routes = [
  {
    imageUrl: '/menu/bud.png',
    title: 'Flowers',
    href: '/menu/flowers',
  },
  {
    imageUrl: '/menu/dime.png',
    title: 'Cartridges',
    href: '/menu/carts',
  },
  {
    imageUrl: '/menu/stizzbattery.webp',
    title: 'Batteries',
    href: '/menu/batteries',
  },
  {
    imageUrl: '/menu/edibles.png',
    title: 'Edibles',
    href: '/menu/edibles',
  },
  {
    imageUrl: '/menu/preroll.webp',
    title: 'Prerolls',
    href: '/menu/prerolls',
  },
  {
    imageUrl: '/menu/rawgarden.png',
    title: 'Concentrates',
    href: '/menu/concentrates',
  },
  {
    imageUrl: '/menu/goodtrip.png',
    title: 'Specialties',
    href: '/menu/specials',
  },
  {
    imageUrl: '/menu/bong.png',
    title: 'Glass',
    href: 'https://theglassshopbk.com/',
  }
];

const MenuPage: NextPage = () => {
  return (
    <Layout>
      <h1 className='font-semibold text-4xl mb-10'>
        What are you looking for today?
      </h1>
      <div className='grid grid-cols-12 gap-4'>
        {routes.map((route) => (
          <div className='col-span-6 md:col-span-3' key={route.title}>
            <MenuCard
              imageUrl={route.imageUrl}
              href={route.href}
              title={route.title}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default MenuPage;
