// Components
import { Layout } from '@/components/navigation';
import { MdOutlineStorefront as Store } from 'react-icons/md';
import { GiMushroomGills as Shroom } from 'react-icons/gi';
import { Inventory, Breadcrumbs } from '@/components/menu';

// Utilities
import { fetchSpecials } from '@/sanity/fetch';

const routes = [
  { href: '/menu', text: 'Menu', icon: <Store /> },
  { href: '/menu/concentrates', text: 'Specialty Items', icon: <Shroom /> }
];

const SpecialtyPage = async () => {
  const specialties = await fetchSpecials();

  return (
    <Layout>
      <Breadcrumbs routes={routes} />
      <h1 className='text-4xl font-semibold mb-10'>
        Specialty Items ({specialties.length})
      </h1>

      <Inventory
        inventory={specialties}
        category='specialty items'
        fieldToSearch='name'
      />
    </Layout>
  );
};

export default SpecialtyPage;