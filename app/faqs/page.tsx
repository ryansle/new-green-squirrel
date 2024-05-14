// Components
import { Layout } from '@/components/navigation';
import { FAQs } from '@/components/faqs';

// Utilities
import { fetchFAQ } from '@/sanity/fetch';

const FAQPage = async () => {
  const faqs = await fetchFAQ();

  return (
    <Layout>
      <FAQs faqs={faqs} />
    </Layout>
  );
};

export default FAQPage;

export const revalidate = 30;