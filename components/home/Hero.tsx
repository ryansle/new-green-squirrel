// Components
import NextLink from 'next/link';
import NextImage from 'next/image';

const Hero = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <NextImage
        src='/squirrel.png'
        width={50}
        height={50}
        alt='Green Squirrel Collective'
        className='mb-4'
      />
      <div className='text-center font-semibold tracking-wide space-y-3'>
        <h1 className='text-6xl'>
          Welcome to the
        </h1>
        <h1 className='text-7xl text-green-500 underline underline-offset-[6px] decoration-4'>
          Green Squirrel Collective.
        </h1>
      </div>

      <div className='text-gray-500 text-lg text-center mt-8'>
        <p>
          We love to give you free shit and we only carry what we smoke!
        </p>
        <p>
          Check out our super extensive menu and give us a follow on{' '}
          <NextLink
            className='font-semibold underline text-green-500'
            href='https://www.instagram.com/nygreensquirrel/'
          >
            Instagram
          </NextLink>!
        </p>
      </div>
    </div>
  );
};

export { Hero };
