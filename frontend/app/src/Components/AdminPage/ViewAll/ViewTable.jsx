import React, { useState } from 'react';
import { Table, Button, Popconfirm } from 'antd';
import { setStatus } from './getAllLogs';

// Define the table columns
const columns = (handleAction) => [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Deadline',
    dataIndex: 'deadline',
    key: 'deadline',
    render: (deadline) => new Date(deadline).toLocaleDateString(),
    sorter: (a, b) => new Date(a.deadline) - new Date(b.deadline),
  },
  {
    title: 'Assigned By',
    dataIndex: 'Adminusername',
    key: 'Adminusername',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (createdAt) => new Date(createdAt).toLocaleString(),
    sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
  },
  {
    title: 'Actions',
    key: 'actions',
    render: (text, record) => (
      <span>
        <Button
          type="primary"
          className="m-2"
          onClick={() => handleAction(record, 'Accepted')}
        >
          Accept
        </Button>
        <Popconfirm
          title="Reject the task"
          description="Are you sure to reject this task?"
          onConfirm={() => handleAction(record, 'Rejected')}
          okText="Yes"
          cancelText="No"
        >
          <Button danger>
            Reject
          </Button>
        </Popconfirm>
      </span>
    ),
  },
];

// Handle task approval/rejection
const handleApprove = (record, value, filteredData, setData, setLoading) => {
  
  setStatus(record, value,filteredData,setData,setLoading)
};


  const App = ({ data, setData }) => {
  const [loading, setLoading] = useState(false);

 
  const filteredData = data.filter((record) => record.status === 'Pending');

  return (
    <Table
      columns={columns((record, value) =>
        handleApprove(record, value, filteredData, setData, setLoading)
      )}
      dataSource={filteredData}
      loading={loading}
      onChange={onChange}
      showSorterTooltip
      rowKey="_id" 
    />
  );
};

// Table change handler
const onChange = (pagination, filters, sorter, extra) => {
  console.log('Table parameters:', pagination, filters, sorter, extra);
};

export default App;
