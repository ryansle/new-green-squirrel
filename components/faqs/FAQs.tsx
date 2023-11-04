'use client';

// Components
import { Disclosure, Transition } from '@headlessui/react';
import { Divider } from '@/components/global';
import { FaChevronDown as ChevronDown } from 'react-icons/fa';

// Types
import type { FAQ } from '@/lib/types';

type FAQsProps = {
  faqs: FAQ[];
};

// TODO: fine tune the transition animation
const FAQs = (props: FAQsProps) => {
  const { faqs } = props;

  return (
    <div>
      <h1 className='font-semibold text-4xl mb-4'>
        Frequently Asked Questions
      </h1>

      <div className='space-y-1 mb-10'>
        <p>
          Have questions? We&apos;ve got answers.
        </p>
        <p>
          However, if you can&apos;t find the answer that you&apos;re looking for, send a message to dispatch and we&apos;ll get back to you as soon as we can.
        </p>
      </div>

      <Divider margins='md' />
      {faqs?.map((pair: FAQ) => (
        <div key={pair.question} className='w-full'>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex items-center justify-between w-full pr-10'>
                  <h2 className='font-semibold text-xl'>
                    {pair.question}
                  </h2>
                  <ChevronDown className={open ? '-rotate-180 transform duration-500 ease-in-out' : ''} />
                </Disclosure.Button>

                <Transition
                  className='mt-4 text-gray-400'
                  enter='transition duration-100 ease-out'
                  enterFrom='transform scale-95 opacity-0'
                  enterTo='transform scale-100 opacity-100'
                  leave='transition duration-75 ease-out'
                  leaveFrom='transform scale-100 opacity-100'
                  leaveTo='transform scale-95 opacity-0'
                >
                  <Disclosure.Panel>
                    {pair.answer}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Divider margins='md' />
        </div>
      ))}
    </div>
  );
};

export { FAQs };