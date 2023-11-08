// Components
import { GiSquirrel as Squirrel } from 'react-icons/gi';

type NoResultsProps = {
  searchTerm: string;
}

const NoResults = (props: NoResultsProps) => {
  const { searchTerm } = props;

  return (
    <div className='flex flex-col justify-center items-center w-full space-y-2'>
      <Squirrel className='w-24 h-24 fill-green-500' />
      <h1 className='font-medium text-3xl'>
        Could not find any results for &quot;<b>{searchTerm}</b>&quot;.
      </h1>
      <p className='text-2xl'>
        Try different or less specific keywords.
      </p>
    </div>
  );
};

export { NoResults };
