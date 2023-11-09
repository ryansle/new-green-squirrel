type TabsProps = {
  tabs: string[];
  selectedTab: string;
  onClickHandler: (tab: string) => void;
};

const Tabs = (props: TabsProps) => {
  const { tabs, selectedTab, onClickHandler } = props;

  return (
    <div className='flex mb-4 items-center border-b border-gray-700 mb-6 text-lg w-full overflow-auto md:justify-center'>
      {tabs?.map((tab) => (
        <button
          key={tab}
          onClick={() => onClickHandler(tab)}
          className={`${selectedTab === tab ? 'font-semibold rounded-t-xl bg-green-400 text-green-800' : ''} px-4 py-2`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export { Tabs };