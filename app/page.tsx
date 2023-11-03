// Components
import { Layout } from '@/components/navigation';
import { Hero, Policies } from '@/components/home';
import { Divider } from '@/components/global';

// Types
import type { NextPage } from 'next';

// Utilities
import { fetchBatteries } from '@/sanity/fetch';

const HomePage: NextPage = async () => {
  const batteries = await fetchBatteries();

  return (
    <Layout>
      <Hero />
      {/* TODO: product scroller */}
      <Divider />
      <Policies />
    </Layout>
  );
};

export default HomePage;