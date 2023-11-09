// Components
import { Layout } from '@/components/navigation';
import { Hero, Policies, Gallery } from '@/components/home';
import { Divider } from '@/components/global';

// Types
import type { NextPage } from 'next';
import type { Policy } from '@/lib/types';

// Utilities
import { fetchPolicies } from '@/sanity/fetch';

const HomePage: NextPage = async () => {
  const policies = await fetchPolicies();

  const formattedPolicies = policies.map((policy: Policy) => policy.policy);

  return (
    <Layout>
      <Hero />
      <Gallery />
      <Divider />
      <Policies policies={formattedPolicies} />
    </Layout>
  );
};

export default HomePage;