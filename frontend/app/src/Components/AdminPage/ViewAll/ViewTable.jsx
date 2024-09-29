import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd'; 
import { setStatus } from './getAllLogs';

const columns = (handleApprove) => [
  {
    title: 'Name',
    dataIndex: 'UserName',
    showSorterTooltip: {
      target: 'full-header', 
    },
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.UserName.localeCompare(b.UserName), 
  },
  {
    title: 'Email',
    dataIndex: 'userEmail',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.userEmail.localeCompare(b.userEmail), 
  },
  {
    title: 'Type',
    dataIndex: 'transactionType',
    filters: [
      { text: 'Invoice', value: 'Invoice' },
      { text: 'Expense', value: 'Expense' },
      { text: 'Refund', value: 'Refund' },
      { text: 'Reimbursement', value: 'Reimbursement' }
    ],
  onFilter: (value, record) => record.transactionType == value,
 
    sorter: (a, b) => a.transactionType.trim().localeCompare(b.transactionType.trim()),
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.amount - b.amount, 
  }, 
  {
    title: 'Description',
    dataIndex: 'description',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <Button 
          type="primary" 
          onClick={() => handleApprove(record, 'Approved')} 
        >
          Approve
        </Button>
        <Button
        className='text-light' 
          onClick={() => handleApprove(record, 'Rejected')} 
          style={{ marginLeft: '8px',backgroundColor:'#ff0000' }}
        >
          Reject
        </Button>
      </span>
    ),
  },
];

const handleApprove = (record, value,setstatus, filteredData, setdata) => {
   setStatus(record, value)
    
    const idx = filteredData.findIndex(ele => ele._id === record._id);
    filteredData.splice(idx, 1);
    console.log(filteredData)
    setdata(filteredData);
    setstatus((prev)=>!prev)

};

const App = ({ data, setdata }) => {
  var  filteredData = data.filter(record => record.status === 'Pending');
  const [status,setstatus]=useState(false)
  useEffect(() => {
    console.log('Data has been updated:', data);
  }, [data]);

  return (
    <Table
      columns={columns((record, value) => handleApprove(record, value,setstatus, filteredData, setdata))} // Pass handleApprove with the data and setdata
      dataSource={filteredData} 
      onChange={onChange}
      showSorterTooltip={{ target: 'sorter-icon' }} 
    />
  );
};

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

export default App;
