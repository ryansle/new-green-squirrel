'use client';

// Components
import { Menu, Transition } from '@headlessui/react';
import NextLink from 'next/link';
import { GiHamburgerMenu as Hamburger } from 'react-icons/gi';

// Types
import type { Route } from '@/lib/types';

type MobileMenuProps = {
  content: Route[];
};

const MobileMenu = (props: MobileMenuProps) => {
  const { content } = props;

  return (
    <div className='flex items-center justify-center'>
      <div className='relative inline-block text-left z-10'>
        <Menu>
          {({ open }: { open: boolean }) => (
            <>
              <span className='rounded-md shadow-sm'>
                <Menu.Button
                  className='p-2 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-700 rounded-md'
                  aria-label='Menu'
                >
                  <Hamburger />
                </Menu.Button>
              </span>

              <Transition
                show={open}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items
                  static
                  className='absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none'
                >
                  <div className='py-1'>
                    {content.map((row) => (
                      <Menu.Item key={row.text}>
                        {({ active }) => (
                          <NextLink
                            className={`${active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700'
                              } flex w-full px-4 py-2 text-sm leading-5 text-left items-center gap-x-4`}
                            href={row.href}
                          >
                            {row.icon}
                            {row.text}
                          </NextLink>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
};

export { MobileMenu };