// Components
import { Layout } from '@/components/navigation';
import { Breadcrumbs } from '@/components/menu/Breadcrumbs';
import { MdOutlineStorefront as Store } from 'react-icons/md';
import { LuCigarette as Joint } from 'react-icons/lu';
import { Preroll } from '@/components/menu/items';

// Types
import type { Preroll as PrerollType } from '@/lib/types';

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

      <div className='grid grid-cols-12 gap-4'>
        {prerolls.map((preroll: PrerollType) => (
          <div key={preroll.name} className='col-span-12 sm:col-span-6 xl:col-span-4'>
            <Preroll preroll={preroll} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default PrerollsPage;