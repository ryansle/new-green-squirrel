// Components
import { Layout } from '@/components/navigation';
import { MdOutlineStorefront as Store } from 'react-icons/md';
import { LuCigarette as Joint } from 'react-icons/lu';
import { Inventory, Breadcrumbs } from '@/components/menu';

// Utilities
import { fetchPrerolls } from '@/sanity/fetch';

const routes = [
  { href: '/menu', text: 'Menu', icon: <Store /> },
  { href: '/menu/prerolls', text: 'Prerolls', icon: <Joint /> }
];

const PrerollsPage = async () => {
  const prerolls = await fetchPrerolls();

  return (
    <Layout>
      <Breadcrumbs routes={routes} />
      <h1 className='text-4xl font-semibold mb-10'>
        Prerolls ({prerolls.length})
      </h1>

      <Inventory
        inventory={prerolls}
        category='prerolls'
        fieldToSearch='name'
      />
    </Layout>
  );
};

export default PrerollsPage;