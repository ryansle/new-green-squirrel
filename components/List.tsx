// Components
import { GiChestnutLeaf as Leaf } from 'react-icons/gi';

type ListProps = {
  title: string;
  listItems: string[];
  centerTitle?: boolean;
}

const List = (props: ListProps) => {
  const { title = '', listItems, centerTitle = false } = props;

  return (
    <div>
      <h1 className={`font-semibold text-2xl mb-2 ${centerTitle && 'text-center'}`}>
        {title}
      </h1>

      <ul className='space-y-2 text-gray-500 list-inside text-md md:text-lg'>
        {listItems?.map((item) => (
          <li key={item} className='flex'>
            <Leaf className='fill-green-500 w-4 h-4 flex-shrink-0 mt-1' />
            <p className='ml-3'>
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { List };