import React from 'react';
import ReactDOM from 'react-dom/client';
import { Table } from 'antd';  // Import Table component from antd

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    showSorterTooltip: {
      target: 'full-header', // Tooltip on full header
    },
    filters: [
      { text: 'Joe', value: 'Joe' },
      { text: 'Jim', value: 'Jim' },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          { text: 'Green', value: 'Green' },
          { text: 'Black', value: 'Black' },
        ],
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0, // Filtering function
    sorter: (a, b) => a.name.length - b.name.length, // Sort by name length
    sortDirections: ['descend'], // Sort direction
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend', // Default sort order
    sorter: (a, b) => a.age - b.age, // Sort by age
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      { text: 'London', value: 'London' },
      { text: 'New York', value: 'New York' },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0, // Filtering function
  },
];

// Sample data
const data = [
  { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
  { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
  { key: '3', name: 'Joe Black', age: 32, address: 'Sydney No. 1 Lake Park' },
  { key: '4', name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
];

// Handle changes (pagination, filters, sorter)
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

// Main App component
const App = () => (
  <Table
    columns={columns}
    dataSource={data}
    onChange={onChange}
    showSorterTooltip={{ target: 'sorter-icon' }} 
  />
);
export default App;