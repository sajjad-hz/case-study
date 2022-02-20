import { useState } from 'react';
import { useSelector ,useDispatch } from 'react-redux'
import searchHandler from "../assets/api/serachAPI";
import { Spin, Input } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const SearchInput = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const cards = useSelector(state => state.cards)
  const { Search } = Input;

  const onSearch = async (value) => {
    if (value.trim().length > 0) {
      const {data} = await searchHandler.getSearchResult(value, 1);
      dispatch({
        type: 'CARDS',
        payload : data
      })
      dispatch({
        type: 'VALUE',
        payload : value
      })
    } else {
      dispatch({
        type: 'CARDS',
        payload : []
      })
      dispatch({
        type: 'VALUE',
        payload : ''
      })
    }
  };

  return (
    <div className="search">
      <Search className="search__input" placeholder="input search text" onSearch={onSearch} enterButton />
    </div>
  );
};

export default SearchInput ;
