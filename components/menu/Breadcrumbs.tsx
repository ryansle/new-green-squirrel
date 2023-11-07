// Components
import NextLink from 'next/link';
import { FaChevronRight as ChevronRight } from 'react-icons/fa';

// Types
import type { Route } from '@/lib/types';

type BreadcrumbsProps = {
  routes: Route[];
}

const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { routes } = props;

  return (
    <div className='flex mb-2'>
      {routes.map((route: Route, index) => (
        <div className='flex items-center justify-center text-gray-400' key={route.text}>
          <NextLink
            className={`${index === routes.length - 1 && 'font-medium text-white'} flex items-center jusitfy-center hover:underline hover:underline-offset-2`}
            href={route.href}
          >
            <span className={`${index === routes.length - 1 ? 'fill-white' : 'fill-gray-400'}`}>
              {route.icon}
            </span>
            <span className='ml-2'>{route.text}</span>
          </NextLink>
          {index !== routes.length - 1 && <ChevronRight className='fill-gray-400 mx-4 w-3 h-3' />}
        </div>
      ))}
    </div>
  );
};

export { Breadcrumbs };