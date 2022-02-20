import { Input } from "antd";

const SearchInput = () => {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  return (
    <div className="search">
      <Search className="search__input" placeholder="input search text" onSearch={onSearch} enterButton />
    </div>
  );
};

export default SearchInput ;
