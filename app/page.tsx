// Components
import { Layout } from '@/components/navigation';
import { Hero } from '@/components/home';
import { Divider } from '@/components/global';

// Types
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Divider />

    </Layout>
  );
};

export default HomePage;