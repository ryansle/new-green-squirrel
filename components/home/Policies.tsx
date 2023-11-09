// Components
import { List } from '@/components';

type PoliciesProps = {
  policies: string[];
};

const Policies = (props: PoliciesProps) => {
  const { policies } = props;

  return (
    <List
      title='How does it work?'
      listItems={policies}
    />
  );
};

export { Policies };

