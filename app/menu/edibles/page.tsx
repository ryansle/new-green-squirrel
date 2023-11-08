// Components
import { Layout } from '@/components/navigation';
import { MdOutlineStorefront as Store } from 'react-icons/md';
import { LiaCookieBiteSolid as Cookie } from 'react-icons/lia';
import { Inventory, Breadcrumbs } from '@/components/menu';

// Utilities
import { fetchEdibles } from '@/sanity/fetch';

const routes = [
  { href: '/menu', text: 'Menu', icon: <Store /> },
  { href: '/menu/edibles', text: 'Edibles', icon: <Cookie /> }
];

const EdiblesPage = async () => {
  const edibles = await fetchEdibles();

  return (
    <Layout>
      <Breadcrumbs routes={routes} />
      <h1 className='text-4xl font-semibold mb-10'>
        Edibles ({edibles.length})
      </h1>

      <Inventory
        inventory={edibles}
        category='edibles'
        fieldToSearch='name'
      />
    </Layout>
  );
};

export default EdiblesPage;