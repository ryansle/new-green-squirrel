// Mock Data
import { policies } from '@/lib/mock';

// Components
import { GiChestnutLeaf as Leaf } from 'react-icons/gi';

const Policies = () => {
  return (
    <div>
      <h1 className='font-semibold text-2xl mb-2'>
        How does it work?
      </h1>

      <ul className='space-y-2 text-gray-500 list-inside'>
        {policies.map((policy) => (
          <li key={policy} className='flex'>
            <Leaf className='fill-green-500 w-4 h-4 flex-shrink-0 mt-1' />
            <p className='ml-3'>
              {policy}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Policies };
