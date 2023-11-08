

// Components
import { FaSearch as Search } from 'react-icons/fa';

// Types
import type { ChangeEvent } from 'react';

type SearchbarProps = {
  setSearchTerm: (searchTerm: string) => void;
  searchingFor: string;
};

const SearchBar = (props: SearchbarProps) => {
  const { setSearchTerm, searchingFor } = props;

  const updateSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as string;

    setSearchTerm(value);
  };

  return (
    <form className='mb-8'>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-2'>
          <Search className='fill-gray-400' />
        </div>
        <input
          type='search'
          id='search'
          className='w-full py-2 px-4 bg-white border rounded-xl text-black pl-10'
          placeholder={`Search ${searchingFor}...`}
          onChange={updateSearch}
        />
      </div>
    </form>
  );
};

export { SearchBar };