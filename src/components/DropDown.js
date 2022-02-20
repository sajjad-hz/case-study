import { Select } from 'antd';

const DropDown = () => {

    const { Option } = Select;

    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    

  return (
    <Select  className="cards-list__header-btn" defaultValue="all" style={{ width: 120 }} onChange={handleChange}>
      <Option value="all">All</Option>
      <Option value="watchList">Watch List</Option>
    </Select>
  )
}

export default DropDown