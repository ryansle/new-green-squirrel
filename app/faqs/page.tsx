// Components
import { Layout } from '@/components/navigation';
import { FAQs } from '@/components/faqs';

// Types
import type { NextPage } from 'next';

// Utilities
import { fetchFAQ } from '@/sanity/fetch';

const FAQPage: NextPage = async () => {
  const faqs = await fetchFAQ();

  return (
    <Layout>
      <FAQs faqs={faqs} />
    </Layout>
  );
};

export default FAQPage;
