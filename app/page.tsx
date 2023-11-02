// Components
import { Layout } from '@/components/navigation';
import { Hero, Policies } from '@/components/home';
import { Divider } from '@/components/global';

// Types
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
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