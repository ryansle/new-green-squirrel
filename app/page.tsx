// Components
import { Layout } from '@/components/navigation';
import { Hero, Policies, Gallery } from '@/components/home';
import { Divider } from '@/components/global';

// Types
import type { NextPage } from 'next';

// Utilities
import { fetchPolicies } from '@/sanity/fetch';

const HomePage: NextPage = async () => {
  const policies = await fetchPolicies();

  return (
    <Layout>
      <Hero />
      <Gallery />
      <Divider />
      <Policies policies={policies} />
    </Layout>
  );
};

export default HomePage;